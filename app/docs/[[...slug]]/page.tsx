import { source } from '@/source';
import { DocsPage, DocsBody } from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import { useMDXComponents } from '@/mdx-components';

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!page) notFound();

  const Body = page.data.body;
  const components = useMDXComponents({});

  return (
    <DocsPage>
      <DocsBody>
        <h1 className="text-4xl font-bold mb-4">{page.data.title}</h1>
        {page.data.description && (
          <p className="text-lg text-muted-foreground mb-8">
            {page.data.description}
          </p>
        )}
        <Body components={components} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
