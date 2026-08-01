# Analytics & Search Console setup

The site is wired to support four free tools. Each is **off until you paste an ID** into
`src/data/company.ts` → `analytics`. Nothing renders (and nothing slows the site down) while the
values are blank.

```ts
analytics: {
  ga4Id: '',            // Google Analytics 4 — "G-XXXXXXXXXX"
  gscVerification: '',  // Google Search Console — HTML tag token
  bingVerification: '', // Bing Webmaster Tools — meta tag token
  clarityId: '',        // Microsoft Clarity — project ID
},
```

After pasting any value, commit + push (or let Netlify rebuild) and it goes live.

---

## 1. Google Search Console (do this first — it's how Google reports your rankings)

1. Go to <https://search.google.com/search-console> and add a property for `https://paramountknox.com`.
2. Choose the **URL prefix** method → **HTML tag**.
3. It shows a tag like `<meta name="google-site-verification" content="ABC123..." />`.
   Copy just the **content value** (`ABC123...`) into `gscVerification`.
4. Push, wait for the Netlify deploy, then click **Verify**.
5. Once verified, submit your sitemap: `https://paramountknox.com/sitemap-index.xml`.

Search Console shows which searches you appear for, your average position, click-through rate, and any
indexing problems. It's the single most useful free SEO tool.

## 2. Google Analytics 4 (traffic + conversions)

1. Go to <https://analytics.google.com> → create a property → add a **Web** data stream for the site.
2. Copy the **Measurement ID** (`G-XXXXXXXXXX`) into `ga4Id`.
3. Push. Traffic will start showing within a day.
4. Optional: in GA4, mark the `/thank-you/` page view as a **conversion** so you can count leads.

## 3. Bing Webmaster Tools (Bing/DuckDuckGo + a second sitemap home)

1. Go to <https://www.bing.com/webmasters> → add the site. You can **import from Search Console** to
   skip re-verifying, or use the **meta tag** method and paste the token into `bingVerification`.
2. Submit the same sitemap URL.

## 4. Microsoft Clarity (free heatmaps + session replay — see how visitors actually use the site)

1. Go to <https://clarity.microsoft.com> → create a project for the site.
2. Copy the **project ID** into `clarityId`.
3. Push. You'll be able to watch anonymized recordings of real visits and heatmaps of where people
   click — great for spotting where leads drop off.

---

### Privacy note
GA4 and Clarity set cookies / collect anonymized usage data. If you want to be thorough, add a short
line to a privacy policy page mentioning you use Google Analytics and Microsoft Clarity. Not legally
required for a small US contractor site in most cases, but it's good practice.
