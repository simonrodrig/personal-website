<script lang="ts">
  import type { SvelteComponentTyped } from 'svelte';
  type FeatherIconProps = {size?: string, strokeWidth?: number, class?: string}
  type FeatherIcon = SvelteComponentTyped<FeatherIconProps>
  
  export let icon: FeatherIcon;
  export let props: FeatherIconProps = {};
</script>

<div class="Card" tabindex="0">
  <svelte:component this={icon} {...props} />
  <slot />
</div>

<style lang="scss">
  @use '../styles/base';

  .Card {
   padding: 2em;
   background-color: base.$clr-background-light;
   border-radius: base.$border-radius-lg;

    :global(svg) {
       color: base.$clr-text-primary;
    }
  }
  
  .Card:focus-visible {
    outline: 4px solid base.$clr-accent;
  }

  @media (max-width: base.$size-tablet) {
    .Card {
      padding: 1em;
      border-radius: base.$border-radius-sm;
    }
  }
</style>