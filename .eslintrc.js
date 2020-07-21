module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended'
    ],
    parserOptions: {
        project: './tsconfig.json',
    },
    plugins: ['@typescript-eslint'],
    settings: {
        "react": {
            "version": "detect",
        }
    },
    rules: {
        "@typescript-eslint/explicit-function-return-type": "off"
    }
};
