module.exports = {
  extends: ['rollup', 'plugin:import/typescript'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.eslint.json', './packages/*/tsconfig.json'],
    tsconfigRootDir: __dirname
  },
  plugins: ['@typescript-eslint', 'import'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      // use <root>/tsconfig.json
      'typescript': {
        'alwaysTryTypes': true // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
      },

      // Multiple tsconfigs (Useful for monorepos)

      // use a glob pattern
      'typescript': {
        'project': 'packages/*/tsconfig.json'
      }
    }
  },
  rules: {
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/consistent-type-definitions': 'error',
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'local',
        args: 'after-used',
        ignoreRestSiblings: true
      }
    ],
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    'import/no-namespace': 'off',
    'import/no-named-export': 'off',
    'no-unused-vars': 'off',
    'spaced-comment': 'off',
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        printWidth: 100,
        singleQuote: true,
        trailingComma: 'none',
        plugins: ['prettier-plugin-package']
      }
    ]
  }
};
