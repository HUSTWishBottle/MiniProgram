// pages/wishSea/wishSea.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nodes: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 20px;color:red;font-size:20pt;'
      },
      children: [{
        type: 'text',
        text: '标题'
      }]
    }],
    nodesa: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 30px;color:gold;font-size:30pt;'
      },
      children: [{
        type: 'text',
        text: '我的心愿'
      }]
    }],
  },  
  //右上角分享功能
  onShareAppMessage: function (res) {
    var that = this;
    return {
      title: '',
      path: '/pages/tree/tree?id=' + that.data.scratchId,
      success: function (res) {
        // 转发成功

        that.shareClick();
      },
      fail: function (res) {
        // 转发失败
      }
    }
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