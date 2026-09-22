# Deployment and launch

## Branches

- `main`: production
- `codex/mindotrailclub-staging`: stable staging and preview work

## Cloudflare Pages

- Project: `mindotrailclub-site`
- Framework preset: none
- Build command: none
- Build output directory: `/`
- Production domains: `mindotrailclub.com`, `www.mindotrailclub.com`
- Staging domain: `staging.mindotrailclub.com`

## DNS migration

The initial launch moves authoritative DNS to Cloudflare while leaving domain registration at GoDaddy. A registrar transfer to Cloudflare Registrar is optional and should be handled separately after DNS and the site are stable.

## Release gate

Verify English and Spanish on the staging domain, confirm the staging `X-Robots-Tag`, then promote the reviewed commit to `main`. After DNS activation, verify HTTPS, canonical URLs, sitemap, robots, language switching and both production hostnames.
