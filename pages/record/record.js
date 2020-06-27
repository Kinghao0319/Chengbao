// pages/hape/hape.js
var quizJudgement = require('../../utils/quizJudgement.js');
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    start_i: 0,
    start_j: 0,
    end_i: 2,
    end_j: 2,
    wayPoint_i: -1,
    wayPoint_j: -1,
    len: 0,
    path: [],
    right: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var len = app.globalData.ans.length-4
    this.setData({
      len: len
    })
    quizJudgement.carMove()
    app.globalData.ans = []
    this.setData({
      path: app.globalData.path
    })
    this.setData({
      path: app.globalData.path
    })
    var pathlen = app.globalData.carPath.length
    console.log(app.globalData.carPath[pathlen - 1].x + " " + app.globalData.carPath[pathlen - 1].y)
    console.log(this.data.end_i + " " + this.data.end_j)
    if (app.globalData.carPath[pathlen - 1].x == this.data.end_i && app.globalData.carPath[pathlen - 1].y == this.data.end_j){
      this.setData({
        right: true
      })
      console.log("正确")
    }
    else{
      this.setData({
        right: false
      })
      console.log("错误")
    }
    app.globalData.carPath = [{ x: 0, y: 0 }]
    app.globalData.carDirection = 0
    app.globalData.carPosition = [{ x: 0, y: 0 }]
  },

  aa() {
    wx.navigateTo({
      url: "../Modes/haiyangMode/haiyangMode",
    })
  },

  dd(){
    wx.switchTab({
      url: "../storyMode/storyMode",
    })
  }


})