// require('lighthouse/lighthouse-core/config/lr-desktop-config.js');

const config = {
  baseUrl: 'http://localhost:3502/portal',
  embeddedUrl: 'http://localhost:3502/embedded',
  apps: {
    mediaCo: {
      rep: {
        username: 'rep@mediaco',
        password: '88P3g&!88'
      },
      manager: {
        username: 'manager@mediaco',
        password: '77Rul3$77'
      },
      tech: {
        username: 'tech@mediaco',
        password: '77Rul3$77'
      }
    },
    digv2: {
      user: {
        username: 'user.digv2',
        password: 'pega'
      },
      localizedUser: {
        username: 'localization@DigV2',
        password: 'pega'
      }
    }
  },
  testsetting: {
    // Enable network throttling(Default is false)
    throttle: false,
    // Simulate absence of connectivity
    offline: false,
    // Simulated download speed (bytes/s)
    downloadThroughput: 500,
    // Simulated upload speed (bytes/s)
    uploadThroughput: 500,
    // Simulated latency (ms)
    latency: 20,

    defaulttimeout: 60000,
    jesttimeout: 300000,
    slowmo: 120,
    slowmof: 30,
    width: 1920,
    height: 1080,
    headless: true,
    devtools: false
  }
};

exports.config = config;
