'use strict'

const wdio = require('webdriverio');
const assert = require('assert');

// 環境変数で渡された名前から対象のコンフィグをロード
const config = require(`../conf.${process.env.NODE_TEST_DEVICE}`);
// wdioのインスタンスを作成
const browser = wdio.remote(config.wdio);

describe('テストグループ', function() {

  // デフォルトだと2000msでタイムアウトになってしまうので延長設定
  this.timeout(60000);

  before((done) => {
    // 初期化が完了したらコールバック.
    browser.init().call(done);
  });

  after(function(){
    browser.end();
  });
  
  it('Google検索ページのタイトル取得', () => {
    return browser
    .url('https://www.google.co.jp')
    .getTitle().then((title) => {
      assert.equal(title, 'Google');
    });
  });

  it('GitHubトップページのタイトル取得', () => {
    return browser
    .url('https://github.com')
    .getTitle().then((title) => {
      assert.equal(title, 'The world\'s leading software development platform · GitHub');
    });
  });
});