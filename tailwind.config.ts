import type { Config } from 'tailwindcss';
import flintPreset from '@flint-org/ui/preset';

const config: Config = {
  presets: [flintPreset],
  content: [
    './pages/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx,mdx}',
    './app/**/*.{ts,tsx,mdx}',
    './content/**/*.{md,mdx}',
    './node_modules/@flint-org/ui/dist/**/*.js',
    './node_modules/fumadocs-ui/dist/**/*.js',
  ],
  darkMode: ['class'],
};

export default config;
