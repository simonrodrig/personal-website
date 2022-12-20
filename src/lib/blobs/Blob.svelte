<script lang="ts">
  import { onMount } from 'svelte';

  export let color: string | undefined = undefined;

  function shuffleArray<T>(array: T[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  const shapes = [
    'M65.7,-34.5C79.7,-13.9,81.6,17.2,68.6,37.3C55.7,57.4,27.8,66.5,2.7,65C-22.5,63.5,-44.9,51.2,-58.2,30.9C-71.5,10.6,-75.6,-17.7,-64.4,-36.8C-53.2,-55.9,-26.6,-65.7,-0.3,-65.5C25.9,-65.3,51.8,-55.1,65.7,-34.5Z',
    'M59.6,-35.1C71.3,-14.1,70.9,13.3,58.9,36C46.9,58.7,23.5,76.7,-1.6,77.6C-26.6,78.5,-53.3,62.3,-66.9,38.7C-80.5,15,-81.2,-16.1,-67.9,-38.1C-54.5,-60,-27.3,-72.7,-1.7,-71.8C23.9,-70.8,47.9,-56.1,59.6,-35.1Z',
    'M70.7,-38.3C84.3,-17.4,82.8,14.8,68.5,37.4C54.2,60,27.1,73.1,1,72.6C-25.2,72,-50.4,57.8,-63.3,35.9C-76.3,14.1,-77.1,-15.5,-64.5,-35.9C-52,-56.3,-26,-67.6,1.3,-68.4C28.6,-69.1,57.2,-59.3,70.7,-38.3Z',
    'M62.8,-35.3C76.8,-12,80.4,18.2,68.2,39C56,59.9,28,71.2,-0.1,71.2C-28.2,71.3,-56.3,60,-70.3,38.2C-84.4,16.3,-84.3,-16.2,-70.2,-39.5C-56.2,-62.9,-28.1,-77.2,-1.8,-76.1C24.4,-75,48.8,-58.7,62.8,-35.3Z',
    'M68.3,-40.4C81.9,-16,81.6,15.5,67.9,38.9C54.2,62.4,27.1,77.8,0.7,77.4C-25.7,77,-51.5,60.8,-65.5,37.1C-79.6,13.4,-82.1,-17.7,-69.2,-41.7C-56.4,-65.6,-28.2,-82.5,-0.4,-82.2C27.4,-82,54.8,-64.7,68.3,-40.4Z',
    'M65.4,-38.2C78.5,-15.1,78.5,15.1,65.4,38.3C52.4,61.5,26.2,77.7,-0.1,77.8C-26.5,77.9,-52.9,61.9,-67.3,37.9C-81.6,14,-83.8,-17.8,-70.6,-41C-57.4,-64.2,-28.7,-78.7,-1.3,-78C26.1,-77.3,52.3,-61.3,65.4,-38.2Z',
    'M71.4,-40.2C85.4,-17,84.6,15.7,70.3,39.4C55.9,63.1,28,77.9,-0.4,78.1C-28.8,78.4,-57.6,64.1,-70.9,41C-84.2,17.8,-82.1,-14.2,-67.7,-37.6C-53.3,-61,-26.7,-75.7,1,-76.3C28.7,-76.9,57.4,-63.3,71.4,-40.2Z'
  ];

  shuffleArray(shapes);

  // We want to play the animation forward and backwards. Do this manually for now.
  const s = [...shapes, ...[...shapes].reverse()];

  const animateProps = {
    attributeName: 'd',
    dur: '20s',
    repeatCount: 'indefinite',
    values: s.join(';')
  };

  let showAnim = true;

  onMount(() => {
    const query = '(prefers-reduced-motion: reduce)';
    const queryList = window.matchMedia(query);

    const verifyMotion = (query: MediaQueryList) => {
      if (queryList.matches) showAnim = false;
      else showAnim = true;
    };

    verifyMotion(queryList);
    queryList.addEventListener('change', () => verifyMotion(queryList));
  });
</script>

<div class="Blob">
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    {#if color !== undefined}
      {#if showAnim}
        <path style:--color={color} transform="translate(100 100)">
          <animate {...animateProps} />
        </path>
      {:else}
        <path style:--color={color} transform="translate(100 100)" d={s[0]} />
      {/if}
    {:else if showAnim}
      <path transform="translate(100 100)">
        <animate {...animateProps} />
      </path>
    {:else}
      <path transform="translate(100 100)" d={s[0]} />
    {/if}
  </svg>
</div>

<style lang="scss">
  @use '../../styles/vars';

  .Blob {
    svg {
      path {
        --color: #{vars.$clr-background-light};
        fill: var(--color);
      }
    }
  }
</style>
