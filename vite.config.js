import { sveltekit } from '@sveltejs/kit/vite';
import { Mode, plugin as mdPlugin } from 'vite-plugin-markdown';
import { imagetools } from '@zerodevx/svelte-img/vite';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [mdPlugin({ mode: [Mode.HTML] }), sveltekit(), imagetools()],
};

export default config;
