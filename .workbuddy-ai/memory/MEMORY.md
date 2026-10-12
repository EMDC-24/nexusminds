# Project Memory — nexus-updated-ui-site

## Products
- **Truebook AI**: AI that cross-references US vehicle window stickers (Monroney labels) with VIN + VIN decode data and updates valuations from J.D. Power / Kelley Blue Book (KBB) / NADA. SaaS for car dealerships. Page: `/projects/truebook-ai`.

## Contact forms
- Homepage Hero + `/contact` post to `/api/contact` (Resend). Destination: `info@nexusmindstech.com` via `CONTACT_TO_EMAIL`. Sending requires a real `RESEND_API_KEY` + a verified `RESEND_FROM_EMAIL` in `.env.local`.

## Path alias
- `@/*` -> project root. Root-level `lib/` and `components/` are NOT under `app/`.
