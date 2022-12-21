declare module '*.md' {
  // "unknown" would be more detailed depends on how you structure frontmatter
  const attributes: Record<string, {
    title: string,
    subtitle: string,
    banner_href?: string,
    source_href?: string,
    demo_href?: string
  }>; 

  // When "Mode.HTML" is requested
  const html: string;

  // Modify below per your usage
  export { attributes, html };
}