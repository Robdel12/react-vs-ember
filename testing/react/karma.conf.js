module.exports = function(config) {
  config.set({
    singleRun: false,
    reporters: ['mocha'],
    frameworks: ['mocha'],
    browsers: ['Chrome'],

    // files to watch
    files: [
      { pattern: './tests/acceptance/index.js', watched: false }
    ],

    exclude: [
      'dist',,
      '.cache',
    ],

    preprocessors: {
      'tests/index.js': ['webpack']
    },

    webpack: require('./tests/webpack.config.js'),
    webpackMiddleware: { stats: 'minimal' },
    plugins: [
      'karma-mocha',
      'karma-webpack',
      'karma-mocha-reporter',
      'karma-chrome-launcher'
    ]
  });
};
