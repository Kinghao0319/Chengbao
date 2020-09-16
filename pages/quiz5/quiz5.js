// pages/hape/hape.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    start_i: 0,
    start_j: 7,
    end_i: 7,
    end_j: 7,
    crab_i1: 4,
    crab_i2: 5,
    crab_i3: 6,
    crab_i4: 7,
    crab_j: 0,
    shark_i: 3,
    shark_j1: 3,
    shark_j2: 4,
    shark_j3: 5,
    shark_j4: 6,
    shark_j5: 7,
    wayPoint_i1: 1,
    wayPoint_j1: 0,
    wayPoint_i2: 4,
    wayPoint_j2: 6,
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