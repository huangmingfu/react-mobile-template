/**  @type {import('lint-staged').Config} */
export default {
  '*.{ts,tsx,js,jsx,cjs,mjs}': 'eslint --fix',
  '*.{css,scss,less}': 'stylelint --fix',
  '*.{ts,tsx,js,jsx,cjs,mjs,html,css,scss,less,json}': 'prettier --write',
};
