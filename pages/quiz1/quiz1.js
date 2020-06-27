// pages/hape/hape.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    start_i: 2,
    start_j: 2,
    end_i: 0,
    end_j: 0,
    wayPoint_i: -1,
    wayPoint_j: -1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  goRecord1(){
    wx.navigateTo({
      url: "../record/record",
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  goRecord2(){
    wx.navigateTo({
      url: "../record two people/record",
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  goSuccess() {
    wx.navigateTo({
      url: "../Success",
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  goFail() {
    wx.navigateTo({
      url: "../Fail",
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  }

})