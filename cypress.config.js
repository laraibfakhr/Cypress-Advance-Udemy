const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '7osndb',
  video: true,
  watchForFileChanges: false,
  e2e: {
    setupNodeEvents(on, config) {
    },    
  },
});
