# just us. ♡ — Personalized Websites for Couples

A cute, bold, high-contrast website for **just us. ♡**, designed to be straight to the point:
1. **What We Do**: We create cute personalized websites for couples.
2. **Our Product**: The 3 templates (`The Classic`, `Our Story`, `Little Moments`), each with video preview, screenshots gallery, and WhatsApp direct ordering.
3. **How We Do It**: 3 simple steps (Pick template → Send photos & song → Get private link in 24–48h).
4. **Order Directly**: Instant WhatsApp and Instagram links.

---

## 🎨 Color Palette & Cute Typography

- **Hot Pink**: `#FF2E74`
- **Soft Blush**: `#FFD3E1`
- **Pastel Pink**: `#FFF5F8`
- **Sunny Yellow**: `#FFE866`
- **Deep Wine / Outline**: `#3D0C1E`

### Fonts
- **Cute & Rounded**: *Fredoka*
- **Playful Notes**: *Caveat*
- **Clean Body**: *Plus Jakarta Sans*

---

## 🚀 How to Run Locally

```bash
# 1. Run local dev server
npm run dev

# 2. Build for production
npm run build
```

---

## 💌 How to Replace Contact Details

Open [`src/config/brandConfig.js`](file:///d:/feb/src/config/brandConfig.js):
- Update `whatsapp.phoneNumber` with your phone number (e.g. `1234567890`)
- Update `instagram.handle` with your Instagram username

---

## 🎬 How to Add Your Screen Recordings & Screenshots

Open [`src/data/templates.js`](file:///d:/feb/src/data/templates.js):
- Put your screen recording `.mp4` files into `public/videos/` and set `videoSrc: "/videos/your-recording.mp4"`
- Put your screenshots into `public/screenshots/` and update the `screenshots` array
