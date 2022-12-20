<script lang="ts">
  import Footer from "$lib/navigation/Footer.svelte";
  import NavBar from "$lib/navigation/NavBar.svelte";
  import BlobBackground from "$lib/blobs/BlobBackground.svelte";

  // Load our icons onto the page
  import 'iconify-icon';
</script>

<BlobBackground />
<NavBar />
<slot />
<Footer />