<script lang="ts">
  import {
    GithubIcon,
    InstagramIcon,
    LinkedinIcon,
  } from "svelte-feather-icons";
</script>

<footer class="Footer">
  <ul>
    <li class="links">
      <nav>
        <a href="https://github.com/simonrodrig"><GithubIcon /></a>
        <a href="https://www.instagram.com/simon_rodrig/"><InstagramIcon /></a>
        <a href="https://www.linkedin.com/"><LinkedinIcon /></a>
      </nav>
    </li>
    <li class="copyright-message"><p>© 2022 Simon Rodriguez</p></li>
  </ul>
</footer>

<style lang="scss">
  @use "../styles/base";

  // FIXME: Why does this need to be set?
  :global(body) {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .Footer {
    --height: 10em;
    min-height: var(--height);
    
    background-color: base.$clr-background-light;
    border-top: 3px solid base.$clr-accent;
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
        color: base.$clr-text-primary;
      }
    }

    .copyright-message > p {
      font-size: 1rem;
      color: base.$clr-text-primary;
    }
  }
</style>
