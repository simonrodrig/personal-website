<script lang="ts">
  export let icon: string;
</script>

<div class="Card">
  <iconify-icon height="40" {icon} />
  <slot />
</div>

<style lang="scss">
  @use '../styles/vars';

  .Card {
    padding: 2em;
    background-color: vars.$clr-background-light;
    border-radius: vars.$border-radius-lg;
    filter: drop-shadow(0px 0px 16px vars.$clr-background-dark);

    iconify-icon {
      color: vars.$clr-text-primary;
    }
  }

  @media (max-width: vars.$size-tablet) {
    .Card {
      border-radius: vars.$border-radius-sm;
    }
  }
</style>
