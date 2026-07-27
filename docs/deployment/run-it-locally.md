# Run the site on your own computer (Windows)

Goal: see the site in your browser, click through every page, and get updates as
we make changes. Two one-time installs, then it's basically double-click.

## Step 1 — Install Node.js (once)
1. Go to **https://nodejs.org**
2. Download the **LTS** Windows installer (the big green button) and run it.
3. Click **Next** through all the defaults, then **Finish**.

## Step 2 — Install GitHub Desktop (once) and get the code
GitHub Desktop is a simple app that downloads the project and grabs updates with a
button — no command line, and it signs you in for the private repo.

1. Go to **https://desktop.github.com** → download → install → open it.
2. **Sign in** with your GitHub account when it asks.
3. **File → Clone repository** → pick **jparamountservices-boop/paramount-website** → **Clone**.
4. At the top, the **Current Branch** dropdown → choose
   **claude/paramount-knox-seo-strategy-ntot8s**.

Now the whole project is in a folder on your PC (GitHub Desktop shows the path —
usually `Documents\GitHub\paramount-website`).

## Step 3 — Start the site (double-click)
1. Open that project folder (in GitHub Desktop: **Repository → Show in Explorer**).
2. Double-click **`start-windows.bat`**.
   - The first time it installs everything (a couple minutes) — that's normal.
   - When you see **`Local  http://localhost:4321/`**, it's running.
3. Open your web browser and go to **http://localhost:4321**
4. Click around — every service page, city page, blog post, etc.

To **stop** it: close the black window. To **start** it again later: double-click
`start-windows.bat` again.

## Step 4 — Get our latest changes
Whenever I push an update:
1. In **GitHub Desktop**, click **Fetch origin**, then **Pull**.
2. If the site is running, it refreshes on its own. If not, double-click
   `start-windows.bat` again.

That's it — you navigate locally, tell me what to change, I push, you Pull. 🚀

---

### Prefer no installs at all, just a quick look?
On **github.com**, open the repo → switch the branch to
`claude/paramount-knox-seo-strategy-ntot8s` → green **Code** button → **Download ZIP**
→ unzip it. You still need Node.js (Step 1) to run `start-windows.bat`, but you can
skip GitHub Desktop for a one-time peek. (Downside: no easy updates — you'd
re-download each time.)
