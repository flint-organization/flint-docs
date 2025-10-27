'use client';

export function StorybookEmbed({ story }: { story: string }) {
  return (
    <div className="my-6 overflow-hidden rounded-lg border">
      <iframe
        src={`https://flint-organization.github.io/flint-ui/iframe.html?id=${story}`}
        style={{ width: '100%', height: '500px', border: 'none' }}
        title="Storybook Component Preview"
        loading="lazy"
      />
    </div>
  );
}
