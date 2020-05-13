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
        'import/resolver': {
            alias: {
                map: [
                    ['@contexts', './src/contexts'],
                    ['@organisms', './src/organisms'],
                    ['@pages', './src/pages'],
                ],
                extensions: ['.ts', '.js', '.jsx', '.json']
            }
        },
        "react": {
            "version": "detect",
        }
    }
};
