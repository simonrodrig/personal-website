<script lang="ts">
  import Portrait from '$lib/blobs/BlobPortrait.svelte';
  import IconCardLink from '$lib/IconCardLink.svelte';
  import Card from '$lib/Card.svelte';
  import Image from 'svimg';
  import ProjectLink from '$lib/ProjectLink.svelte';
</script>

<svelte:head>
  <title>Simon Rodriguez | Front-end Software Developer</title>

  <meta
    name="description"
    content="Simon is a developer with an interest in frontend web development, UI/UX design, and open source."
  />
</svelte:head>

<section id="home" class="hero">
  <div class="Portrait-Container">
    <Portrait innerLayerColor="#E95678" outerLayerColor="#232530">
      <Image src="headshot.jpeg" alt="Headshot portrait of Simon" immediate />
    </Portrait>
  </div>

  <div class="right">
    <h1>Simon<br />Rodriguez</h1>
    <p class="heading--subtitle">
      Developer with an interest in frontend web development, UI/UX design, and open source.
    </p>
    <a class="cta text--link" href="/#say-hello">
      Say Hello
      <iconify-icon icon="fe:arrow-right" width="24" />
    </a>
  </div>
</section>

<section class="quick-facts">
  <Card icon="fe:globe">
    <h2 id="about">About Me</h2>
    <p>
      Hey there! I'm a recent college graduate with a passion for tech. When I'm not working, you
      can find me cooking, spending time with my cats, or playing video games!
    </p>
  </Card>

  <Card icon="fe:calendar">
    <h2>What I'm up to</h2>
    <p>
      Currently I'm looking for work! I'm available to work <b>remote in the US</b>, or somewhere in
      the <b>Massachusetts area</b>.
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
</section>

<h2>Some of my projects</h2>
<section id="projects" class="projects">
  <ProjectLink href="/projects/raudio" imageHref="twitter-card-image.png">
    <h3>Raudio</h3>
    <p>Internet radio streaming</p>
  </ProjectLink>
  <ProjectLink href="/projects/raudio" imageHref="twitter-card-image.png">
    <h3>Raudio</h3>
    <p>Internet radio streaming</p>
  </ProjectLink>
  <ProjectLink href="/projects/raudio" imageHref="twitter-card-image.png">
    <h3>Raudio</h3>
    <p>Internet radio streaming</p>
  </ProjectLink>
  <ProjectLink href="/projects/raudio" imageHref="twitter-card-image.png">
    <h3>Raudio</h3>
    <p>Internet radio streaming</p>
  </ProjectLink>

  <ProjectLink href="/projects/raudio" imageHref="twitter-card-image.png" />
  <ProjectLink href="/projects/raudio" imageHref="twitter-card-image.png" />
</section>

<section class="contact">
  <Card icon="fe:sunny-o">
    <h2 id="say-hello">Say Hello!</h2>
  
    <h3>Email</h3>
    <a id="email" href="mailto:simon@rodrig.dev">simon@rodrig.dev</a>
  
    <h3>Job Materials</h3>
    <IconCardLink href="/resume.pdf" iconName="carbon:document-pdf">
      <p slot="link-name">Resume</p>
      <p slot="link-desc">View my experience and work</p>
    </IconCardLink>
    <IconCardLink href="https://github.com/simonrodrig/" iconName="ri:github-fill">
      <p slot="link-name">GitHub</p>
      <p slot="link-desc">View my source code</p>
    </IconCardLink>
    <IconCardLink href="https://linkedin.com/in/simonrodrig/" iconName="ri:linkedin-fill">
      <p slot="link-name">LinkedIn</p>
      <p slot="link-desc">Connect with me</p>
    </IconCardLink>
  </Card>
</section>

<style lang="scss">
  @use '../styles/vars';

  .hero {
    min-height: 75%;

    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;

    > * {
      max-width: 40em;
    }

    .cta {
      display: inline-flex;
      flex-flow: row;
      align-items: center;
      gap: 0.3em;
      font-size: 1.25rem;
    }

    .Portrait-Container {
      max-width: 100vw;
      max-height: 100vw;

      --clamp: clamp(25em, 30vw + 15em, 40em);
      height: var(--clamp);
      width: var(--clamp);
    }
  }

  .quick-facts {
    max-width: 75em;
    margin: auto;
    
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5em;
  }

  .projects {
    max-width: 90em;
    margin: 2em auto;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1em;
  }

  .contact {
    margin: 2em auto;
    max-width: 74em;
  }

  @media (max-width: vars.$size-tablet) {
    .hero {
      flex-flow: column;
      margin: 2em 0;
      gap: 0;

      .right > * {
        text-align: center;
      }
      .cta {
        display: flex;
        justify-content: center;
      }
    }
  }

  @media (max-width: vars.$size-phone) {
    .quick-facts, 
    .projects {
      padding: 1em;
      grid-template-columns: auto;
    }

  }
</style>
