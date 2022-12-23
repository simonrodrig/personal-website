<script lang="ts">
  export let href: string;
  export let imageHref: string;
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
    background-position: center;
    
    background-color: vars.$clr-background-light;

    border: 5px solid #333645;
    border-radius: vars.$border-radius-sm;
    overflow: hidden;

    transition: filter 500ms ease-in-out;

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

      &::after {
        filter: opacity(0)
      }
    }

    &::after {
      content: '';
      position: absolute;
      inset: 0;

      background-color: vars.$clr-background-dark;
      filter: opacity(0.4);
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
    z-index: 100;
  }

  @media (max-width: vars.$size-tablet) {

    a::after {
      filter: opacity(0)
    }

    div {
      bottom: 0;
    }
  }

</style>