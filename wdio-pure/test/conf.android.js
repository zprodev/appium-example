'use strict'
const base = require('./conf.base')

exports.wdio = Object.assign(base.wdio, {
  desiredCapabilities: {
    platformName: 'Android',        // Androidで動かすことを指定
    deviceName: 'Galaxy S7 edge',   // これはなんでも良い
    browserName: 'Chrome',          // ブラウザのテストであることを指定
    automationName: 'UiAutomator2', // 実機用のテストフレームワークを指定
  }
});
