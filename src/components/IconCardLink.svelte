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
  @use '../styles/base';

  .IconCardLink {
    background-color: base.$clr-background-dark;
    border: 1px solid #16181F;
    border-radius: base.$border-radius-sm;
    /* filter: base.$filter-shadow; */
    margin-right: 0.5em;

    width: 350px;


    display: inline-flex;
    
    .icon-box {
      aspect-ratio: 1;
      min-width: 80px;
      padding: 1em;
      background-color: base.$clr-background-light;
      border-top-left-radius: base.$border-radius-sm;
      border-bottom-left-radius: base.$border-radius-sm;

      display: grid;
      place-items: center;

      iconify-icon {
        color: base.$clr-text-primary;
      }
    }

    .text-body {
      padding: 1em;
      --line-height: 1.5;

      .name > :global(*) {
        font-family: base.$font-primary;
        font-weight: 600;
        color: base.$clr-text-primary;
        font-size: 1.2rem;
        line-height: var(--line-height);
      }

      .description > :global(*) {
        margin: 0;
        font-weight: 400;
        font-size: 1rem;
        line-height: var(--line-height);
      }
    }
  }
</style>
