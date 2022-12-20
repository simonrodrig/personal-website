<script lang="ts">
  import { GithubIcon, InstagramIcon, LinkedinIcon } from 'svelte-feather-icons';
</script>

<footer class="Footer">
  <ul>
    <li class="links">
      <nav>
        <a aria-label="GitHub" href="https://github.com/simonrodrig"><GithubIcon /></a>
        <a aria-label="LinkedIn" href="https://www.linkedin.com/in/simon-rodriguez-6b3a69193/"
          ><LinkedinIcon /></a
        >
      </nav>
    </li>
    <li class="copyright-message"><p>© 2022 Simon Rodriguez</p></li>
    <li>
      <p>
        This website was written with Svelte and SvelteKit. <a
          href="https://github.com/simonrodrig/simonrodrig.github.io">See the source code here</a
        >.
      </p>
    </li>
  </ul>
</footer>

<style lang="scss">
  @use '../../styles/vars';

  // FIXME: Why does this need to be set?
  :global(body) {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .Footer {
    --height: 10em;
    min-height: var(--height);

    background-color: vars.$clr-background-light;
    border-top: 3px solid vars.$clr-accent;
    margin-top: 3em;

    /* Top-level list */
    > ul {
      list-style: none;

      display: flex;
      flex-flow: column;
      gap: 1em;
      justify-content: center;
      align-items: center;

      height: var(--height);
    }

    /* Icons */
    .links > nav {
      display: flex;
      gap: 1em;
      justify-content: center;
      align-items: center;

      > a :global(svg) {
        color: vars.$clr-text-primary;
      }
    }

    p {
      font-size: 1rem;
      color: vars.$clr-text-primary;
      padding: 0 2em;
      text-align: center;
    }
  }

  @media (max-width: vars.$size-phone) {
    .Footer {
      padding-bottom: 4em;
    }
  }
</style>
