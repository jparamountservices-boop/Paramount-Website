/**
 * Auto-responder: Netlify runs a function named "submission-created" whenever a
 * Netlify Forms submission is verified. This emails the person who filled out
 * the form a branded, SERVICE-SPECIFIC thank-you via Resend (https://resend.com).
 *
 * The copy adapts to the service they picked in the form (concrete, pavers,
 * retaining walls, fire pits, etc.) and has a warm, human voice.
 *
 * TO ACTIVATE (see docs/deployment/autoresponder-setup.md):
 *   RESEND_API_KEY      = your Resend API key
 *   AUTORESPONDER_FROM  = Paramount Concrete & Hardscapes <hello@paramountknox.com>
 * Until RESEND_API_KEY is set, this function safely does nothing.
 */

const PHONE = '(865) 237-9770';
const REPLY_TO = 'j.paramountservices@gmail.com';
const SIGNOFF = 'Jay &amp; the Paramount crew'; // change the name if you'd like

// -------- service-specific copy ---------------------------------------------
const CONTENT = {
  concrete: {
    subject: 'Thanks for reaching out about your concrete project!',
    lead: `Concrete is what we do more than anything else — honestly, it's the stuff we geek out over. Whether you're picturing a fresh driveway, a patio built for summer nights, or a stamped design that makes the neighbors look twice, the magic isn't in the concrete itself. It's in everything underneath it.`,
    heading: 'A few things worth knowing about concrete',
    points: [
      `<strong>The base is everything.</strong> In our East Tennessee clay, a slab is only as good as the compacted base and drainage beneath it — that's exactly where we obsess.`,
      `<strong>Finishes are the fun part.</strong> We'll help you weigh a clean broom finish against stamped patterns that mimic stone, slate or brick, at a fraction of the price of the real thing.`,
      `<strong>Ask the tough questions.</strong> Slab thickness, reinforcement, control joints — if a contractor hand-waves those, keep looking. We'll happily walk you through ours.`,
    ],
  },
  pavers: {
    subject: 'Thanks for reaching out about your paver project!',
    lead: `Pavers are where we get to have a little fun — patterns, borders, curves, the works. And because they flex with the ground instead of fighting it, a good paver install can outlast just about anything. The secret? It all comes down to the base and the edges.`,
    heading: 'A few things worth knowing about pavers',
    points: [
      `<strong>Base + edges win.</strong> Deep compacted base, locked joints, solid edge restraint — that's what keeps pavers tight and flat for decades.`,
      `<strong>Endless looks.</strong> We'll bring options from Belgard, Techo-Bloc and Regal so it fits your home's style, not just a catalog.`,
      `<strong>Repairable for life.</strong> If a paver ever shifts, we lift and reset it — no ripping up a whole slab.`,
    ],
  },
  walls: {
    subject: 'Thanks for reaching out about your retaining wall!',
    lead: `Retaining walls are equal parts muscle and craft — they hold back tons of soil and water while turning a sloped yard into usable space. Built right, they stand straight for decades. Built wrong, they lean and blow out. We build the first kind.`,
    heading: 'A few things worth knowing about retaining walls',
    points: [
      `<strong>Drainage is the whole game.</strong> Gravel backfill and a drain line behind the wall are what keep water pressure from slowly pushing it over.`,
      `<strong>Height matters.</strong> Walls over about 4 feet usually need engineering and a permit — we handle all of that for you.`,
      `<strong>It's not just function.</strong> Block, natural stone, boulders, seat walls — we'll match the look to your space.`,
    ],
  },
  firepit: {
    subject: 'Thanks for reaching out about your fire feature!',
    lead: `Ah, the fire pit — our favorite way to turn an ordinary patio into the spot everyone ends up gathering. Wood-burning crackle or clean gas flame, it's the feature that stretches your outdoor season well into the cool nights.`,
    heading: 'A few things worth knowing about fire pits',
    points: [
      `<strong>Gas or wood?</strong> Wood brings the crackle and the most heat; gas lights instantly with no smoke. We build both — happy to help you pick.`,
      `<strong>Built-in beats drop-in.</strong> We tie it into your patio and match the materials so it looks original to the space, not bolted on.`,
      `<strong>Seating makes it.</strong> A curved seat wall around the fire is what turns it into a real hangout.`,
    ],
  },
  hardscape: {
    subject: 'Thanks for reaching out about your outdoor project!',
    lead: `Walkways, steps, the whole flow of a yard — this is the stuff that makes a sloped East Tennessee lot actually work. Done well, you barely notice it; it just feels right underfoot.`,
    heading: 'A few things worth knowing',
    points: [
      `<strong>Safe and solid.</strong> Consistent riser heights and real footings keep steps safe and true for years.`,
      `<strong>Materials to match.</strong> Paver, natural stone, flagstone — we'll tie it into the rest of your space.`,
      `<strong>Grading matters.</strong> On our hills, drainage and grading quietly make or break the finished look.`,
    ],
  },
  generic: {
    subject: 'Thanks for reaching out!',
    lead: `Thanks for getting in touch — we're genuinely glad you did. Whatever you've got in mind out there, we'll help you figure out the smartest way to build it so it actually lasts.`,
    heading: '5 quick tips for choosing a contractor',
    points: [
      `<strong>Ask about the base, not just the concrete.</strong> Most failures come from skipped prep.`,
      `<strong>Confirm licensed &amp; insured</strong> — and ask to see proof before work starts.`,
      `<strong>Get it in writing.</strong> An itemized quote protects you from surprise change orders.`,
      `<strong>Read the reviews</strong> — look for cleanup, communication, and work that held up over time.`,
      `<strong>Don't just pick the cheapest bid.</strong> A lowball usually means thin slabs or skipped prep.`,
    ],
  },
};

