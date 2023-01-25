const withTM = require('next-transpile-modules')([ '@monorepo/ui-kit' ]); // pass the modules you would like to see transpiled

module.exports = withTM({ reactStrictMode: true });
