import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

type MarkdownImport = {
  attributes: Record<string, {
    title: string,
    subtitle: string,
    banner_href?: string,
    source_href?: string,
    demo_href?: string
  }>; 

  // When "Mode.HTML" is requested
  html: string;
};

export const load: PageLoad = async ({ params }) => {
  try {
    const importedMd = await import(`../../../projects/${params.project}.md`)
    // Force the type here
    return {
      markdown: importedMd as MarkdownImport
    };
  }
  catch (e) {
    // Import fails: Couldn't find the file.
    throw error(404, 'Not found')
  }
};
