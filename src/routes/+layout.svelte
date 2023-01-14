<script lang="ts">
  import type { LayoutData } from './$types';
  export let data: LayoutData;

  import Footer from '$lib/nav/Footer.svelte';
  import NavBar from '$lib/nav/NavBar.svelte';
  import BlobBackground from '$lib/blobs/BlobBackground.svelte';

  // Load the base stylesheet
  import '../styles/_base.scss';

  // Load our icons onto the page
  import 'iconify-icon';
</script>

<svelte:head>
  <meta name="theme-color" content={data.theme} />

  {#each data.seo as seo}
    <meta name={seo.name} content={seo.content} />
  {/each}
</svelte:head>

<BlobBackground />
<NavBar />
<slot />
<Footer />
