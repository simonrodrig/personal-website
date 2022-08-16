<script lang="ts">
  import { ArrowDownIcon, MenuIcon } from "svelte-feather-icons";
  import { cubicOut } from "svelte/easing";
  import { tweened } from "svelte/motion";
  import { slide } from "svelte/transition";

  let windowWidth = 0;
  let isMobileView = false;
  let isMobileViewOpen = false;
  let navButtonHeight = tweened(0, {
    easing: cubicOut,
    duration: 300,
  });

  $: isMobileView = windowWidth <= 800;
  $: {
    if (isMobileViewOpen) 
      navButtonHeight.set(-215);
    else 
      navButtonHeight.set(0);
  }
 
  function handleNavOpenClick() {
    isMobileViewOpen = !isMobileViewOpen;

  }
</script>

<svelte:window bind:innerWidth={windowWidth} />

<div
  class="NavOpen"
  on:click={() => handleNavOpenClick()}
  style={`transform: translateY(${$navButtonHeight}px);`}
>
  {#if isMobileViewOpen}
    <ArrowDownIcon size="25" />
  {:else}
    <MenuIcon size="25" />
  {/if}
</div>

{#if !isMobileView || (isMobileView && isMobileViewOpen)}
  <div class="NavBar" transition:slide={{ duration: 300 }}>
    <div class="left">
      <a class="text--logo" href="/">rodrig.dev</a>
    </div>

    <div class="center" />

    <div class="right">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </div>
{/if}

<style lang="scss">
  @use "../../styles/base";

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
          color: base.$clr-text-primary;
          font-weight: 500;
        }
      }
    }
  }

  @media (max-width: base.$size-phone) {
    .NavOpen {
      position: fixed;
      bottom: 0;
      right: 0;
      margin: 1em;

      aspect-ratio: 1;
      height: 3em;
      /* margin: 1em; */

      display: grid;
      place-items: center;

      background-color: base.$clr-background-light;
      filter: base.$filter-shadow;
      border-radius: base.$border-radius-sm;
      cursor: pointer;

      :global(svg) {
        color: base.$clr-text-primary;
      }
    }
    .NavBar {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;

      flex-flow: column;
      background-color: base.$clr-background-light;
      filter: base.$filter-shadow;
      padding: 1em 0;
      gap: 0.5em;
      border-radius: base.$border-radius-sm base.$border-radius-sm 0 0;

      .right > ul {
        flex-flow: column;
      }
    }
  }
</style>
