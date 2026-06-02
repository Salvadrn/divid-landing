# divid-landing

Landing page de **Divid** — *divide la cuenta sin broncas*.

Sitio estático de una sola página (`index.html` + `assets/`), sin build ni
dependencias. Estética de **ticket / recibo de papel**, espejo de la app
(paleta de `Theme.swift`: papel crema, tinta, sello rojo, código de barras).

## Estructura

```
index.html        # toda la página (HTML + CSS inline, sin JS)
assets/           # imágenes
  icon-180/512.png  ícono de la app (recibo + sello ÷)
  demo.gif/.mp4     demo animado del hero
  screen2/3/4.png   capturas de la app
  appstore-*.png    composiciones para redes / og:image
```

Sin JavaScript a propósito: el CSP es estricto (`script-src 'none'`). El código
de barras del hero es CSS puro.

## Ver en local

```bash
python3 -m http.server 8000   # luego abre http://localhost:8000
```

(o simplemente abre `index.html` en el navegador)

## Deploy

Publicado en **Cloudflare Pages** → `https://divid-landing.pages.dev`
(host principal). Si el proyecto está conectado al repo por Git, cada `push` a
`main` redeploya solo.

También vive en **GitHub Pages** (`https://salvadrn.github.io/divid-landing/`)
como respaldo.

Dominio propio **`divid.site`**: en el dashboard, proyecto de Pages →
**Custom domains** → agregar `divid.site`. Como el DNS está en Cloudflare, el
registro se crea automáticamente.

## Origen de los assets

Generados por el kit de marketing de la app (Divid), reproducible con
`marketing/` en el repo principal. Si cambian los assets de marca ahí, copiar
los nuevos a `assets/`.
