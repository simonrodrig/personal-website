<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
  const { attributes, html } = data.markdown;
</script>

<h1>{attributes.title}</h1>
{@html html}
