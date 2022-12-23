import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

// Type the import, since we don't get typing info with a dynamic import
type MarkdownImport = {
  attributes: {
    title: string;
    subtitle: string;
    banner_href?: string;
    source_href?: string;
    demo_href?: string;
  };

  // When "Mode.HTML" is requested
  html: string;
};

export const load: PageLoad = async ({ params }) => {
  try {
    // Use a vite plugin to import the markdown file
    const importedMd = await import(`../../../projects/${params.project}.md`);
    // Force the type here
    return {
      markdown: importedMd as MarkdownImport
    };
  } catch (e) {
    // Import fails: Couldn't find the file.
    throw error(404, 'Not found');
  }
};
