<script lang="ts">
  export let iconName: string;
  export let href: string;
</script>

<a {href} class="IconCardLink">
  <div class="icon-box">
    <iconify-icon icon={iconName} height="50" width="50" />
  </div>
  <div class="text-body">
    <span class="name"><slot name="link-name" /></span>
    <span class="description"><slot name="link-desc" /></span>
  </div>
</a>

<style lang="scss">
  @use '../styles/vars';

  .IconCardLink {
    background-color: vars.$clr-background-dark;
    border: 1px solid #16181f;
    border-radius: vars.$border-radius-sm;
    margin-right: 0.5em;
    margin-bottom: 0.5em;


    display: flex;

    transition: box-shadow 150ms ease-out;
    &:is(:hover, :active) {
      box-shadow: vars.$box-shadow;
    }

    .icon-box {
      aspect-ratio: 1;
      min-width: 80px;
      padding: 1em;
      background-color: vars.$clr-background-light;
      border-top-left-radius: vars.$border-radius-sm;
      border-bottom-left-radius: vars.$border-radius-sm;

      display: grid;
      place-items: center;

      iconify-icon {
        color: vars.$clr-text-primary;
      }
    }

    .text-body {
      padding: 1em;
      --line-height: 1.5;

      .name > :global(*) {
        font-family: vars.$font-primary;
        font-weight: 600;
        color: vars.$clr-text-primary;
        font-size: 1.2rem;
        line-height: var(--line-height);
      }

      .description > :global(*) {
        margin: 0;
        font-weight: 400;
        font-size: clamp(0.75rem, 80%, 1rem);
        line-height: var(--line-height);
      }
    }
  }
</style>
