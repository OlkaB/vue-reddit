module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/recommended',
        'eslint:recommended'
    ],
    rules: {
        "array-bracket-spacing": ["error", "always"],
        "block-spacing": ["error", "always"],
        "comma-dangle": ["error", "never"],
        "implicit-arrow-linebreak": ["error", "beside"],
        "indent": ["error", 4],
        "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
        "keyword-spacing": ["error", { "before": true, "after": true }],
        "max-params": ["error", 3],
        "no-console": process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        "no-debugger": process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        "no-duplicate-imports": "error",
        "no-multiple-empty-lines": ["error", { "max": 2 }],
        "no-nested-ternary": "error",
        "no-trailing-spaces": ["error", { "ignoreComments": true }],
        "no-var": "error",
        "object-curly-spacing": ["error", "always"],
        "prefer-const": "error",
        "prefer-template": "error",
        "quotes": ["error", "single", { "allowTemplateLiterals": true }],
        "semi": ["error", "never"],
        "space-before-blocks": ["error", "always"],
        "spaced-comment": ["error", "always"],
        "vue/html-indent": ["error", 4]
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)'
            ],
            env: {
                jest: true
            }
        }
    ]
}
