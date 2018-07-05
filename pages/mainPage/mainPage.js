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
})