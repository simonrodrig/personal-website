<script lang="ts">
  export let href: string;
  export let imageHref: string;

  let descIsShown = false;

  function handleMouseIn() {

  }
</script>

<a {href} style:--img-url="url({imageHref})">
  <div>
    <slot />
  </div>
</a>

<style lang="scss">
  @use '../styles/vars';

  a {
    display: block;
    position: relative;
    aspect-ratio: 16 / 9;

    background-image: var(--img-url);
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    
    // TODO: Play around with blend modes
    background-color: vars.$clr-background-light;
    // background-blend-mode: multiply;

    border: 5px solid #333645;
    border-radius: vars.$border-radius-sm;
    overflow: hidden;

    &:hover {
      filter: vars.$filter-shadow brightness(1.1);
    }

    &:is(:focus, :focus-visible) {
      border: 5px solid vars.$clr-accent;
    }

    &:is(:hover, :focus, :focus-visible) {
      outline: none;
      div {
        bottom: 0;
      }
    }
  }

  div {
    position: absolute;
    left: 0;
    bottom: -100%;
    width: 100%;
    // height: 40%;
    background-color: vars.$clr-background-dark;
    transition: bottom 150ms ease-out;
    padding: 1em;
  }

  @media (max-width: vars.$size-tablet) {
    div {
      bottom: 0;
    }
  }

</style>