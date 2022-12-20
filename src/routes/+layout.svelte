<script lang="ts">
  import Footer from "$lib/nav/Footer.svelte";
  import NavBar from "$lib/nav/NavBar.svelte";
  import BlobBackground from "$lib/blobs/BlobBackground.svelte";

  // Load our icons onto the page
  import 'iconify-icon';
</script>

<BlobBackground />
<NavBar />
<slot />
<Footer />