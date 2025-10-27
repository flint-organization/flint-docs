# Flint UI Documentation

Official documentation site for [@flint-org/ui](https://www.npmjs.com/package/@flint-org/ui) component library.

Built with [Next.js](https://nextjs.org) and [Fumadocs](https://fumadocs.vercel.app).

## 📚 Content

- **Getting Started** - Installation and quick start guides
- **Component API** - Documentation for 50+ components
- **Usage Guides** - Best practices and patterns
- **Examples** - Real-world use cases

## 🔗 Links

- 🌐 [Live Documentation](https://docs.flint-ui.com) _(Coming Soon)_
- 🎨 [Live Demo](https://flint-three.vercel.app)
- 📖 [Storybook](https://flint-organization.github.io/flint-ui)
- 📦 [NPM Package](https://www.npmjs.com/package/@flint-org/ui)
- 🐙 [Component Source](https://github.com/flint-organization/flint-ui)

## 🚀 Development

### Prerequisites

- Node.js >= 18.0.0
- pnpm >= 9.0.0

### Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the documentation site.

### Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm typecheck    # Run TypeScript type checking (if configured)
```

## 📂 Project Structure

```
flint-docs/
├── app/                      # Next.js App Router
│   ├── page.tsx              # Landing page
│   ├── layout.tsx            # Root layout
│   └── docs/                 # Documentation routes
│       ├── layout.tsx        # Docs layout with sidebar
│       └── [[...slug]]/      # Dynamic docs pages
│           └── page.tsx
├── content/                  # Documentation content
│   └── docs/                 # MDX documentation files
│       ├── index.mdx         # Introduction
│       ├── getting-started/  # Getting started guides
│       │   ├── installation.mdx
│       │   ├── quick-start.mdx
│       │   └── meta.json
│       ├── components/       # Component documentation
│       │   ├── primitives/   # UI primitives
│       │   ├── animated/     # Animated components
│       │   └── data/         # Data components
│       └── meta.json
├── components/               # React components
│   └── storybook-embed.tsx   # Storybook iframe embed
├── lib/                      # Utilities
├── public/                   # Static assets
├── source.ts                 # Fumadocs configuration
├── next.config.ts            # Next.js configuration
└── tailwind.config.ts        # Tailwind CSS configuration
```

## 🛠️ Built With

- **[Next.js 15](https://nextjs.org)** - React framework
- **[Fumadocs](https://fumadocs.vercel.app)** - Documentation framework
- **[@flint-org/ui](https://www.npmjs.com/package/@flint-org/ui)** - Component library
- **[Tailwind CSS](https://tailwindcss.com)** - Styling
- **[MDX](https://mdxjs.com)** - Markdown with JSX
- **[TypeScript](https://www.typescriptlang.org)** - Type safety

## 📝 Writing Documentation

### Adding New Pages

1. Create a new `.mdx` file in `content/docs/`
2. Add frontmatter with title, description, and icon
3. Write your content in MDX format
4. Update `meta.json` in the directory to include your page

Example:

```mdx
---
title: My Component
description: Description of my component
icon: Component
---

# My Component

Content goes here...
```

### Frontmatter Options

- `title` (required) - Page title
- `description` (required) - Page description for SEO
- `icon` (optional) - Lucide icon name for sidebar
- `full` (optional) - Full-width page layout

### Using Components

You can use React components in MDX:

```mdx
import { StorybookEmbed } from '@/components/storybook-embed';

<StorybookEmbed story="components-button--primary" />
```

## 🚢 Deployment

### Vercel (Recommended)

The documentation site is configured for automatic deployment with Vercel:

1. **Connect Repository**
   - Go to [Vercel Dashboard](https://vercel.com/new)
   - Import the `flint-docs` repository
   - Vercel auto-detects Next.js settings

2. **Configure Build** (auto-detected)
   - Framework Preset: `Next.js`
   - Build Command: `pnpm build`
   - Output Directory: `.next`
   - Install Command: `pnpm install`

3. **Deploy**
   - Push to `main` → Production deployment
   - Open PR → Preview deployment

### Custom Domain

After deployment, configure your custom domain in Vercel:

1. Go to project settings
2. Add domain: `docs.flint-ui.com`
3. Configure DNS records as instructed
4. Wait for SSL certificate

## 🤝 Contributing

We welcome contributions to improve the documentation!

### How to Contribute

1. Fork the repository
2. Create your feature branch (`git checkout -b docs/improve-button-docs`)
3. Edit MDX files in `content/docs/`
4. Test locally with `pnpm dev`
5. Commit your changes (`git commit -m 'docs: improve button documentation'`)
6. Push to the branch (`git push origin docs/improve-button-docs`)
7. Open a Pull Request

### Guidelines

- Use clear, concise language
- Include code examples for every concept
- Add links to related components/guides
- Test all code examples
- Follow existing documentation structure
- Update meta.json when adding new pages

## 📄 License

MIT

---

## 🔗 Related Repositories

- [flint-ui](https://github.com/flint-organization/flint-ui) - Component library source
- [flint-demo](https://github.com/flint-organization/flint-demo) - Demo application

---

**Built with ❤️ using [@flint-org/ui](https://www.npmjs.com/package/@flint-org/ui)**
