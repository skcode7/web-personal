# Web Personal de Carlos Encalada

Sitio web personal estático construido con HTML, CSS y JavaScript vanilla.

## Stack

- HTML5 semántico
- CSS3 con custom properties (variables CSS)
- JavaScript vanilla (ES6+)
- [Pure CSS](https://purecss.io/) — framework CSS minimalista
- [Bootstrap Icons](https://icons.getbootstrap.com/) — iconografía

## Características

- Diseño responsive
- Tema oscuro / claro con persistencia en localStorage
- Navegación sticky con scrollspy
- Menú mobile con toggle
- Scroll suave entre secciones

## Estructura

```
.
├── index.html
├── css/
│   └── style.css
├── js/
│   └── app.js
└── foto.jpg
```

## Desarrollo

No requiere build ni dependencias. Solo abre `index.html` en tu navegador, o usa un servidor local:

```bash
python3 -m http.server 8080
# o
npx serve .
```

## Despliegue

Puedes desplegar directamente en cualquier hosting estático (Netlify, Vercel, GitHub Pages, Cloudflare Pages, etc.).
