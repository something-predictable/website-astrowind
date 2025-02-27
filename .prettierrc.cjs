/** @type {import('prettier').Config} */
module.exports = {
    plugins: [require.resolve('prettier-plugin-astro')],

    singleQuote: true,

    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro',
                tabWidth: 2,
                trailingComma: 'all',
                semi: false,
                arrowParens: 'avoid',
            },
        },
        {
            files: ['*.ts', '*.config.mjs'],
            options: {
                trailingComma: 'all',
                semi: false,
                arrowParens: 'avoid',
            },
        },
    ],
};
