Page({
  data: {
    imgUrls: [
      '../../images/1.jpg',
      '../../images/2.jpg',
      '../../images/3.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    nodes: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 20px; color: red;font-size:20pt;'
      },
      children: [{
        type: 'text',
        text: '傲视一切'
      }]
    }]
  },
  zhuxiao: function () {
    console.log("注销")
    wx.navigateTo({
      url: '../login/login',
    })
  },
  shoucang: function () {
    console.log("进入我的收藏")
    wx.navigateTo({
      url: '../collocation/collocation',
    })
  },
  onShareAppMessage: function (res) {
    var that = this;
    return {
      title: '',
      path: '/pages/mainPage/mainPage?id=' + that.data.scratchId,
      success: function (res) {
        // 转发成功

        that.shareClick();
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})
  