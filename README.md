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

## Tailwind CSS and DaisyUI

Tailwind CSS is compiled through the Vite plugin in `nuxt.config.ts`. DaisyUI is registered in `app/assets/styles.css`, alongside the custom `portfolio` theme that preserves the purple and lavender palette. Bulma has been replaced.

Tailwind utilities handle typography, spacing, image sizes, and responsive layouts. DaisyUI provides the navbar/menu, buttons, hero/avatar, cards, links, and certificate modal. Existing Anime.js hooks and certificate interactions are retained.

## Portfolio presentation

The interface follows Tailwind utility-first styling and DaisyUI component patterns. A shared responsive header and SectionHeading keep the four routes consistent. Purple (#8e43a1) and lavender (#e3d0e4) remain the core colors, with deeper purple body text for readability. Layouts include a portrait-led hero, biography paragraphs, certificate cards, and a responsive technology grid. Animations respect reduced-motion preferences.

References: [Tailwind utility classes](https://tailwindcss.com/docs/styling-with-utility-classes) and [DaisyUI gallery](https://daisyui.com/components/).
