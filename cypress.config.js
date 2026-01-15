import crypto from "crypto";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import addCucumberPreprocessorPlugin from "@badeball/cypress-cucumber-preprocessor";
global.crypto = crypto;

const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: false,
    json: true
  },
  e2e: {
    specPattern: "cypress/e2e/features/**/*.feature",
    video: false,          // disable videos in CI
    screenshotOnRunFailure: true,
    retries: {
      runMode: 1,
      openMode: 0
    },
    setupNodeEvents(on, config) {
      addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [
            require("@badeball/cypress-cucumber-preprocessor/esbuild").default(
              config
            ),
          ],
        })
      );

      return config;
    },
    env: {
    CDK_BASE_URL: "https://qa.eleadcrm.com/evo2/fresh/login.asp",
    //CDK_BASE_URL: "https://app-unify.app-perf.connectcdk.com/applications",
    ORANGEHRM_BASE_URL: "https://opensource-demo.orangehrmlive.com"
  }
  },
});
