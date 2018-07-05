// pages/tree/tree.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    a: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 20px; color: red;font-size:20pt;'
      },
      children: [{
        type: 'text',
        text: '我的心愿'
      }]
    }],
    b: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 20px; color: green;font-size:20pt;'
      },
      children: [{
        type: 'text',
        text: '我的评论'
      }]
    }],
    c: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 20px; color: red;font-size:20pt;'
      },
      children: [{
        type: 'text',
        text: '我的收藏'
      }]
    }],
    wishes:[
      {
        title:"wish1",
        concent:"this is my wish"
      },
      {
        title: "wish2",
        concent: "this is his wish"
      },
      {
        title: "wish3",
        concent: "this is her wish"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})