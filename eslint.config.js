// @ts-check

import js from '@eslint/js';
import typescriptParser from '@typescript-eslint/parser';
import astroEslintParser from 'astro-eslint-parser';
import eslintPluginAstro from 'eslint-plugin-astro';
import unicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
import ts from 'typescript-eslint';

export default ts.config(
    {
        ignores: ['dist', 'node_modules', '.astro'],
    },
    {
        languageOptions: {
            parserOptions: {
                project: true,
                tsconfigRootDir: import.meta.dirname,
            },
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
    },
    js.configs.recommended,
    {
        rules: {
            'no-console': 'error',
            'no-debugger': 'error',
            'no-promise-executor-return': 'error',
            'no-self-compare': 'error',
            'no-template-curly-in-string': 'error',
            'no-unmodified-loop-condition': 'error',
            'no-unreachable-loop': 'error',
            'no-unused-private-class-members': 'error',
            'require-atomic-updates': 'error',
            'guard-for-in': 'error',
            'no-eval': 'error',
            'no-new-wrappers': 'error',
            'object-shorthand': 'error',
            'one-var': ['error', 'never'],
            radix: 'error',
            'valid-typeof': 'off',
            camelcase: 'error',
            'consistent-this': ['error', 'self'],
            curly: 'error',
            'default-case-last': 'error',
            eqeqeq: 'error',
            'no-alert': 'error',
            'no-object-constructor': 'error',
            'no-array-constructor': 'error',
            'new-cap': 'error',
            'no-bitwise': 'error',
            'no-delete-var': 'error',
            'no-implicit-coercion': [
                'error',
                {
                    allow: ['!!'],
                },
            ],
            'no-return-assign': 'error',
            'no-sequences': 'error',
            'no-shadow': 'error',
            'no-undef-init': 'error',
            'no-unneeded-ternary': 'error',
            'no-unused-expressions': 'error',
            'no-useless-call': 'error',
            'no-useless-catch': 'error',
            'no-useless-computed-key': 'error',
            'no-useless-constructor': 'error',
            'no-useless-escape': 'error',
            'no-useless-backreference': 'error',
            'no-useless-rename': 'error',
            'no-useless-return': 'error',
            'no-var': 'error',
            'no-void': 'error',
            'prefer-arrow-callback': 'error',
            'prefer-const': 'error',
            'prefer-destructuring': 'error',
            'prefer-numeric-literals': 'error',
            'prefer-object-has-own': 'error',
            'prefer-object-spread': 'error',
            'prefer-promise-reject-errors': 'error',
            'prefer-regex-literals': 'error',
            'prefer-rest-params': 'error',
            'prefer-spread': 'error',
            'require-await': 'error',
            'require-unicode-regexp': 'error',
            yoda: 'error',
        },
    },
    ts.configs.eslintRecommended,
    ...ts.configs.strictTypeChecked.map((c) => ({
        ...c,
        files: ['**/*.ts'],
    })),
    ...ts.configs.stylisticTypeChecked,
    unicorn.configs.all,
    {
        rules: {
            'unicorn/no-array-callback-reference': 'off',
            'unicorn/catch-error-name': 'off',
            'unicorn/consistent-destructuring': 'off',
            'unicorn/explicit-length-check': ['error', { 'non-zero': 'not-equal' }],
            'unicorn/import-style': 'off',
            'unicorn/no-array-for-each': 'off',
            'unicorn/no-array-reduce': 'off',
            'unicorn/no-await-expression-member': 'off',
            'unicorn/no-keyword-prefix': 'off',
            'unicorn/no-lonely-if': 'off',
            'unicorn/no-useless-undefined': 'off',
            'unicorn/number-literal-case': 'off',
            'unicorn/prefer-string-raw': 'off',
            'unicorn/prefer-ternary': 'off',
            'unicorn/prevent-abbreviations': 'off',
            'unicorn/switch-case-braces': ['error', 'avoid'],
            'unicorn/text-encoding-identifier-case': 'off',
            'unicorn/no-unreadable-array-destructuring': 'off',
        },
    },
    ...eslintPluginAstro.configs['flat/recommended'],
    {
        rules: {
            '@typescript-eslint/restrict-template-expressions': [
                'error',
                {
                    allowAny: false,
                    allowBoolean: false,
                    allowNullish: false,
                    allowNumber: true,
                    allowRegExp: false,
                    allowNever: false,
                },
            ],
            '@typescript-eslint/prefer-readonly': 'error',
            '@typescript-eslint/no-restricted-types': [
                'error',
                {
                    types: {
                        Object: {
                            message: 'Avoid using the `Object` type. Did you mean `object`?',
                        },
                        Function: {
                            message:
                                'Avoid using the `Function` type. Prefer a specific function type, like `() => void`.',
                        },
                        Boolean: {
                            message: 'Avoid using the `Boolean` type. Did you mean `boolean`?',
                        },
                        Number: {
                            message: 'Avoid using the `Number` type. Did you mean `number`?',
                        },
                        String: {
                            message: 'Avoid using the `String` type. Did you mean `string`?',
                        },
                        Symbol: {
                            message: 'Avoid using the `Symbol` type. Did you mean `symbol`?',
                        },
                    },
                },
            ],
            '@typescript-eslint/no-invalid-void-type': 'off',
            '@typescript-eslint/no-unused-vars': 'off',
            '@typescript-eslint/no-dynamic-delete': 'off',
            '@typescript-eslint/consistent-indexed-object-style': ['error', 'index-signature'],
            '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
            '@typescript-eslint/prefer-nullish-coalescing': 'error',
        },
    },
    {
        files: ['**/*.astro'],
        languageOptions: {
            parser: astroEslintParser,
            parserOptions: {
                parser: '@typescript-eslint/parser',
                extraFileExtensions: ['.astro'],
            },
        },
    },
    {
        files: ['**/*.{js,jsx,astro}'],
        rules: {
            'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
        },
    },
    {
        // Define the configuration for `<script>` tag.
        // Script in `<script>` is assigned a virtual file name with the `.js` extension.
        files: ['**/*.{ts,tsx}', '**/*.astro/*.js'],
        languageOptions: {
            parser: typescriptParser,
        },
        rules: {
            // Note: you must disable the base rule as it can report incorrect errors
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    argsIgnorePattern: '^_',
                    destructuredArrayIgnorePattern: '^_',
                },
            ],
            '@typescript-eslint/no-non-null-assertion': 'off',
        },
    },
);
