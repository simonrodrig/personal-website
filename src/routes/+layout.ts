import type { LayoutLoad } from "./$types";
import { dev } from '$app/environment'

// Serve the page as a static asset
export const prerender = true;

// Disable JavaScript for the base layout, keep it in the dev environment though
// for hot-module reloading (HMR)
// export const csr = dev;

type MetaTag = { name: string; content: string };

const theme = "#1c1e26";
const seo: MetaTag[] = [
  {
    name: "description",
    content:
      "Simon is a developer with an interest in frontend web development, UI/UX design, and open source.",
  },
  {
    name: "og:title",
    content: "Simon Rodriguez | Front-end Web Developer",
  },
  {
    name: "og:description",
    content:
      "Simon is a developer with an interest in frontend web development, UI/UX design, and open source.",
  },
  {
    name: "og:site_name",
    content: "rodrig.dev",
  },
  {
    name: "og:type",
    content: "website",
  },
  {
    name: "og:image",
    content: "https://www.rodrig.dev/twitter-card-image.png",
  },
  {
    name: "og:url",
    content: "https://www.rodrig.dev/",
  },
  {
    name: "twitter:card",
    content: "summary_large_image",
  },
  {
    name: "twitter:title",
    content: "Simon Rodriguez",
  },
  {
    name: "twitter:description",
    content:
      "Simon is a developer with an interest in frontend web development, UI/UX design, and open source.",
  },
  {
    name: "twitter:image",
    content: "https://www.rodrig.dev/twitter-card-image.png",
  },
  {
    name: "twitter:image:alt",
    content: "Image of Simon along with a short introduction",
  },
];

export const load: LayoutLoad = () => {
  return {
    seo,
    theme
  };
};
