const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(["@monorepo/ui-kit"]);
const withImages = require("next-images");
//TODO change config
module.exports = withPlugins([withTM(), withImages], {
    webpack: (config) => {
        // custom webpack config
        return config;
    },
    images: {},
});