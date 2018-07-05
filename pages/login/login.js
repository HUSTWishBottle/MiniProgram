//logs.js
const util = require('../../utils/util.js')

Page({
  mainPage: function () {
    console.log("进入个人主页")
    wx.switchTab({
      url: '../mainPage/mainPage',
    })
  },
  signup: function () {
    console.log("进入注册界面")
    wx.navigateTo({
      url: '../signup/signup',
    })
  }
})