<script lang="ts">
  const size = '32';
</script>

<footer>
  <nav>
    <a aria-label="GitHub" href="https://github.com/simonrodrig">
      <iconify-icon icon="ri:github-fill" height={size} width={size} />
    </a>
    <a aria-label="LinkedIn" href="https://www.linkedin.com/in/simon-rodriguez-6b3a69193/">
      <iconify-icon icon="ri:linkedin-fill" height={size} width={size} />
    </a>
  </nav>
  <p>© 2022 Simon Rodriguez</p>
  <p>
    This website was written with Svelte and SvelteKit. <a
      href="https://github.com/simonrodrig/simonrodrig.github.io">See the source code here</a
    >.
  </p>
</footer>

<style lang="scss">
  @use '../../styles/vars';

  footer {
    background-color: vars.$clr-background-light;
    border-top: 3px solid vars.$clr-accent;
    padding: 1.5em 0;
    margin-top: 3em;

    // All text children have larger line height
    > * {
      line-height: 2;
      text-align: center;
    }

    /* Icons */
    nav {
      a {
        margin: 0 0.2em;

        iconify-icon {
          color: vars.$clr-text-primary;
        }
      }
    }

    p {
      color: vars.$clr-text-primary;
      font-size: 1rem;
    }
  }

  @media (max-width: vars.$size-phone) {
    footer {
      // Add space for the nav button that appears at small screen sizes
      padding-bottom: 4em;
    }
  }
</style>
