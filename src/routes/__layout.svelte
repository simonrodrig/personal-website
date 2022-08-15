<script lang="ts">
  import Footer from "../components/Footer.svelte";
  import NavBar from "../components/NavBar.svelte";
  import Seo from "../components/Seo.svelte";
  import Blob from "../components/Blob.svelte";
  import BlobBackground from "../components/BlobBackground.svelte";
</script>

<svelte:head>
  <title>Simon Rodriguez</title>
  <Seo />
</svelte:head>

<!-- <BlobBackground /> -->

<NavBar />
<slot />
<Footer />

<style lang="scss">
</style>
