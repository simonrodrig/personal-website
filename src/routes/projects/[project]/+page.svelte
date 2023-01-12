<script lang="ts">
  import ContactCard from '$lib/ContactCard.svelte';

  import type { PageData } from './$types';
  export let data: PageData;
  const { attributes, html } = data.markdown;
  const { title, subtitle, banner_href, demo_href, source_href } = attributes;

  const scrollMax = banner_href ? 250 : 0;
  let scrollAmt = scrollMax;

  const handleScroll = () => {
    // Update the scrolling amount of the card
    scrollAmt = Math.min(scrollMax, scrollMax - window.scrollY);
  };
</script>

<svelte:window on:scroll={handleScroll} />

{#if banner_href}
  <div class="img-contain">
    <img src={banner_href} alt="A screenshot demo of {attributes.title}" />
  </div>
{/if}

<main style:--scrolledY="translateY(-{scrollAmt}px)">
  <div class="title-line">
    <h1>{title}</h1>
    <div class="links">
      {#if demo_href}
        <a href={demo_href}>
          See a live demo
          <iconify-icon icon="fe:arrow-right" width="20" height="20" />
        </a>
      {/if}
      {#if source_href}
        <a href={source_href}>
          View the source code
          <iconify-icon icon="fe:arrow-right" width="20" height="20" />
        </a>
      {/if}
    </div>
  </div>
  <p class="heading--subtitle">{subtitle}</p>

  <!-- Inject the markdown we imported -->
  {@html html}
</main>

<section class="contact">
  <ContactCard />
</section>

<style lang="scss">
  @use '../../../styles/vars';

  .img-contain {
    position: relative;
    max-width: 100em;
    margin: 1em auto;
    padding: 0 2em;

    img {
      aspect-ratio: 2.216;
      object-fit: cover;
      border-radius: vars.$border-radius-lg;
      width: 100%;
      box-shadow: vars.$box-shadow;
    }
  }

  main {
    margin: 1em auto;
    max-width: 70em;
    background-color: vars.$clr-background-light;
    padding: 3em;
    border-radius: vars.$border-radius-lg;
    transform: var(--scrolledY);
    box-shadow: vars.$box-shadow;

    .title-line {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h1 {
        font-size: 4rem;
        line-height: 1.2;
      }

      a {
        margin: 0 1em;
        display: inline-flex;
        gap: 0.2em;
        justify-content: center;
        align-items: center;
        min-width: 10em;
      }
    }

    :global(h2) {
      margin: 1em 0 0.3em 0;
    }

    :global(p) {
      margin-bottom: 1em;
    }
  }

  .contact {
    margin: 2em auto;
    max-width: 70em;
  }

  @media (max-width: vars.$size-tablet) {
    .img-contain {
      img {
        aspect-ratio: unset;
      }
    }

    main {
      transform: unset;
      border-radius: 0;
    }

    .contact {
      padding: 0 1em;
    }
  }

  @media (max-width: vars.$size-phone) {
    .img-contain {
      padding: 0 1em;
    }

    main {
      padding: 1.5em;

      .title-line {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        a {
          margin: 1em 1em 0 0;
        }
      }
    }
  }
</style>
