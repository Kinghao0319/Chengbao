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
    hours: '0' + 0,   // 时
        minute: '0' + 0,   // 分
        second: '0' + 0,    // 秒
        interval:" ",
    hours2: '0' + 0,   // 时
    minute2: '0' + 0,   // 分
    second2: '0' + 0    // 秒
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
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
  },

  startTap:function () {
    var that = this;
    that.init(that);          //这步很重要，没有这步，重复点击会出现多个定时器
    var second = that.data.second;
    var minute = that.data.minute;
    var hours = that.data.hours; 
    console.log("计时开始")
    var interval = setInterval(function () {
      second++
      if (second >= 60) {
          second = 0  //  大于等于60秒归零
          minute++
          if (minute >= 60) {
              minute = 0  //  大于等于60分归零
              hours++
              if (hours < 10) {
                  // 少于10补零
                  that.setData({
                      hours: '0' + hours
                  })
              } else {
                  that.setData({
                      hours: hours
                  })
              }
          }
          if (minute < 10) {
              // 少于10补零
              that.setData({
                  minute: '0' + minute
              })
          } else {
              that.setData({
                  minute: minute
              })
          }
      }
      if (second < 10) {
          // 少于10补零
          that.setData({
              second: '0' + second
          })
      } else {
          that.setData({
              second: second
          })
      }
          
    },1000)
    
    that.setData({
       interval:interval
    })
  },
  
  /**
   * 暂停倒计时
  */
  stopTap:function () {
    var that = this;
    console.log("倒计时暂停")
    that.clearTimeInterval(that)
  },
  
  /**
   * 重新倒计时
  */
  restartTap:function () {
    var that = this;
    that.init(that);
    console.log("倒计时重新开始")
    that.startTap()
  },
  
  /**
   * 初始化数据
  */
  init: function (that) {
      var time = 0;
    var interval = ""
    that.clearTimeInterval(that)
    that.setData({
          time: time,
       interval: interval,
      })
  },
  
  /**
   * 清除interval
  * @param that
  */
  clearTimeInterval: function (that) {
    var interval = that.data.interval;
    clearInterval(interval)
  },
  
  /**
   * 生命周期函数--监听页面卸载
   * 退出本页面时停止计时器
  */
  onUnload:function () {
      var that = this;
      that.clearTimeInterval(that)
  },
  
  /**
   * 生命周期函数--监听页面隐藏
   * 在后台运行时停止计时器
  */
  onHide:function () {
      var that = this;
      that.clearTimeInterval(that)
  },

  onLoad: function (options) {
    // 调用函数
    this.setInterval()
}, 

// 计时器
setInterval: function () {
    const that = this
    var second2 = that.data.second2
    var minute2 = that.data.minute2
    var hours2 = that.data.hours2       
    setInterval(function () {  // 设置定时器
        second2++
        if (second2 >= 60) {
            second2 = 0  //  大于等于60秒归零
            minute2++
            if (minute2 >= 60) {
                minute2 = 0  //  大于等于60分归零
                hours2++
                if (hours2 < 10) {
                    // 少于10补零
                    that.setData({
                        hours2: '0' + hours2
                    })
                } else {
                    that.setData({
                        hours2: hours2
                    })
                }
            }
            if (minute2 < 10) {
                // 少于10补零
                that.setData({
                    minute2: '0' + minute2
                })
            } else {
                that.setData({
                    minute2: minute2
                })
            }
        }
        if (second2 < 10) {
            // 少于10补零
            that.setData({
                second2: '0' + second2
            })
        } else {
            that.setData({
                second2: second2
            })
        }
    }, 1000)
},
  

})