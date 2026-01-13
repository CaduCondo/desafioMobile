
const isCI = process.env.CI === 'true';

exports.config = {
  runner: 'local',

  specs: [
    process.cwd() + '/test/specs/**/*.spec.js'
  ],

  maxInstances: 1,

  capabilities: [{
    browserName: 'chrome',
    'goog:chromeOptions': {
      args: isCI
        ? ['--headless=new', '--disable-gpu', '--no-sandbox', '--disable-dev-shm-usage']
        : []
    }
  }],

  framework: 'mocha',

  reporters: ['spec'],

  mochaOpts: {
    timeout: 60000
  }
};
