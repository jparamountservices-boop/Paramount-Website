# Consolidating phrenovation.com → paramountknox.com

You own two websites for the same business. They compete for the same keywords,
split your backlinks/authority, and risk a duplicate Google Business Profile.
Fix: keep **paramountknox.com** and permanently redirect (301) **phrenovation.com**
into it. This is done at phrenovation.com's **domain/host**, not in this repo.

## Do this in order

### 1. Save anything worth keeping from phrenovation.com first
Before you redirect it, grab what you don't want to lose:
- **Blog posts** — phrenovation has real blog content; paramountknox's blog started
  empty. Send them to me and I'll rewrite/import them into the new site's blog so
  the content (and its SEO value) lives on paramountknox.com.
- **Project photos**, reviews/testimonials, any text you like.

### 2. Set up the 301 redirect (the main step)
Easiest method for a GoDaddy-hosted site — **Domain Forwarding**:
1. Sign in to **GoDaddy** → **My Products**.
2. Find **phrenovation.com** → **Domain** → **Manage / DNS**.
3. Open **Forwarding** (under Domain Settings) → **Add / Forward domain**.
4. Forward to: **https://paramountknox.com**
5. Settings: **Redirect type = Permanent (301)**, **Forward type = Forward only**
   (NOT "Forward with masking" — masking hurts SEO).
6. Save. (DNS can take a few minutes to a few hours to take effect.)

This sends every phrenovation.com visitor — and the SEO credit — to
paramountknox.com. Keep the phrenovation.com domain **registered** (don't cancel
it) so the redirect keeps working and keeps passing value.

> If phrenovation.com is registered/hosted somewhere other than GoDaddy, tell me
> which company and I'll give you the exact clicks — the concept ("301 forward the
> whole domain to https://paramountknox.com") is the same everywhere.

### 3. If you can do per-page redirects (optional, better)
Simple domain forwarding sends everything to the homepage. If your host supports
per-URL 301s, map the old pages to the closest match for a cleaner transfer:

| phrenovation.com | → paramountknox.com |
|---|---|
| `/` | `/` |
| `/concrete-patios-1` | `/concrete/patio/` |
| `/concrete-driveways-1` | `/concrete/driveway/` |
| `/stamped-concrete` | `/concrete/decorative-and-stamped/` |
| `/paver-patio-farragut` | `/service-area/farragut/` |
| `/about-us-1` | `/about/` |
| `/blog/...` | `/blog/` (or the specific migrated post) |
| anything else | `/` |

### 4. Clean up the duplicate business identity
- **Google Business Profile:** make sure there is only **ONE** listing for
  1201 Bob Kirby Rd. If two exist, keep one and remove/merge the duplicate. Point
  its website field to **paramountknox.com**.
- **Citations / social:** update any directory listing, Facebook, Instagram, Yelp,
  Nextdoor, etc. that points at phrenovation.com so it points at paramountknox.com.
- **Name:** use one business name everywhere — "Paramount Concrete & Hardscapes".

### 5. After it's live
- Visit a few old phrenovation.com URLs and confirm they land on paramountknox.com.
- In **Google Search Console**, add/verify paramountknox.com and submit the sitemap
  (`https://paramountknox.com/sitemap-index.xml`). Rankings consolidate over a few weeks.

## TL;DR
Keep paramountknox.com. In GoDaddy, **301-forward phrenovation.com →
https://paramountknox.com** (forward only, permanent). Save the blog posts first
(send them to me), keep the domain registered, and make sure there's only one
Google Business Profile.
