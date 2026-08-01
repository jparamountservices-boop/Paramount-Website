/**
 * TEMPORARY diagnostic endpoint (safe to delete later).
 * Open in a browser:
 *   /.netlify/functions/diag           → shows if the Resend env vars reached the runtime
 *   /.netlify/functions/diag?send=1    → also attempts a real Resend send to the owner
 *                                         and prints the exact Resend status + response.
 */
const readEnv = (name) =>
  process.env[name] ?? process.env[name.toLowerCase()] ?? process.env[name.toUpperCase()];

export const handler = async (event) => {
  const apiKey = readEnv('RESEND_API_KEY');
  const from = readEnv('AUTORESPONDER_FROM') || '(AUTORESPONDER_FROM is unset)';

  const out = {
    hasApiKey: !!apiKey,
    apiKeyPrefix: apiKey ? apiKey.slice(0, 4) + '…' : null,
    from,
    resendStatus: undefined,
    resendResponse: undefined,
    fetchError: undefined,
  };

  const wantSend = event.queryStringParameters && event.queryStringParameters.send === '1';
  if (wantSend && apiKey) {
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from,
          to: ['j.paramountservices@gmail.com'],
          subject: '[TEST] Paramount autoresponder diagnostic',
          html: '<p>If you can read this, Resend is working from the Netlify function. 🎉</p>',
          text: 'If you can read this, Resend is working from the Netlify function.',
        }),
      });
      out.resendStatus = res.status;
      out.resendResponse = await res.text();
    } catch (e) {
      out.fetchError = String(e);
    }
  }

  // Reveal the actual env var NAMES the function can see (names only, not values)
  // so we can spot a typo/trailing-space in the variable name.
  const allKeys = Object.keys(process.env);
  const matching = allKeys.filter((k) => /resend|autoresp|from|api|key/i.test(k));
  const exactApiKey = Object.prototype.hasOwnProperty.call(process.env, 'RESEND_API_KEY');
  const exactFrom = Object.prototype.hasOwnProperty.call(process.env, 'AUTORESPONDER_FROM');

  const lines = [
    'AUTORESPONDER DIAGNOSTIC',
    '========================',
    'hasApiKey:      ' + out.hasApiKey,
    'apiKeyPrefix:   ' + out.apiKeyPrefix,
    'from:           ' + out.from,
    'resendStatus:   ' + (out.resendStatus ?? '(add ?send=1 to test a real send)'),
    'resendResponse: ' + (out.resendResponse ?? ''),
    'fetchError:     ' + (out.fetchError ?? ''),
    '',
    'ENV DEBUG',
    '---------',
    'exact RESEND_API_KEY present:     ' + exactApiKey,
    'exact AUTORESPONDER_FROM present: ' + exactFrom,
    'matching env var names: ' + (matching.length ? matching.map((k) => JSON.stringify(k)).join(', ') : '(none)'),
    'total env vars seen: ' + allKeys.length,
    'CONTEXT: ' + (process.env.CONTEXT ?? '(none)'),
    'SITE_NAME: ' + (process.env.SITE_NAME ?? '(none)'),
    'URL: ' + (process.env.URL ?? '(none)'),
  ];
  return {
    statusCode: 200,
    headers: { 'content-type': 'text/plain; charset=utf-8' },
    body: lines.join('\n'),
  };
};
