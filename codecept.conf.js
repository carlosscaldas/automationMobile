const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  // tests: './*_test.js',
  output: './output',
  helpers: {
    Appium: {
      app: 'C:/GIT/automationMobile/app/Calculator.apk',
      desiredCapabilities: {
        appPackage: 'com.google.android.calculator',
        appActivity: 'com.android.calculator2.Calculator',
        deviceName: 'emulator-5554',
        platformVersion: '10.0',
        platformName: 'Android',
        automationName: 'UiAutomator2',
        adbExecTimeout: 60000,
        uiautomator2ServerInstallTimeout: 60000
      }
    }
  },
  include: {
    I: './steps_file.js',
    home_page: './integration/page/home_page.js'
  },
  gherkin: {
    features: './integration/features/*.feature',
    steps: ['./integration/step_definition/steps.js']
  },
  name: 'automationMobile'
}