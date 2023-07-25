const esbuildPluginTsc = require('esbuild-plugin-tsc');

module.exports = {
  keepNames: true,
  outExtension: {
    '.js': '.js',
  },
  plugins: [
    esbuildPluginTsc({
      tsconfigPath: 'apps/broken-node/tsconfig.app.json',
    }),
  ],
};
