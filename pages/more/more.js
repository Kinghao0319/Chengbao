//logs.js
var util = require('../../utils/util.js')
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: ''
    })
  },
  onLoad: function () {
    let that = this;
    let userInfo = wx.getStorageSync('userInfo');
    if (userInfo) {
      that.setData({
        hasUserInfo:true,
        userInfo:userInfo
      })
    }else{
      that.setData({
        hasUserInfo:false
      })
    }
  },
  onGetUserInfo: function (e) {
    this.setData({
      hasUserInfo: true,
      userInfo: JSON.parse(e.detail.rawData)
    })
    wx.setStorageSync('userInfo', this.data.userInfo);
  },
})