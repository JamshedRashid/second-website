# Knotwork Globe Limited

A Bangladesh mobile-store demo with a liquid-glass storefront, animated category sections, phone Colour Studio, catalogue filters, configurable bag, and demo checkout.

## Run locally

No build step or package installation is needed. With Python 3 installed, run from the repository root:

```sh
python3 -m http.server 8000 --directory dist
```

Open http://localhost:8000 in your browser. You can also serve `dist` with VS Code Live Server or any static web server.

## Files

- `dist/index.html`: page shell and navigation.
- `dist/storefront.js` and `dist/storefront.css`: animated storefront entrance.
- `dist/app.js`: routing, existing Colour Studio, catalogue, bag, and checkout.
- `dist/catalog.js`: existing illustrative product data and configurations.
- `dist/style.css`: original catalogue and studio styles.
- `dist/assets/`: local product images and source metadata.
- `notes/storefront-reference.md`: reference-video observations and design decisions.

## Flow

Home → Phones → select a model → Colour Studio → choose colour/storage → add to bag.
Sound, Charging, and Cases open their matching catalogue categories. Desktop editorial panels change on scroll; mobile and reduced-motion users see each section sequentially.

## Live preview

https://aura-mobile-bd.faaah676767.chatgpt.site/

The preview keeps its existing private access. This repository is a source snapshot; GitHub pushes do not automatically deploy to the ChatGPT-hosted site.

Prices and product data are illustrative. Checkout sends no order and takes no payment.

## Validation

JavaScript syntax and route/configuration smoke checks passed, including phone selection, colour/storage pricing, accessory categories, mixed bag, and checkout. Live visual verification was blocked by the preview's private sign-in screen.
