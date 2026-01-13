
const ExtentReports = require('extent-reports');
let extent;
let test;

module.exports = {
  init() {
    extent = new ExtentReports('reports/extent/index.html', false);
  },
  start(name) {
    test = extent.startTest(name);
  },
  pass(msg) {
    test.pass(msg);
  },
  fail(msg) {
    test.fail(msg);
  },
  flush() {
    extent.endTest(test);
    extent.flush();
  }
};
