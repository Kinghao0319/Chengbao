// pages/hape/hape.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    start_i: 4,
    start_j: 0,
    end_i: 0,
    end_j: 4,
    crab_i1: 0,
    crab_i2: 2,
    crab_i3: 3,
    crab_i4: 4,
    crab_j1: 0,
    crab_j2: 1,
    crab_j3: 2,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  whoami(e){
    console.log(e.currentTarget)
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
  }

})