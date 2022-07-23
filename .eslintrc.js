module.exports = {
    env: {
        commonjs: true,
        es2021: true,
        node: true,
    },
    extends: [
        'airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        'no-unused-vars': 'warn',
        indent: ['error', 4],
        'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],

    },
};
