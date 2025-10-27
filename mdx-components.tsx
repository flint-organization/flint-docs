import type { MDXComponents } from 'mdx/types';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Tabs, TabsList, TabsTrigger, TabsContent } from 'fumadocs-ui/components/tabs';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
    ...components,
  };
}
