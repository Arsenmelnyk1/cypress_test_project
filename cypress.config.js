module.exports = {
  e2e: {
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      on('after:spec', (spec, results) => {
        if (results && results.video) {
          const failures = results.tests.some(test =>
            test.attempts.some(attempt => attempt.state === 'failed'),
          )
          if (!failures) {
            fs.unlinkSync(results.video)
          }
        }
      })
    },
  },
  chromeWebSecurity: false,
  video: true,
  screenshotOnRunFailure: true,
  videoCompression: false,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/',
    reportFilename: 'test-report',
    overwrite: true,
    html: false,
    json: true,
  },
};
