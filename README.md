# Portfolio (Vite + React + Tailwind)

This is a clean, scalable portfolio template driven by **one projects data file**.

## 1) Setup
```bash
npm install
npm run dev
```

## 2) Add your info + projects
- `src/data/site.js` (name, links, headline, etc.)
- `src/data/projects.js` (your projects list)

## 3) Add your images
Put images in:
- `public/projects/` and reference them like: `"/projects/my-image.jpg"`

Example in `src/data/projects.js`:
```js
image: "/projects/botzilla.jpg"
```

## 4) Deploy to GitHub Pages
### A) Set base path
Edit `vite.config.js` and set:
```js
base: "/YOUR_REPO_NAME/"
```

Example:
```js
base: "/Portfolio-Website/"
```

### B) Deploy
```bash
npm run build
npm run deploy
```

## Notes
- Put `resume.pdf` in `/public` if you want the Resume button to work (default: `/resume.pdf`).
