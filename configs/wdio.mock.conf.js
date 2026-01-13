
exports.config = {
  runner: 'local',
  specs: ['./test/specs/**/*.spec.js'],
  maxInstances: 1,
  capabilities: [{
    browserName: 'chrome'
  }],
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    timeout: 60000
  }
};
