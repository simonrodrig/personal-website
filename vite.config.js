import { sveltekit } from '@sveltejs/kit/vite';
import {Mode, plugin as mdPlugin} from 'vite-plugin-markdown';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [mdPlugin({mode: [Mode.HTML]}), sveltekit()]
};

export default config;
