module.exports = {
    semi: false,
    tabWidth: 4,
    printWidth: 100,
    singleQuote: true,
    trailingComma: 'all',
    jsxSingleQuote: true,
    bracketSpacing: true,
    bracketSameLine: true,
    importOrder: [
        '<THIRD_PARTY_MODULES>',
        '^packages/(.*)$',
        '^core/(.*)$',
        '^utils/(.*)$',
        '^features/(.*)$',
        '^components/(.*)$',
        '^assets(.*)$',
        '^[./]',
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
    importOrderCaseInsensitive: true,
    plugins: [
        // '@trivago/prettier-plugin-sort-imports',
        'prettier-plugin-organize-imports',
        // 'prettier-plugin-tailwindcss', // MUST come last
    ],
}
