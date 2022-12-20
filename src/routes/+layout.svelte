<script lang="ts">
  import Footer from "../components/navigation/Footer.svelte";
  import NavBar from "../components/NavBar.svelte";
  import Seo from "../components/Seo.svelte";
  import BlobBackground from "../components/Blobs/BlobBackground.svelte";

  // Load our icons onto the page
  import 'iconify-icon';
</script>

<svelte:head>
  <title>Simon Rodriguez | Front-end Software Developer</title>
  <Seo />
</svelte:head>

<BlobBackground />

<NavBar />
<slot />
<Footer />