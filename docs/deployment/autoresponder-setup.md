# Auto-responder Setup (thank-you email to leads)

When someone submits the quote form, they automatically get a branded thank-you
email (what happens next + about us + 5 tips for choosing a contractor). It runs
on Netlify via `netlify/functions/submission-created.mjs` and sends through
**Resend** (free: 3,000 emails/month).

Until you complete the steps below, the function safely does nothing — form
submissions still work and still email you.

## Step 1 — Create a Resend account + API key
1. Go to **https://resend.com** → sign up (free).
2. **API Keys → Create API Key** → name it "paramount" → copy the key
   (starts with `re_...`). You only see it once.

## Step 2 — Verify your sending domain (so emails come from you)
So the email sends from `paramountknox.com` and lands in inboxes (not spam):
1. In Resend: **Domains → Add Domain** → enter **paramountknox.com**.
2. Resend shows a few **DNS records** (SPF/DKIM — some TXT and CNAME records).
3. Add those records in **Hostinger → hPanel → DNS** for paramountknox.com
   (same place we'll do the go-live switch — easy to do at the same time).
4. Back in Resend, click **Verify**. (Can take a few minutes to a few hours.)

> Shortcut for testing first: you can skip domain verification and Resend will
> let you send from `onboarding@resend.dev` **to your own email only**. Good for a
> quick test, but verify the domain before real customers use the form.

## Step 3 — Add the keys to Netlify
In Netlify → **Site configuration → Environment variables → Add a variable**:

| Key | Value |
|---|---|
| `RESEND_API_KEY` | your `re_...` key from Step 1 |
| `AUTORESPONDER_FROM` | `Paramount Concrete & Hardscapes <hello@paramountknox.com>` |

(Use any name at your verified domain for the "from" address, e.g. `hello@`,
`info@`, or `jay@`.)

## Step 4 — Redeploy & test
1. Trigger a redeploy (or I push any change) so the new env vars take effect.
2. Submit a test on the live site using **an email you can check**.
3. You should receive the branded thank-you email within a minute.

## Editing the email
The email content (thank-you text, about-us, tips, colors) lives in
`netlify/functions/submission-created.mjs`. Ask me to change any wording and I'll
update and push it.

## Notes
- Replies go to **j.paramountservices@gmail.com** (set as reply-to), so if a lead
  replies to the thank-you email, it reaches your inbox.
- This is separate from the notification that emails **you** the lead details —
  both work together.
