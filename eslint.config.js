import antfu from '@antfu/eslint-config'

export default antfu({
  vue: false,
  react: true, // @eslint-react/eslint-plugin
  typescript: true,
  stylistic: true,
  formatters: true, // eslint-plugin-format 格式化
  rules: {
    'react/no-array-index-key': 'off',
    'react/no-children-to-array': 'off',
    'jsdoc/check-alignment': 'off',
    'react-hooks/exhaustive-deps': 'off',
  },
})
