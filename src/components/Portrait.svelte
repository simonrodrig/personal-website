<script lang="ts">
  import Blob from "./Blob.svelte";

  export let innerLayerColor: string;
  export let outerLayerColor: string;
</script>

<div class="container">
  <div class="blob background-blob">
    <Blob color={outerLayerColor} />
  </div>

  <div class="blob foreground-blob">
    <Blob color={innerLayerColor} />
  </div>

  <span class="slot-contain">
    <slot />
  </span>
</div>

<style lang="scss">
  @use '../styles/base';
  
  .container {
    position: relative;
    
    width: 100%;
    height: 100%;
  }

  .blob,
  .slot-contain {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    filter: base.$filter-shadow
  }

  .background-blob {
    height: 100%;
    width: 100%;
  }

  .foreground-blob {
    height: 85%;
    width: 85%;
  }
  .slot-contain {
    height: 60%;
    width: 60%;
  }

  .slot-contain :global(*) {
    height: 100%;
    width: 100%;
    border-radius: 50%;
  }

</style>
