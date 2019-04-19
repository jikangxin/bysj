var config = require('../../utils/config.js')
var app = getApp();
Page({
  data: {
    logged: false,
    looo: true,
    gridList: [
      { enName: 'favorite', zhName: '课程' },
      { enName: 'history', zhName: '浏览记录' },
      { enName: 'shake', zhName: '动态' },
      { enName: 'gallery', zhName: '预约' },
      { enName: 'setting', zhName: '设置' }
    ],
    skin: ''
  },
  onLoad: function (cb) {
    var that = this
    wx.setNavigationBarTitle({
      title: wx.getStorageSync('mallName')
    })
    wx.login({
      withCredentials: true,
      success: function (res) {

        console.log(res)
        wx.getUserInfo({
          success: function (res) {
            console.log('bind')
            console.log(res.userInfo)
            that.setData({
              userInfo: res.userInfo,
              logged: true,
              looo: false,
            })

          }
        })
      }
    })
    typeof cb == 'function' && cb()
  },
  bindGetUserInfo: function (e) {
    console.log('bind')
    console.log(e.detail.userInfo)
  },

  onShow: function () {
    var that = this
    wx.getStorage({
      key: 'skin',
      success: function (res) {
        if (res.data == "") {
          that.setData({
            skin: config.skinList[0].imgUrl
          })
        } else {
          that.setData({
            skin: res.data
          })
        }
      }
    })
  },
  onPullDownRefresh: function () {
    this.onLoad(function () {
      wx.stopPullDownRefresh()
    })
  },
  viewGridDetail: function (e) {
    var data = e.currentTarget.dataset
    wx.navigateTo({
      url: "../" + data.url + '/' + data.url
    })
  },
  viewSkin: function () {
    wx.navigateTo({
      url: "../skin/skin"
    })
  }
})