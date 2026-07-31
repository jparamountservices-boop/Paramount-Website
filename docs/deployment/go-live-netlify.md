# Going Live on Netlify (domain at Hostinger)

Two phases: **(A) deploy + test on a free Netlify URL**, then **(B) point
paramountknox.com at it** when you're happy. No downtime to your current site
until phase B.

## Phase A — Deploy to Netlify (get a preview link)

1. Go to **https://app.netlify.com** and **Sign up with GitHub** (use the same
   GitHub account that owns the repo).
2. **Add new site → Import an existing project → GitHub**.
3. Authorize Netlify, then pick **paramount-website**.
4. Branch to deploy: **`claude/paramount-knox-seo-strategy-ntot8s`**
   (build command and publish dir come from `netlify.toml` automatically:
   `npm run build` → `dist`).
5. Click **Deploy**. In ~1–2 minutes you get a live preview URL like
   `https://random-name.netlify.app`.
6. (Optional) **Site settings → Change site name** to something like
   `paramount-knox` so the preview is `paramount-knox.netlify.app`.

Open that URL on your phone and computer and test everything. Every time we push
a change, Netlify rebuilds and updates this URL automatically.

## Turn on lead emails (so the form reaches you)

1. In Netlify: **Site configuration → Forms** (Netlify auto-detects the "quote"
   form on first deploy after a real submission).
2. Submit a test message through the site's form.
3. **Forms → Form notifications → Add notification → Email notification** →
   send to **j.paramountservices@gmail.com**.
4. Now every quote request emails you and is saved in Netlify → Forms.

> If Netlify doesn't show the form after deploy, tell me — I'll add a tiny
> hidden detection form (a known Astro + Netlify Forms quirk) and re-push.

## Phase B — Point paramountknox.com at Netlify (the switch)

Do this only when the preview looks great and photos/content are set. This is
what replaces the old Elementor site.

1. In Netlify: **Domain management → Add a domain** → enter `paramountknox.com`.
2. Netlify shows you the DNS records to set. Use the **recommended records**
   (keep DNS at Hostinger — don't change nameservers unless you want to):
   - An **A record** for `@` (root) pointing to Netlify's load balancer IP
     (Netlify shows the exact IP, currently `75.2.60.5`).
   - A **CNAME** for `www` pointing to your `*.netlify.app` site.
3. In **Hostinger**: open **hPanel → Domains → paramountknox.com → DNS / Nameservers**.
   - Edit the existing **A record** for `@` to the Netlify IP.
   - Edit/add the **CNAME** for `www` to your Netlify subdomain.
   - Remove old records that point to the current Elementor/WordPress host for
     `@` and `www` (so they don't conflict).
4. Back in Netlify, click **Verify / Provision certificate** — it issues free
   HTTPS (Let's Encrypt) automatically once DNS resolves (can take 1–24 hrs).

### Safer alternative
If editing individual records feels risky, Netlify can host your DNS: add the
domain in Netlify, then in Hostinger change the **nameservers** to the ones
Netlify gives you. Netlify then manages everything and provisions HTTPS. Either
way works — the A/CNAME method keeps DNS at Hostinger.

## After the switch
- Visit `paramountknox.com` and a few pages — confirm the new site loads with
  HTTPS.
- Test the quote form once live and confirm the email arrives.
- In **Google Search Console**, make sure `paramountknox.com` is verified and
  submit `https://paramountknox.com/sitemap-index.xml`.
- Spot-check old URLs (e.g. `/concrete/driveway/`) redirect correctly (handled
  by `netlify.toml`).

## Rollback
If anything looks wrong after the switch, set the Hostinger A/CNAME records back
to their old values and the Elementor site returns. That's your safety net.
