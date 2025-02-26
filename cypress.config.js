module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
    },
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/',
    reportFilename: 'test-report',
    overwrite: true,
    html: false,
    json: true,
  },
};
