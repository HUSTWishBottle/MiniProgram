// pages/wishSea/wishSea.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    color:[],
    colors: [],
    commentList:[],
    chioceFilter: false,
    filterList: [{ key: 1, value: "周日营业", selected: false }, {
      key: 2, value: "官方假期营业（香港）", selected: false
    }, {
      key: 3, value: "可为儿童接种疫苗", selected: false
    }, {
      key: 4, value: "网上付款", selected: false
    }, {
      key: 5, value: "到诊所现场付款", selected: false
    }],
    nodesb: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 30px;color:white;font-size:30pt;'
      },
      children: [{
        type: 'text',
        text: '心愿海'
      }]
    }],
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
        style: 'line-height: 15px;color:gold;font-size:15pt;'
      },
      children: [{
        type: 'text',
        text: '作者'
      }]
    }]
  },
  choiceItem: function(e) {
    //console.log(e)
    var that = this;
    //console.log(this.data.chioceFilter)
    //console.log(e.currentTarget.dataset.item)
    if (e.currentTarget.dataset.item == "3")
      if (this.data.chioceFilter) {
        //返回list
       // console.log(e)
        wx.request({
          url: 'http://localhost:8080/weChatgetComment/' + e.target.dataset.wishid,
          data: {},
          method: "GET",
          success: function (res) {
            console.log(res.data.commentsList)
            that.setData({
              chioceFilter: false,
              commentList: res.data.commentsList,
            });
          }
        })
      }
    else {
        wx.request({
          url: 'http://localhost:8080/weChatgetComment/' + e.target.dataset.wishid,
          data: {},
          method: "GET",
          success: function (res) {
            console.log(res.data.commentsList)
            that.setData({
              chioceFilter: false,
              commentList: res.data.commentsList,
            });
          }
        })
    }
  },
  //确认
  filterButtonClick: function () {
    this.setData({
      chioceFilter: false,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var that = this;
    wx.request({
      url: 'http://localhost:8080/PublicWish/', //请求的URL地址
      method: "GET", //请求方式
      data: {}, //是否有数据传到服务器
      success: function(res) {
        var listData = res.data.publicWishList;
        console.log(listData)
        if (listData == null) {
          var toastText = "返回数据失败" + res.data.errMsg;
          wx.showToast({
            title: toastText,
            icon: "",
            duration: 2000
          });
        } else {
          that.setData({
            list: listData
          })
        }
      }
    })
    //console.log(list)  

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  dianzan:function(e){
    var that=this;
    
    if(that.data.color!="yellow"){
      that.setData({
        color: "yellow",
      })
    }
    else{
      that.setData({
        color:"white"
      })
    }
  },

  shoucang: function (e) {
    var that = this;

    if (that.data.colors != "green") {
      that.setData({
        colors: "green",
      })
    }
    else {
      that.setData({
        colors: "white"
      })
    }
  }
})