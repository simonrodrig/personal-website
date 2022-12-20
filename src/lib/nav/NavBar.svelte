<script lang="ts">
  import { ArrowDownIcon, MenuIcon } from 'svelte-feather-icons';
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
    <ArrowDownIcon size="25" />
  {:else}
    <MenuIcon size="25" />
  {/if}
</button>

<nav bind:this={navRef} class="NavBar" style:transform={`translateY(${-$navHeight}px)`}>
  <div class="left">
    <a class="text--logo" href="/" tabindex="0">rodrig.dev</a>
  </div>

  <div class="right">
    <ul>
      <li><a href="#home" tabindex="0">Home</a></li>
      <li><a href="#about" tabindex="0">About</a></li>
      <li><a href="#contact" tabindex="0">Contact</a></li>
    </ul>
  </div>
</nav>

<style lang="scss">
  @use '../../styles/vars';

  a:focus {
    outline: 2px solid vars.$clr-accent;
  }

  .NavOpen {
    display: none;
  }

  .NavBar {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1.5em 4em;

    ul {
      display: flex;
      flex-flow: row;
      gap: 2em;

      li {
        list-style: none;
        > a {
          color: vars.$clr-text-primary;
          font-weight: 500;
        }
      }
    }
  }

  @media (max-width: vars.$size-phone) {
    .NavOpen {
      position: fixed;
      display: inline-block;
      bottom: 0;
      right: 0;
      margin: 1em;
      border: none;
      box-sizing: border-box;
      z-index: 10;

      padding: 1em;

      height: 3rem;
      width: 3rem;

      background-color: vars.$clr-background-light;
      filter: vars.$filter-shadow;
      border-radius: vars.$border-radius-sm;

      :global(svg) {
        color: vars.$clr-text-primary;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      transition: outline 300ms ease-out;
    }

    .NavOpen:focus-visible {
      outline: 2px solid vars.$clr-accent;
    }

    .NavBar {
      position: fixed;
      bottom: -215px;
      left: 0;
      width: 100%;
      z-index: 10;

      flex-flow: column;
      background-color: vars.$clr-background-light;
      filter: vars.$filter-shadow;
      padding: 1em 0;
      gap: 0.5em;
      border-radius: vars.$border-radius-sm vars.$border-radius-sm 0 0;
      .right > ul {
        flex-flow: column;
        align-items: center;
      }
    }
  }
</style>
