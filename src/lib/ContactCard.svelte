<script lang="ts">
  import Card from './Card.svelte'
  import IconCardLink from './IconCardLink.svelte';
</script>

<Card icon="fe:sunny-o">
  <h2 id="say-hello">Say Hello!</h2>
  <p>
    If you're an employer, feel free to reach out and chat about the possibility
    of me working with you! While you're here, feel free to check out some of my
    projects, or take a look at my resume!
  </p>

  <br>
  <h3>Email</h3>
  <a id="email" href="mailto:simon@rodrig.dev">simon@rodrig.dev</a>

  <h3>Job Materials</h3>
  <div class="links">
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
  </div>
</Card>

<style lang="scss">
  @use '../styles/vars';

  #email {
    font-size: 1.2rem;
    display: inline-block;
    margin-bottom: 1em;
    // margin-top: 0.2em;
  }

  .links {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
  }
</style>