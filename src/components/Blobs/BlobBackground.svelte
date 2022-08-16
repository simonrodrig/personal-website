<script lang="ts">
  import Blob from "./Blob.svelte";
</script>

<div class="blobs">
  <div class="blob-contain blob-1">
    <Blob />
  </div>

  <div class="blob-contain blob-2">
    <Blob />
  </div>

  <div class="blob-contain blob-3">
    <Blob />
  </div>
</div>

<style lang="scss">
  @use "../../styles/base";

  .blobs {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
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
    right: -65em;
    top: -20em;
    /* width: 100em; */
    width: 80vw;
  }

  .blob-3 {
    display: none;
  }
</style>

