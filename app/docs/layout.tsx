import type { ReactNode } from 'react';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { source } from '@/source';
import { BookOpen, Github, Sparkles, Package } from 'lucide-react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{
        title: (
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-primary text-primary-foreground">
              <BookOpen className="h-4 w-4" />
            </div>
            <span className="font-bold">Flint UI</span>
          </div>
        ),
        url: '/',
      }}
      sidebar={{
        banner: (
          <div className="rounded-lg border bg-muted/50 p-3 text-sm">
            <div className="mb-1 font-semibold">📦 Latest Release</div>
            <div className="text-muted-foreground">
              v0.0.3 is now available on NPM
            </div>
          </div>
        ),
        footer: (
          <div className="flex flex-col gap-2 border-t pt-3 text-sm text-muted-foreground">
            <a
              href="https://github.com/flint-organization/flint-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-foreground"
            >
              <Github className="h-4 w-4" />
              <span>View on GitHub</span>
            </a>
            <a
              href="https://www.npmjs.com/package/@flint-org/ui"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-foreground"
            >
              <Package className="h-4 w-4" />
              <span>View on NPM</span>
            </a>
          </div>
        ),
      }}
      links={[
        {
          icon: <Sparkles className="h-4 w-4" />,
          text: 'Demo',
          url: 'https://flint-three.vercel.app',
          active: 'none',
        },
        {
          icon: <BookOpen className="h-4 w-4" />,
          text: 'Storybook',
          url: 'https://flint-organization.github.io/flint-ui',
          active: 'none',
        },
        {
          icon: <Github className="h-4 w-4" />,
          text: 'GitHub',
          url: 'https://github.com/flint-organization/flint-ui',
          active: 'none',
        },
      ]}
    >
      {children}
    </DocsLayout>
  );
}
