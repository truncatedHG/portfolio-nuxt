# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Page components

All routes use the shared layout in `app/layouts/default.vue`, which renders `SiteNavbar` and the page content. Shared document metadata lives in `app/app.vue`; each page sets its own title.

- `ProfileHero`: home page name, introduction, and portrait.
- `AboutBiography`: biography and career goals.
- `TechStackSection`: technology list, rendered with reusable `TechStackCard` components.
- `CertificateGallery`: certificate data and card list.
- `CertificateCard`: badge image and credential link; emits the selected certificate.
- `CertificatePreviewDialog`: full certificate preview and its open/close animations.

Components live in `app/components/` and use Nuxt auto-imports. The certificate type is shared through `app/types/certificate.ts`.
