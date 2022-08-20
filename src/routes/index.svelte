<script lang="ts">
  import { ArrowRightIcon, CalendarIcon, GlobeIcon, LinkIcon } from "svelte-feather-icons";
  import Portrait from "../components/Blobs/BlobPortrait.svelte";
  import headshot from "../assets/headshot.jpeg";
  import Card from '../components/Card.svelte';

  const iconProps = {strokeWidth: '2.3', size: '35'}
</script>

<section id="home" class="hero">
  <div class="left">
    <div class="Portrait-Container">
      <Portrait innerLayerColor="#E95678" outerLayerColor="#232530">
        <img src={headshot} alt="" />
      </Portrait>
    </div>
  </div>

  <div class="right">
    <h1>Simon<br /> Rodriguez</h1>
    <p class="heading--secondary">
      Developer with an interest in frontend web development, UI/UX design, and
      open source.
    </p>
    <a class="cta" href="/">
      <p class="text--link">Say Hello</p>
      <ArrowRightIcon />
    </a>
  </div>
</section>

<section class="quick-facts">
  <Card icon={GlobeIcon} props={iconProps}> 
    <h2 id="about">About Me</h2>
    <p>Hey there! I’m a recent college graduate with a passion for tech. When I’m not working, you can find me cooking, spending time with my cats, or playing video games!</p>
  </Card>
  <Card icon={CalendarIcon} props={iconProps}>
    <h2>What I'm up to</h2>
    <p>Currently I'm looking for work! I'm available to work <b>remote in the US</b>, or somewhere in the <b>Massachusetts area</b>.</p>
  </Card>
  <Card icon={LinkIcon} props={iconProps}>
    <h2 id="contact">Contact</h2>
    <p>If you’re interested in working with me, please reach me through <em>simon[at]rodrig[dot]dev.</em></p>
  </Card>
  <Card icon={CalendarIcon} props={iconProps}>
    
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
      display: flex;
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

    grid-template-areas: "one two three"
                         "four four four"
                         "four four four";

    :global():nth-child(1) {
      grid-area: one;
    }

    :global():nth-child(2) {
      grid-area: two;
    }

    :global():nth-child(3) {
      grid-area: three;
    }

    :global():nth-child(4) {
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
      line-height: 1.7;

      em {
        color: base.$clr-accent;
        font-style: normal;
      }
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

      .right>* {
        text-align: center;

      }
      .cta {
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
