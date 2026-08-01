/**
 * Auto-responder: Netlify automatically runs a function named
 * "submission-created" whenever a Netlify Forms submission is verified.
 * This sends the person who filled out the form a branded thank-you email
 * via Resend (https://resend.com).
 *
 * TO ACTIVATE (see docs/deployment/autoresponder-setup.md):
 *   1. Create a free Resend account and an API key.
 *   2. In Netlify → Site configuration → Environment variables, add:
 *        RESEND_API_KEY      = your Resend API key
 *        AUTORESPONDER_FROM  = Paramount Concrete & Hardscapes <hello@paramountknox.com>
 *      (the "from" address must be on a domain you verified in Resend)
 *   3. Redeploy. Until the API key is set, this function safely does nothing.
 */

const PHONE = '(865) 237-9770';
const REPLY_TO = 'j.paramountservices@gmail.com';

export const handler = async (event) => {
  try {
    const body = JSON.parse(event.body || '{}');
    const data = (body.payload && body.payload.data) || {};
    const to = data.email;
    const firstName = (data.name || '').trim().split(' ')[0] || 'there';

    const apiKey = process.env.RESEND_API_KEY;
    // Not configured yet, or no email on the submission → do nothing, quietly.
    if (!apiKey || !to) return { statusCode: 200, body: 'skip' };

    const from =
      process.env.AUTORESPONDER_FROM ||
      'Paramount Concrete & Hardscapes <onboarding@resend.dev>';

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: REPLY_TO,
        subject: 'Thanks for reaching out — Paramount Concrete & Hardscapes',
        html: html(firstName),
        text: text(firstName),
      }),
    });

    if (!res.ok) {
      console.error('Resend error', res.status, await res.text());
      return { statusCode: 200, body: 'email-failed' };
    }
    return { statusCode: 200, body: 'sent' };
  } catch (err) {
    console.error('autoresponder error', err);
    // Never fail the submission because of the email.
    return { statusCode: 200, body: 'error' };
  }
};

function html(name) {
  return `<!doctype html>
<html>
<body style="margin:0;background:#f4f1ea;font-family:Arial,Helvetica,sans-serif;color:#2b2b2b;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f1ea;padding:24px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:10px;overflow:hidden;">
        <tr><td style="background:#16130f;padding:22px 28px;">
          <span style="color:#ffffff;font-size:20px;font-weight:bold;letter-spacing:.5px;">PARAMOUNT</span>
          <span style="color:#e8792b;font-size:12px;font-weight:bold;text-transform:uppercase;letter-spacing:2px;"> &nbsp;Concrete &amp; Hardscapes</span>
        </td></tr>
        <tr><td style="padding:32px 28px 8px;">
          <h1 style="margin:0 0 12px;font-size:24px;color:#16130f;">Thanks, ${name} — we've got your request!</h1>
          <p style="font-size:16px;line-height:1.6;margin:0 0 16px;">
            We appreciate you reaching out to Paramount Concrete &amp; Hardscapes. Here's what happens next:
          </p>
          <p style="font-size:16px;line-height:1.6;margin:0 0 16px;">
            <strong>We'll give you a call</strong> to talk through your project — your ideas, your space,
            timeline and budget — before anyone comes out. No surprise visits, no pressure.
          </p>
          <table cellpadding="0" cellspacing="0" style="margin:8px 0 20px;">
            <tr><td style="background:#f7e3ce;border-left:4px solid #e8792b;padding:14px 16px;border-radius:6px;font-size:15px;line-height:1.5;">
              📷 <strong>Want a faster, more accurate price?</strong> Text a few photos and rough
              measurements of your space to <strong>${PHONE}</strong>. The more we can see, the more
              accurate your quote.
            </td></tr>
          </table>

          <h2 style="font-size:18px;color:#16130f;margin:24px 0 8px;">A little about us</h2>
          <p style="font-size:15px;line-height:1.6;margin:0 0 16px;color:#4b463f;">
            We're a Knoxville-based crew that's obsessed with the part most people never see — the base
            prep, drainage and reinforcement that make concrete and hardscapes actually last in East
            Tennessee's clay soil and freeze-thaw winters. Licensed, insured, and locally owned since 2018.
          </p>

          <h2 style="font-size:18px;color:#16130f;margin:24px 0 8px;">5 quick tips for choosing a concrete contractor</h2>
          <ol style="font-size:15px;line-height:1.7;margin:0 0 16px;padding-left:20px;color:#4b463f;">
            <li><strong>Ask about the base, not just the concrete.</strong> Most failures come from skipped prep — compacted base, drainage and reinforcement are what make it last.</li>
            <li><strong>Confirm licensed &amp; insured</strong> — and ask to see proof before work starts.</li>
            <li><strong>Get it in writing.</strong> An itemized quote protects you from surprise change orders.</li>
            <li><strong>Read the reviews</strong> — look for comments about cleanup, communication and work that held up over time.</li>
            <li><strong>Don't just pick the cheapest bid.</strong> A lowball usually means thin slabs or skipped prep you'll pay for later.</li>
          </ol>

          <p style="font-size:16px;line-height:1.6;margin:20px 0 8px;">
            Talk soon,<br /><strong>The Paramount Team</strong>
          </p>
          <p style="font-size:15px;margin:0 0 4px;">
            📞 <a href="tel:+18652379770" style="color:#e8792b;text-decoration:none;font-weight:bold;">${PHONE}</a>
          </p>
          <p style="font-size:14px;margin:0 0 24px;">
            <a href="https://paramountknox.com" style="color:#e8792b;">paramountknox.com</a> &nbsp;·&nbsp;
            <a href="https://www.facebook.com/paramountknox/" style="color:#e8792b;">Facebook</a> &nbsp;·&nbsp;
            <a href="https://www.instagram.com/parmounthomerenovations/" style="color:#e8792b;">Instagram</a>
          </p>
        </td></tr>
        <tr><td style="background:#faf6f1;padding:16px 28px;font-size:12px;color:#8a8377;">
          Paramount Concrete &amp; Hardscapes · Knoxville, TN · You're receiving this because you
          requested a consultation at paramountknox.com.
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function text(name) {
  return `Thanks, ${name} — we've got your request!

We appreciate you reaching out to Paramount Concrete & Hardscapes. Here's what happens next:

We'll give you a CALL to talk through your project — your ideas, your space, timeline and budget — before anyone comes out. No surprise visits, no pressure.

Want a faster, more accurate price? Text a few photos and rough measurements of your space to ${PHONE}.

ABOUT US
We're a Knoxville-based crew obsessed with the part most people never see — the base prep, drainage and reinforcement that make concrete and hardscapes last in East Tennessee. Licensed, insured, and locally owned since 2018.

5 TIPS FOR CHOOSING A CONCRETE CONTRACTOR
1. Ask about the base, not just the concrete — prep is what makes it last.
2. Confirm they're licensed & insured, and ask for proof.
3. Get an itemized quote in writing.
4. Read reviews — cleanup, communication, and work that held up.
5. Don't just pick the cheapest bid.

Talk soon,
The Paramount Team
${PHONE}
paramountknox.com`;
}
