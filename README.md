# Portfolio Site

A simple multi-page portfolio for engineering students:

- `index.html`: introduction page
- `projects.html`: project list with skill bubbles
- `contact.html`: contact email + form forwarding (Formspree)

## Quick customization

1. Replace `Your Name` text in all pages.
2. Replace `your.email@example.com` in `contact.html`.
3. Update project titles/descriptions/skills in `projects.html`.
4. In `contact.html`, change:

```html
action="https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID"
```

to your real Formspree endpoint.

## Connect contact form to your email

1. Create a free form at [Formspree](https://formspree.io/).
2. Copy your form endpoint (looks like `https://formspree.io/f/xxxxabcd`).
3. Paste it into `contact.html` as the form `action`.
4. Submit a test message and confirm your email.

## Deploy on GitHub Pages

1. Create a GitHub repo (for example `portfolio-site`).
2. Push this folder's contents to the repo root.
3. In GitHub: `Settings` -> `Pages`.
4. Under `Build and deployment`, choose:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main` and folder `/ (root)`
5. Save. Your site will be live at:
   - `https://<your-username>.github.io/<repo-name>/`

## Local preview

Open `index.html` directly in a browser, or run a local static server if you prefer.
