'use strict'
const base = require('./conf.base')

exports.wdio = Object.assign(base.wdio, {
  desiredCapabilities: {
    platformName: 'iOS',        // iOSで動かすことを指定
    deviceName: 'iPhone X',     // これはなんでも良い
    browserName: 'Safari',      // ブラウザのテストであることを指定
    udid: '<udid>',             // 実機のUDID（これを指定すると実機で動く)
    automationName: 'XCUITest', // 実機用のテストフレームワークを指定
    xcodeOrgId: '<Team ID>',    // https://developer.apple.com/account/#/membershipのTeam ID
    startIWDP: true,            // ios_webkit_debug_proxyの自動実行を指示
  }
});
