module.exports = {
  extends: require.resolve('@umijs/max/stylelint'),
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind'],
      },
    ],
  },
  'at-rule-no-unknown': [
    true,
    {
      ignoreAtRules: ['tailwind'],
    },
  ],
};
