# Ink & Wings Casino

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/becerramisty5-dev/ink-wings-glamour-casino)

A modern, full-stack casino web application built with React and Cloudflare Workers. Features a responsive UI with Tailwind CSS and shadcn/ui components, dark/light theme support, sidebar navigation, and a scalable backend using Hono. Designed for high-performance edge computing with seamless deployment to Cloudflare.

## Features

- **Responsive Design**: Mobile-first layout with Tailwind CSS and shadcn/ui components.
- **Theme Support**: Automatic dark/light mode with persistence.
- **Modern UI**: Glassmorphism effects, animations, gradients, and interactive elements.
- **API-Ready Backend**: Hono-based routes in Cloudflare Workers for serverless APIs.
- **State Management**: Tanstack Query for data fetching and caching.
- **Error Handling**: Client-side error reporting and boundaries.
- **Development Tools**: Hot reload, TypeScript, ESLint, and Vite bundling.
- **Deployment Optimized**: Single-command deploy to Cloudflare Pages/Workers.

## Tech Stack

- **Frontend**: React 18, Vite, TypeScript, Tailwind CSS, shadcn/ui, Lucide Icons, Framer Motion, Sonner (toasts), React Router, Tanstack Query.
- **Backend**: Cloudflare Workers, Hono, TypeScript.
- **Utilities**: clsx, tailwind-merge, Zod (validation), Immer, Zustand.
- **Dev Tools**: Bun, ESLint, PostCSS, Autoprefixer.
- **UI Components**: Full shadcn/ui suite (Button, Card, Dialog, Table, Sidebar, etc.).

## Quick Start

1. **Clone the repository**:
   ```
   git clone <your-repo-url>
   cd ink-and-wings-casino-dhgqsgf_xcbmopuzu-jmu
   ```

2. **Install dependencies** (using Bun):
   ```
   bun install
   ```

3. **Run in development**:
   ```
   bun dev
   ```
   Opens at `http://localhost:3000` (or `$PORT`).

4. **Build for production**:
   ```
   bun build
   ```

## Development

- **Start dev server**: `bun dev` (frontend + worker proxy).
- **Type generation**: `bun cf-typegen` (updates Worker bindings).
- **Linting**: `bun lint`.
- **Preview production build**: `bun preview`.
- **Add API routes**: Edit `worker/userRoutes.ts` and restart dev server.
- **Frontend changes**: Modify `src/` files; Vite handles HMR.
- **Custom shadcn components**: Use `npx shadcn-ui@latest add <component>`.

### Project Structure

```
├── src/              # React frontend
│   ├── components/   # UI components (shadcn/ui + custom)
│   ├── hooks/        # Custom React hooks
│   ├── lib/          # Utilities (utils.ts, errorReporter.ts)
│   └── pages/        # Route pages (HomePage.tsx)
├── worker/           # Cloudflare Worker backend
│   ├── index.ts      # Core router (DO NOT MODIFY)
│   └── userRoutes.ts # Your API routes here
├── public/           # Static assets
└── ...               # Configs (Vite, Tailwind, Wrangler, TypeScript)
```

## Deployment

Deploy to Cloudflare with one command:

```
bun deploy
```

This builds the frontend and deploys the Worker + Assets via Wrangler.

### Manual Deployment Steps

1. **Generate types**: `bun cf-typegen`.
2. **Build assets**: `bun build`.
3. **Deploy**: `bun wrangler deploy` (uses `wrangler.jsonc`).

Configuration is in `wrangler.jsonc`. Assets are served as SPA with `/api/*` routed to Worker.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/becerramisty5-dev/ink-wings-glamour-casino)

## Scripts

| Script | Description |
|--------|-------------|
| `bun dev` | Start dev server (frontend + API proxy) |
| `bun build` | Build for production |
| `bun lint` | Run ESLint |
| `bun preview` | Preview production build |
| `bun deploy` | Build + deploy to Cloudflare |
| `bun cf-typegen` | Generate Worker types |

## Environment Variables

No env vars required for basic setup. Add bindings in `wrangler.jsonc` for KV/DO/R2.

## Contributing

1. Fork the repo.
2. Create a feature branch (`bun dev`).
3. Commit changes (`bun lint`).
4. Submit PR.

## License

MIT License. See [LICENSE](LICENSE) for details.

---

Built with ❤️ using Cloudflare Workers and modern React tooling. Questions? Open an issue!