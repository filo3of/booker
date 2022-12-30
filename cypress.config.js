const { defineConfig } = require("cypress");

module.exports = defineConfig({
  waitForAnimations: true,
  video: false,
  defaultCommandTimeout: 10000,
  watchForFileChanges: false,
  chromeWebSecurity: false,
  retries: {
    runMode: 2,
    openMode: 0,
  },

  reporter: "cypress-multi-reporters",
  reporterOptions: {
    reporterEnabled: "mocha-junit-reporter, mochawesome",
    mochawesomeReporterOptions: {
      reportDir: "cypress/mochawesome",
      overwrite: false,
      html: false,
      json: true,
    },
    mochaJunitReporterReporterOptions: {
      mochaFile: "cypress/results/results-[hash].xml",
    },
  },

  env: {
    grepFilterSpecs: true,
    grepOmitFiltered: true,
  },

  e2e: {
    baseUrl: "https://automationintesting.online",
    setupNodeEvents(on, config) {
      require("@cypress/grep/src/plugin")(config);
      return config;
    },
  },
});
