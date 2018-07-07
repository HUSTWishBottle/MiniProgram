Page({
  data: {
    items: [
      { name: true, value: '所有人' },
      { name: false, value: '仅自己', checked: 'true' },
    ]
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  tjxy:function(){
    wx.switchTab({
      url: '../tree/tree',
    })
    wx.showToast({
      title: '保存成功！',
      icon: "",
      duration: 2000
    });
  },
  frmAddwish:function(e){
    console.log(e);
    var frmData = e.detail.value;
   console.log(frmData);
   wx.request({
     url: 'http://localhost:8080/weChatAddWish',
     method: "POST",
     data: JSON.stringify(frmData),//{"email":"Kobe","password":"12345678"}
     header: { "Content-Type": "application/json" },
     success: function (res) {
       wx.showToast({
         title: '保存成功！',
         icon: "",
         duration: 5000,
       });
       wx.switchTab({
         url: '../tree/tree',
       })
     }
   })
  }
})