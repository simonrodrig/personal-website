<script lang=ts>
  import Portrait from "../components/Portrait.svelte";
  import headshot from "../assets/headshot.jpeg";
</script>

<div class="Portrait-Container">
  <Portrait innerLayerColor="#E95678" outerLayerColor="#232530">
    <img src={headshot} alt="" />
  </Portrait>
</div>

<style lang="scss">
  @use "../styles/base";

  :root {
    background-color: base.$clr-background-dark;
  }

  .Portrait-Container {
    height: 20em;
    width: 20em;
  }
</style>
