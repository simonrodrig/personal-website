<script lang="ts">
  export let icon: string;
</script>

<div class="Card" >
  <iconify-icon height="40" icon={icon} />
  <slot />
</div>

<style lang="scss">
  @use '../styles/base';

  .Card {
   padding: 2em;
   background-color: base.$clr-background-light;
   border-radius: base.$border-radius-lg;
   filter: drop-shadow(0px 0px 16px base.$clr-background-dark);

    iconify-icon {
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