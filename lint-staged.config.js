/**  @type {import('lint-staged').Config} */
export default {
  '*.{ts,tsx,js,jsx,cjs,mjs}': 'eslint --fix --cache',
  '*.{css,scss,less}': 'stylelint --fix --cache',
  '*.{ts,tsx,js,jsx,cjs,mjs,html,css,scss,less,json}': 'prettier --write --cache',
};
