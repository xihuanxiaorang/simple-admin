/** @type {import('stylelint').Config} */
export default {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recess-order',
  ],
  overrides: [
    {
      files: ['**/*.(vue|html)'],
      customSyntax: 'postcss-html',
    },
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
    },
  ],
  rules: {
    // 允许 global 、export 、v-deep等伪类
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'export', 'v-deep', 'deep'],
      },
    ],
    'unit-no-unknown': [
      true,
      {
        ignoreUnits: ['rpx'],
      },
    ],
    'comment-empty-line-before': 'never',
    'custom-property-empty-line-before': 'never',
    'no-empty-source': null,
    'comment-no-empty': null,
    'no-duplicate-selectors': null,
    'scss/comment-no-empty': null,
    'selector-class-pattern': null,
    'font-family-no-missing-generic-family-keyword': null,
    'scss/at-rule-no-unknown': null,
  },
}
