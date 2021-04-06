module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-order', 'stylelint-prettier/recommended'],
  plugins: ['stylelint-prettier'],
  rules: {
    'prettier/prettier': true,
    // at-rule-no-unknown: 屏蔽一些scss、less等未知语法检查
    'at-rule-no-unknown': [true, { ignoreAtRules: ['mixin', 'extend', 'content'] }],
    // 加入antd的global全局选择器
    "selector-pseudo-class-no-unknown": [ true, {
      ignorePseudoClasses: ["global"],
    } ]
  },
};
