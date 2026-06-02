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

Publicado con **GitHub Pages** desde la rama `main` (raíz). Cada `push` a `main`
republica el sitio automáticamente.

Para usar el dominio propio `divid.club`: agregar un archivo `CNAME` con
`divid.club`, y apuntar el DNS a GitHub Pages.

## Origen de los assets

Generados por el kit de marketing de la app (Divid), reproducible con
`marketing/` en el repo principal. Si cambian los assets de marca ahí, copiar
los nuevos a `assets/`.
