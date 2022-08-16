<script lang="ts">
  import {
    GithubIcon,
    InstagramIcon,
    LinkedinIcon,
  } from "svelte-feather-icons";
</script>

<div class="Footer">
  <ul>
    <li class="links">
      <ul>
        <li><a href="https://github.com/simonrodrig"><GithubIcon /></a></li>
        <li>
          <a href="https://www.instagram.com/simon_rodrig/"><InstagramIcon /></a
          >
        </li>
        <li><a href="https://www.linkedin.com/"><LinkedinIcon /></a></li>
      </ul>
    </li>
    <li class="copyright-message"><p>© 2022 Simon Rodriguez</p></li>
  </ul>
</div>

<style lang="scss">
  @use "../styles/base";

  ul {
    list-style: none;
    display: flex;
    gap: 1em;
    justify-content: center;
    align-items: center;
  }

  :global(body) {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .Footer {
    --height: 10em;
    min-height: var(--height);
    margin-top: 3em;

    background-color: base.$clr-background-light;
    border-top: 3px solid base.$clr-accent;

    /* Top-level list */
    > ul {
      flex-flow: column;
      height: var(--height);
    }

    /* Icons */
    .links > ul {
      > li :global(svg) {
        color: base.$clr-text-primary;
      }
    }

    .copyright-message > p {
      font-size: 1rem;
      color: base.$clr-text-primary;
    }
  }
</style>
