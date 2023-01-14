<script lang="ts">
  import { cubicOut } from 'svelte/easing';
  import { tweened } from 'svelte/motion';

  let isMobileViewOpen = false;
  let navHeight = tweened(0, {
    duration: 250,
    easing: cubicOut,
    delay: 0
  });

  $: isMobileViewOpen ? navHeight.set(215) : navHeight.set(0);

  let navRef: HTMLElement;
  const handleDocumentClick = (e: MouseEvent) => {
    if (navRef !== undefined && isMobileViewOpen && !(e.target === navRef)) {
      isMobileViewOpen = false;
    }
  };
</script>

<svelte:body on:click={handleDocumentClick} />

<button
  class="NavOpen"
  aria-label="Open Navigation"
  on:click|stopPropagation={() => (isMobileViewOpen = !isMobileViewOpen)}
  style:transform={`translateY(${-$navHeight}px)`}
>
  {#if isMobileViewOpen}
    <iconify-icon icon="fe:arrow-down" height="25" width="25" />
  {:else}
    <iconify-icon icon="ic:round-menu" height="25" width="25" />
  {/if}
</button>

<nav bind:this={navRef} style:transform={`translateY(${-$navHeight}px)`}>
  <div class="left">
    <a class="text--logo" href="/" tabindex="0">rodrig.dev</a>
  </div>

  <div class="right">
    <a href="/#home" tabindex="0">Home</a>
    <a href="/#projects" tabindex="0">Projects</a>
    <a href="/#contact" tabindex="0">Contact</a>
  </div>
</nav>

<style lang="scss">
  @use '../../styles/vars';

  .NavOpen {
    // Hidden by default
    display: none;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1.5em 4em;

    .right {
      display: flex;
      flex-flow: row;
      gap: 2em;

      a {
        color: vars.$clr-text-primary;
        font-weight: 500;
      }

    }
  }

  @media (max-width: vars.$size-phone) {
    .NavOpen {
      position: fixed;
      bottom: 0;
      right: 0;

      display: inline-block;
      height: 3rem;
      width: 3rem;
      margin: 1em;
      padding: 1em;
     
      z-index: 10;

      background-color: vars.$clr-background-light;
      border: none;
      filter: vars.$filter-shadow;
      border-radius: vars.$border-radius-sm;

      transition: outline 300ms ease-out;

      iconify-icon {
        color: vars.$clr-text-primary;        
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    .NavOpen:focus-visible {
      outline: 2px solid vars.$clr-accent;
      outline-offset: 2px;
    }

    nav {
      position: fixed;
      bottom: -215px;
      left: 0;
      width: 100%;
      z-index: 1000;

      flex-flow: column;
      background-color: vars.$clr-background-light;
      filter: vars.$filter-shadow;
      padding: 1em 0;
      gap: 0.5em;
      border-radius: vars.$border-radius-sm vars.$border-radius-sm 0 0;

      .right {
        flex-flow: column;
        align-items: center;
      }
    }
  }
</style>
