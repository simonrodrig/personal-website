<script lang="ts">
  import Footer from "../components/navigation/Footer.svelte";
  import NavBar from "../components/navigation/NavBar.svelte";
  import BlobBackground from "../components/Blobs/BlobBackground.svelte";

  // Load our icons onto the page
  import 'iconify-icon';
</script>

<BlobBackground />
<NavBar />
<slot />
<Footer />