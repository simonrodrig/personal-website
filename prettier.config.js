/** @type {import('prettier').Config} */
export default {
  useTabs: false,
  tabWidth: 2,
  arrowParens: 'avoid',
  svelteIndentScriptAndStyle: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  trailingComma: 'all',
  printWidth: 100,
  plugins: ['prettier-plugin-svelte'],
  overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
};