function pickContent(serviceRaw) {
  const s = (serviceRaw || '').toLowerCase();
  if (s.includes('paver')) return CONTENT.pavers;
  if (s.includes('retaining')) return CONTENT.walls;
  if (s.includes('fire')) return CONTENT.firepit;
  if (
    s.includes('sidewalk') || s.includes('slab') || s.includes('driveway') ||
    s.includes('patio') || s.includes('stamped') || s.includes('decorative') ||
    s.includes('pool') || s.includes('concrete')
  )
    return CONTENT.concrete;
  if (s.includes('walkway') || s.includes('step') || s.includes('hardscape'))
    return CONTENT.hardscape;
  return CONTENT.generic;
}

/** Build the email for a submission. Exported so we can preview it. */
export function buildEmail({ name, service } = {}) {
  const first = (name || '').trim().split(' ')[0] || 'there';
  const c = pickContent(service);
  return { subject: c.subject, html: html(first, c), text: text(first, c) };
}

export const handler = async (event) => {
  try {
    const body = JSON.parse(event.body || '{}');
    const data = (body.payload && body.payload.data) || {};
    const to = data.email;
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey || !to) return { statusCode: 200, body: 'skip' };

    const from = process.env.AUTORESPONDER_FROM ||
      'Paramount Concrete & Hardscapes <onboarding@resend.dev>';
    const { subject, html: htmlBody, text: textBody } = buildEmail({ name: data.name, service: data.service });

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from, to: [to], reply_to: REPLY_TO, subject, html: htmlBody, text: textBody }),
    });
    if (!res.ok) { console.error('Resend error', res.status, await res.text()); return { statusCode: 200, body: 'email-failed' }; }
    return { statusCode: 200, body: 'sent' };
  } catch (err) {
    console.error('autoresponder error', err);
    return { statusCode: 200, body: 'error' };
  }
};

function html(name, c) {
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
        <tr><td style="padding:30px 28px 8px;">
          <p style="font-size:16px;margin:0 0 14px;">Hey ${name},</p>
          <p style="font-size:16px;line-height:1.6;margin:0 0 16px;">${c.lead}</p>

          <table cellpadding="0" cellspacing="0" style="margin:6px 0 18px;width:100%;">
            <tr><td style="background:#16130f;color:#ffffff;padding:16px 18px;border-radius:8px;font-size:15px;line-height:1.6;">
              <strong style="color:#e8792b;">Here's how we do things:</strong> we'll give you a call first
              to talk through your project — your ideas, your space, your budget — before anyone ever pulls
              up to your driveway. No surprise visits, no pressure, no hard sell.
            </td></tr>
          </table>

          <table cellpadding="0" cellspacing="0" style="margin:0 0 20px;width:100%;">
            <tr><td style="background:#f7e3ce;border-left:4px solid #e8792b;padding:14px 16px;border-radius:6px;font-size:15px;line-height:1.5;">
              📷 <strong>Want to speed things up?</strong> Text a few photos and rough measurements of your
              space to <strong>${PHONE}</strong> — the more we can see, the more accurate your quote.
            </td></tr>
          </table>

          <h2 style="font-size:18px;color:#16130f;margin:24px 0 10px;">${c.heading}</h2>
          <ul style="font-size:15px;line-height:1.7;margin:0 0 18px;padding-left:20px;color:#4b463f;">
            ${c.points.map((p) => `<li style="margin-bottom:8px;">${p}</li>`).join('')}
          </ul>

          <p style="font-size:15px;line-height:1.6;margin:20px 0 16px;color:#4b463f;">
            A quick bit about us: we're a Knoxville crew that's a little obsessed with the parts you never
            see — the base prep, drainage and reinforcement that decide whether your project still looks
            great in ten years. Licensed, insured, locally owned since 2018, and we treat your yard like
            it's our own.
          </p>

          <p style="font-size:16px;line-height:1.6;margin:22px 0 6px;">
            Talk soon,<br /><strong>${SIGNOFF}</strong>
          </p>
          <p style="font-size:15px;margin:0 0 4px;">📞 <a href="tel:+18652379770" style="color:#e8792b;text-decoration:none;font-weight:bold;">${PHONE}</a></p>
          <p style="font-size:14px;margin:0 0 24px;">
            <a href="https://paramountknox.com" style="color:#e8792b;">paramountknox.com</a> &nbsp;·&nbsp;
            <a href="https://www.facebook.com/paramountknox/" style="color:#e8792b;">Facebook</a> &nbsp;·&nbsp;
            <a href="https://www.instagram.com/parmounthomerenovations/" style="color:#e8792b;">Instagram</a>
          </p>
        </td></tr>
        <tr><td style="background:#faf6f1;padding:16px 28px;font-size:12px;color:#8a8377;">
          Paramount Concrete &amp; Hardscapes · Knoxville, TN · You're getting this because you asked for a
          consultation at paramountknox.com.
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function text(name, c) {
  const points = c.points.map((p, i) => `${i + 1}. ${p.replace(/<[^>]+>/g, '')}`).join('\n');
  return `Hey ${name},

${c.lead}

HERE'S HOW WE DO THINGS: we'll give you a call first to talk through your project — your ideas, your space, your budget — before anyone ever pulls up to your driveway. No surprise visits, no pressure.

Want to speed things up? Text a few photos and rough measurements of your space to ${PHONE}.

${c.heading.toUpperCase()}
${points}

A quick bit about us: we're a Knoxville crew that's a little obsessed with the parts you never see — the base prep, drainage and reinforcement that make concrete and hardscapes last. Licensed, insured, locally owned since 2018.

Talk soon,
${SIGNOFF.replace('&amp;', '&')}
${PHONE}
paramountknox.com`;
}
