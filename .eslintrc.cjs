/* eslint-env node */
module.exports = {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    root: true,

    rules: {
        semi: ['error', 'always'],
        'no-console': ['error', { allow: ['warn', 'error'] }],
        indent: ['error', 4],
        'max-len': ['error', { code: 80 }],
    }
};