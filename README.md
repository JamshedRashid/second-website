# Knotwork Globe Limited

A Bangladesh phone and accessory showroom with a liquid-glass storefront, manufacturer-sourced comparison lab, protected owner inventory and persistent demo checkout records.

## Run locally

Use Node 22.13+ and the pnpm version declared in package.json.

```sh
pnpm install --frozen-lockfile
node scripts/sync-storefront.mjs
pnpm dev
```

The storefront source is in `storefront/`. `public/` contains its synced assets. Run the sync script after editing storefront files. Hosted APIs are in `app/api/`, and D1 schema/migrations are in `db/` and `drizzle/`.

For a frontend-only preview without API support:

```sh
python3 -m http.server 8000 --directory storefront
```

## Features

- Responsive liquid-glass navigation, product galleries, mobile purchase bar and glass-tile add-to-bag animation.
- Budget, brand, storage, stock and wishlist filters.
- Two-phone comparison with manufacturer source links, grouped specs, difference filtering, search, size diagrams, display illustration, camera inspector and shareable URLs.
- Exact-model case/protector options and charging / foldable compatibility guidance.
- Owner-authorised inventory price, quantity and showroom-status updates in D1.
- Signed-in persistent demo checkout records with server-calculated totals. Contact fields are never stored.

## Data and launch status

Phone data was checked on 2026-10-04. See `storefront/spec-data.js` for official reference pages and the reference-market caveats. Fields that could not be verified are explicitly labelled. Apple RAM and mAh capacity are not inferred. Brightness, battery and charging claims are manufacturer figures, not independent benchmarks.

Prices, accessories, inventory labels, delivery estimates and business policy text are illustrative. The shop must confirm suppliers, actual stock, imported SKU, contact details, warranty and return terms before accepting orders. No live payment or fulfilment is enabled. The owner console is protected server-side using dispatch-managed ChatGPT identity and the `ADMIN_EMAIL` runtime secret. It is never authorised solely by browser state.

## Validate

```sh
node tests/storefront.test.cjs
pnpm exec tsc --noEmit
node scripts/sync-storefront.mjs
pnpm build
```

D1 migrations are applied by Sites on publication. Local D1 setup follows the Sites starter migration workflow.
