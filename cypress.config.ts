import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'wwyf7n',
  video: false,
  videoUploadOnPasses: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  waitForAnimations: true,
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 120000,
  requestTimeout: 60000,
  responseTimeout: 60000,
  retries: {
    runMode: 2,
    openMode: 0,
  },
  env: {
    appid: '#automation-analytics-application',
    USERNAME: 'admin',
    PASSWORD: 'admin',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config);
    },
    baseUrl:
      'https://stage.foo.redhat.com:1337/ansible/automation-analytics',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
});
