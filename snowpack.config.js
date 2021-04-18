/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  // exclude: [

  // ],
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    '@snowpack/plugin-vue',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-sass',
    '@snowpack/plugin-postcss',
    ['@snowpack/plugin-run-script', {
      cmd: 'echo "production build command."',
      watch: 'echo "dev server command."', // (optional)
    }],
    ['@snowpack/plugin-build-script', {
      input: [], // files to watch
      output: [], // files to export
      cmd: 'echo "build command."', // cmd to run
    }],
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    bundle: true,
    treeshake: true,
    minify: true,
    target: 'es2017',
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    // open: 'none',
    // port: 8081,
  },
  buildOptions: {
    /* ... */
  },
};
