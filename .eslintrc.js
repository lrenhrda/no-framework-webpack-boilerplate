module.exports = {
  'extends': 'standard',
  'plugins': ['prettier'],
  'env': {
    'browser': true,
    'node': true
  },
  'rules': {
    // Complete List: https://eslint.org/docs/rules/
    'prettier/prettier': 'error'
  },
  // Activate the resolver plugin, required to recognize the 'config' resolver
  settings: {
    'import/resolver': {
        webpack: {},
    },
  },
};
