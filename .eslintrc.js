module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  parser: 'babel-eslint',
  extends: ['airbnb', "prettier",
    "prettier/react"],
  rules: {
    'no-restricted-syntax': 0,
    'no-cond-assign': 0,
    'prefer-rest-params': 0,
    'linebreak-style': 0,
    'one-var': 0,
    'max-len': 0,
    'no-alert': 0,
    'no-plusplus': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/no-multi-comp': 0,
    'class-methods-use-this': 1,
    'consistent-return': 1,
    'global-require': 1,
    'import/extensions': 1,
    'import/first': 1,
    'import/no-extraneous-dependencies': 1,
    'import/no-named-as-default': 1,
    'import/no-named-as-default-member': 1,
    'import/prefer-default-export': 1,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'no-nested-ternary': 0,
    'no-param-reassign': 1,
    'no-return-await': 1,
    'no-shadow': 1,
    'no-undef': 1,
    'no-underscore-dangle': 1,
    'no-unused-vars': 1,
    'no-use-before-define': 1,
    'prefer-const': 1,
    'prefer-destructuring': 1,
    'no-console': 0,
    'react/forbid-prop-types': 1,
    'react/jsx-indent': 1,
    'react/jsx-indent-props': 1,
    'react/jsx-closing-tag-location': 1,
    'react/jsx-max-props-per-line': 1,
    'react/jsx-no-bind': 1,
    'react/jsx-no-target-blank': 1,
    'react/no-array-index-key': 1,
    'react/no-did-mount-set-state': 1,
    'react/no-string-refs': 1,
    'react/no-unescaped-entities': 0,
    'react/no-unused-prop-types': 1,
    'react/no-unused-state': 1,
    'react/prefer-stateless-function': 1,
    'react/prop-types': 1,
    'react/require-default-props': 1,
    'react/sort-comp': 1,
  },
};