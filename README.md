# Bali Serenity Spa

Responsive luxury spa landing page based on the provided Bali Serenity Spa design reference.

## Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Lucide Icons
- Google Fonts
- Responsive CSS

## Run locally

No build step is required.

Option 1:
Open `index.html` directly in your browser.

Option 2:
Use a local server:

```bash
python3 -m http.server 8080
```

Then open:

http://localhost:8080

## Customize

Main files:

- `index.html` — page structure and content
- `styles.css` — complete responsive styling
- `script.js` — menu, booking modal, WhatsApp booking, testimonials and animations

## Replace contact details

Search these values in `index.html` and `script.js`:

- +62 361 123 4567
- +62 812 3456 7890
- hello@baliserenityspa.com
- Seminyak, Bali

The WhatsApp number used by the booking form is configured in `script.js`:

```js
const whatsappNumber = "6281234567890";
```

## Images

The demo uses remote Unsplash images. For production, replace them with your own optimized spa photos in WebP/AVIF format.

## Deployment

This is a static website and can be deployed directly to:

- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages
- Any Apache/Nginx hosting
