// pages/info/info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:'abc'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  clickMe:function(){
    this.setData({
      msg:'Hello'
      })
  }

})