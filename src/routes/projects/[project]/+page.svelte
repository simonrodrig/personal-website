<script lang="ts">
  import ContactCard from '$lib/ContactCard.svelte';

  import type { PageData } from './$types';
  export let data: PageData;
  const { attributes, html } = data.markdown;
  const { title, subtitle, banner_href, demo_href, source_href } = attributes;
</script>

<div class="content">
  
  {#if banner_href}
    <div class="img-contain">
      <img src={banner_href} alt="A screenshot demo of {attributes.title}" />
    </div>
  {/if}
  
  <main>
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
</div>

<style lang="scss">
  @use '../../../styles/vars';

  .content {
    padding: 2em;
  }

  .img-contain {
    position: relative;
    max-width: 70em;
    margin: 1em auto 0 auto;
    /* padding: 0 2em; */

    img {
      aspect-ratio: 1.75;
      object-fit: cover;
      border-radius: vars.$border-radius-lg;
      width: 100%;
      box-shadow: vars.$box-shadow;
    }
  }

  main {
    margin: 0.5em auto;
    max-width: 70em;
    background-color: vars.$clr-background-light;
    padding: 3em;
    border-radius: vars.$border-radius-lg;
    box-shadow: vars.$box-shadow;

    .title-line {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h1 {
        font-size: clamp(1.5rem, 1rem + 10vw, 4rem);
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
    .content {
      padding: 0;
    }

    .img-contain {
      margin: 0.5em 2em;

      img {
        aspect-ratio: unset;
      }
    }

    main {
      margin: 0em 2em;
    }

    .contact {
      padding: 0 2em;
    }
  }

  @media (max-width: vars.$size-phone) {
    .img-contain {
      margin: 0;

      img {
        border-radius: 0;
      }
    }

    main {
      padding: 1.5em;
      margin: 0;
      border-radius: 0;

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
