// pages/webview/webview.js
Page({

  /**
   * Page initial data
   */
  data: {
    url:''
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    if (options.url) {
      this.setData({
        url: decodeURIComponent(options.url)
      });
    }
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage() {

  }
})