import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { RootProvider } from 'fumadocs-ui/provider/next';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'Flint UI Documentation',
    template: '%s | Flint UI',
  },
  description:
    'Enterprise-grade React component library with beautiful animations, built on Radix UI and Tailwind CSS.',
  keywords: [
    'React',
    'Components',
    'UI Library',
    'Tailwind CSS',
    'Radix UI',
    'Framer Motion',
    'TypeScript',
    'Design System',
  ],
  authors: [
    {
      name: 'Flint UI Team',
      url: 'https://github.com/flint-organization/flint-ui',
    },
  ],
  creator: 'Flint UI Team',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://docs.flint-ui.com',
    title: 'Flint UI Documentation',
    description:
      'Enterprise-grade React component library with beautiful animations',
    siteName: 'Flint UI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flint UI Documentation',
    description:
      'Enterprise-grade React component library with beautiful animations',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <RootProvider>
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
