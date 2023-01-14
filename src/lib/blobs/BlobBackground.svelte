<script lang="ts">
  import Blob from './Blob.svelte';
</script>

<div class="blobs">
  <div class="blob-contain blob-1">
    <Blob />
  </div>

  <div class="blob-contain blob-2">
    <Blob />
  </div>

  <!-- <div class="blob-contain blob-3">
    <Blob />
  </div> -->
</div>

<style lang="scss">


  .blobs {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    // FIXME: How to make this the height of the body instead?
    /* height: 250vh; */
    height: 100%;
    overflow: hidden;
    pointer-events: none;
  }

  .blob-contain {
    position: absolute;
    z-index: -1;
  }
  .blob-1 {
    top: -25em;
    left: -30em;
    width: 55em;
  }

  .blob-2 {
    right: -35em;
    top: -20em;
    width: clamp(70vw, 10vw + 1rem, 80vw);
  }

  .blob-3 {
    left: -5em;
    top: 50em;
    width: clamp(80vw, 20vw + 1rem, 90vw);
  }
</style>
