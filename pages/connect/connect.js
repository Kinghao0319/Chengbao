// pages/connect/connect.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  tempTap() {
    wx.showToast({
      title: '连接成功',
      icon: 'success',
      duration: 1000,
      success: function () {
        setTimeout(function () {
          wx.switchTab({
            url: '../storyMode/storyMode',
          })
        }, 1000)
      }
    })
    
  }
  ,
  onGetuuid() {
    let that = this;
    if (that.data.isConnected && that.data.isFailed) {
      wx.showLoading({
        title: '获取serviceId',
      })
      console.log("开始获取设备信息");
      wx.getBLEDeviceServices({
        deviceId: that.data.deviceId,
        success(getServicesRes) {
          console.log("getServicesRes", getServicesRes);
          let service = getServicesRes.services[1]
          let serviceId = service.uuid
          wx.showLoading({
            title: '获取characteristicId',
          })
          wx.getBLEDeviceCharacteristics({
            deviceId: that.data.deviceId,
            serviceId: serviceId,
            success(getCharactersRes) {
              console.log("getCharactersRes", getCharactersRes);
              wx.hideLoading();
              let characteristic = getCharactersRes.characteristics[0]
              let characteristicId = characteristic.uuid
              that.setData({
                serviceId: serviceId,
                characteristicId: characteristicId
              })
              console.log('成功获取uuId', that.data.serviceId, that.data.characteristicId);
              wx.notifyBLECharacteristicValueChange({
                state: true,
                deviceId: that.data.deviceId,
                serviceId: serviceId,
                characteristicId: getCharactersRes.characteristics[0].uuid,
                success() {
                  console.log('开始监听特征值')
                  wx.onBLECharacteristicValueChange(function (onNotityChangeRes) {
                    console.log('监听到特征值更新', onNotityChangeRes);
                    let characteristicValue = that.ab2hex(onNotityChangeRes.value);
                    wx.showModal({
                      title: '监听到特征值更新',
                      content: '更新后的特征值(16进制格式):${characteristicValue}',
                      showCancel: false
                    })
                  })
                },
                fail: (res) => {
                  console.warn("监听特征值失败");
                }
              })
            },
            fail: (res) => {
              console.warn("获取特征值信息失败", res);
            },
            complete: (res) => {
              console.log('获取服务信息完成', res);
              wx.hideLoading();
            }
          })
        },
        fail: (res) => {
          console.warn("获取服务信息失败", res);
        },
        complete: () => {
          wx.hideLoading();
        }
      })
    } else {
      wx.showToast({
        title: '请先连接蓝牙',
      })
    }
  }
})