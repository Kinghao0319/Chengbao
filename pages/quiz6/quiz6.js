// pages/hape/hape.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    start_i: 0,
    start_j: 0,
    end_i: 8,
    end_j: 8,
    wayPoint_i1: 6,
    wayPoint_j1: 6,
    wayPoint_i2: 0,
    wayPoint_j2: 5,
    wayPoint_i3: 4,
    wayPoint_j3: 0,
    shark_i1: 0,
    shark_i2: 0,
    shark_i3: 0,
    shark_i4: 1,
    shark_i5: 2,
    shark_j1: 6,
    shark_j2: 7,
    shark_j3: 8,
    shark_j4: 8,
    shark_j5: 8,
    crab_i: 5,
    crab_j1: 0,
    crab_j2: 1,
    crab_j3: 2,
    crab_j4: 3,
    crab_j5: 4,
    crab_j6: 5,
    crab_j7: 6,
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