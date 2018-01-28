module.exports = (() => {
  const config = {
    src_folders: ['test'],

    selenium: {
      start_process: true,
      server_path: 'test/selenium-server.jar',
      port: 4444,
      cli_args: {
        'webdriver.chrome.driver': 'node_modules/.bin/chromedriver'
      }
    },

    test_settings: {
      default: {
        launch_url: 'http://127.0.0.1:3000',
        selenium_port: 4444,
        selenium_host: 'localhost',
        desiredCapabilities: {
          browserName: 'chrome',
          chromeOptions : {
            args : ['--headless']
          }
        },
        filter: 'test/*.test.js'
      },
    }
  };
  return config;
})();
