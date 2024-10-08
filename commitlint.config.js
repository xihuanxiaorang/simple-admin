export default {
  // 继承默认的规范配置
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 提交主体前必须有一个空行
    'body-leading-blank': [2, 'always'],
    // 提交尾部前必须有一个空行
    'footer-leading-blank': [1, 'always'],
    // 提交标题最大长度为 108 个字符
    'header-max-length': [2, 'always', 108],
    // 提交主题不能为空
    'subject-empty': [2, 'never'],
    // 提交类型不能为空
    'type-empty': [2, 'never'],
    // 不对提交主题的大小写进行检查,关闭此规则
    'subject-case': [0],
    // 规定提交类型的枚举值
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能
        'fix', // 修复bug
        'docs', // 仅文档更改
        'style', // 仅样式更改（空格、格式化等）
        'refactor', // 代码重构（既不修复bug也不添加功能）
        'perf', // 性能优化
        'test', // 添加缺失的测试
        'build', // 影响构建系统或外部依赖的更改
        'ci', // 持续集成的更改
        'revert', // 撤销先前的提交
        'chore', // 其他不修改源文件的更新
      ],
    ],
  },
}
