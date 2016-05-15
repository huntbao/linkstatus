//author @huntbao
/*global chrome */

'use strict'

class BGPage {

  constructor() {
    this.addEvent()
  }

  static addEvent() {
    chrome.browserAction.onClicked.addListener(function (tab) {
      chrome.tabs.executeScript(null, {code: 'linkStatusChromeExt.create()'})
    })
  }
}

new BGPage()