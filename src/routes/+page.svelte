<script lang="ts">
  import Portrait from "../components/Blobs/BlobPortrait.svelte";
  import IconCardLink from "../components/IconCardLink.svelte";
  import Card from "../components/Card.svelte";
  import Image from "svimg";
</script>

<section id="home" class="hero">
  <div class="left">
    <div class="Portrait-Container">
      <Portrait innerLayerColor="#E95678" outerLayerColor="#232530">
        <Image src="headshot.jpeg" alt="Headshot portrait of Simon" immediate />
      </Portrait>
    </div>
  </div>

  <div class="right">
    <h1>Simon<br />Rodriguez</h1>
    <p class="heading--secondary">
      Developer with an interest in frontend web development, UI/UX design, and
      open source.
    </p>
    <a class="cta" href="#say-hello">
      <p class="text--link">Say Hello</p>
      <iconify-icon icon="fe:arrow-right" width="24" />
    </a>
  </div>
</section>

<section class="quick-facts">
  <Card icon="fe:globe">
    <h2 id="about">About Me</h2>
    <p>
      Hey there! I'm a recent college graduate with a passion for tech. When I'm
      not working, you can find me cooking, spending time with my cats, or
      playing video games!
    </p>
  </Card>

  <Card icon="fe:calendar">
    <h2>What I'm up to</h2>
    <p>
      Currently I'm looking for work! I'm available to work <b
        >remote in the US</b
      >, or somewhere in the <b>Massachusetts area</b>.
    </p>
  </Card>

  <Card icon="fe:link">
    <h2 id="contact">Contact</h2>
    <p>
      If you're interested in working with me, please reach me through <em
        >simon[at]rodrig[dot]dev.</em
      >
    </p>
  </Card>

  <Card icon="fe:sunny-o">
    <h2 id="say-hello">Say Hello!</h2>

    <h3>Email</h3>
    <a id="email" href="mailto:simon@rodrig.dev">simon@rodrig.dev</a>

    <h3>Job Materials</h3>
    <IconCardLink href="/resume.pdf" iconName="carbon:document-pdf">
      <p slot="link-name">Resume</p>
      <p slot="link-desc">View my experience and work</p>
    </IconCardLink>
    <IconCardLink
      href="https://github.com/simonrodrig/"
      iconName="ri:github-fill"
    >
      <p slot="link-name">GitHub</p>
      <p slot="link-desc">View my source code</p>
    </IconCardLink>
    <IconCardLink
      href="https://linkedin.com/in/simonrodrig/"
      iconName="ri:linkedin-fill"
    >
      <p slot="link-name">LinkedIn</p>
      <p slot="link-desc">Connect with me</p>
    </IconCardLink>
  </Card>
</section>

<style lang="scss">
  @use "../styles/base";

  .hero {
    min-height: 75%;

    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;

    .right {
      .heading--secondary {
        margin: 1em 0;
      }
    }

    .right,
    .left {
      max-width: 40em;
    }

    .cta {
      display: inline-flex;
      flex-flow: row;
      align-items: center;
      gap: 0.3em;

      p {
        font-size: 1.25rem;
      }
    }

    .Portrait-Container {
      max-width: 100vw;
      max-height: 100vw;

      --clamp: clamp(25em, 30vw + 15em, 40em);
      height: var(--clamp);
      width: var(--clamp);
    }

    .left {
      display: flex;
      justify-content: flex-end;
    }
  }

  .quick-facts {
    padding: 0 0.5em;

    display: grid;
    grid-auto-columns: 1fr;
    gap: 1.5em;

    max-width: 75em;
    margin: auto;

    grid-template-areas:
      "one two three"
      "four four four"
      "four four four";

    :global(div):nth-child(1) {
      grid-area: one;
    }

    :global(div):nth-child(2) {
      grid-area: two;
    }

    :global(div):nth-child(3) {
      grid-area: three;
    }

    :global(div):nth-child(4) {
      grid-area: four;
      aspect-ratio: unset;
      min-height: 20em;
    }

    h2 {
      font-family: base.$font-primary;
      font-weight: 600;
      font-size: 1.5rem;
      line-height: 2;
    }

    p {
      color: base.$clr-text-secondary;
      line-height: 1.6;

      em {
        color: base.$clr-accent;
        font-style: normal;
      }
    }

    #email {
      font-size: 1.2rem;
      display: inline-block;
      margin-bottom: 1em;
    }
  }

  @media (max-width: base.$size-tablet) {
    .hero {
      flex-flow: column;
      margin: 2em 0;
      gap: 0;

      .left {
        justify-content: center;
      }

      .right > * {
        text-align: center;
      }
      .cta {
        display: flex;
        justify-content: center;
      }
    }

    .quick-facts {
      h2 {
        font-size: 1.25rem;
      }
      p {
        font-size: 1rem;
      }
    }
  }

  @media (max-width: base.$size-phone) {
    .quick-facts {
      grid-template-areas:
        "one"
        "two"
        "three"
        "four";

      :global():nth-child(4) {
        min-height: unset;
      }
    }
  }
</style>
