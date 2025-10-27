import type { ReactNode } from 'react';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { source } from '@/source';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{
        title: (
          <div className="flex items-center gap-2">
            <span className="font-bold">Flint UI</span>
          </div>
        ),
        url: '/',
      }}
      links={[
        {
          text: 'Live Demo',
          url: 'https://flint-three.vercel.app',
          active: 'none',
        },
        {
          text: 'Storybook',
          url: 'https://flint-organization.github.io/flint-ui',
          active: 'none',
        },
        {
          text: 'NPM',
          url: 'https://www.npmjs.com/package/@flint-org/ui',
          active: 'none',
        },
        {
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
