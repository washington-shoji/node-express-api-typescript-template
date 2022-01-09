module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended",
    ],
    overrides: [
        {
            files: [ '*.ts', '*.tsx' ],
            parserOptions: {
                project: [ './tsconfig.json' ],
            },
        }
    ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
    },
    rules: {},
};