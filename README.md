# Mindo Trail Club

Bilingual static website for `mindotrailclub.com`.

## Deployment

- Hosting: Cloudflare Pages
- Production branch: `main`
- Staging branch: `codex/mindotrailclub-staging`
- Production domains: `mindotrailclub.com`, `www.mindotrailclub.com`
- Stable staging domain: `staging.mindotrailclub.com`
- Build command: none
- Output directory: repository root

Preview and staging hostnames receive `X-Robots-Tag: noindex, nofollow` from `functions/_middleware.js`. Production remains indexable.
