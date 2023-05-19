const path = require('path');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ['en', 'ru'],
        defaultLocale: 'ru',
    },
    experimental: {
        swcPlugins: [
            [
                'next-superjson-plugin',
                {
                    excluded: [],
                },
            ],
        ],
    },
    webpack(config) {
        // Grab the existing rule that handles SVG imports
        const fileLoaderRule = config.module.rules.find((rule) =>
            rule.test?.test?.('.svg'),
        );

        config.module.rules.push(
            // Reapply the existing rule, but only for svg imports ending in ?url
            {
                ...fileLoaderRule,
                test: /\.svg$/i,
                resourceQuery: /url/, // *.svg?url
            },
            // Convert all other *.svg imports to React components
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                resourceQuery: {not: /url/}, // exclude if *.svg?url
                use: [{loader: '@svgr/webpack', options: {svgo: false}}],
            },
        );

        fileLoaderRule.exclude = /\.svg$/i;

        // Правила для использования обычных стилей помимо CSS modules, для покраски SVG и вложенных классов стилей
        config.module.rules.forEach((rule) => {
            const {oneOf} = rule;
            if (oneOf) {
                oneOf.forEach((one) => {
                    if (!`${one.issuer?.and}`.includes('_app')) return;
                    one.issuer.and = [path.resolve(__dirname)];
                });
            }
        });

        return config;
    },
    output: 'standalone',
    staticPageGenerationTimeout: 2000,
};

module.exports = withBundleAnalyzer(nextConfig);