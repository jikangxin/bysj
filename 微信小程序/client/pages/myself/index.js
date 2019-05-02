var config = require('../../utils/config.js')
var app = getApp();
Page({
  data: {
    logged: false,
    looo: true,
    gridList: [
      { enName: 'favorite', zhName: '课程' },
      { enName: 'shake', zhName: '动态' },
      { enName: 'gallery', zhName: '预约' },
    ],
    skin: ''
  },
  onLoad: function (cb) {
    var that = this
    
    wx.setNavigationBarTitle({
      title: wx.getStorageSync('mallName')
    })
    wx.login({
      key:"userInfo",

      withCredentials: true,
      success: function (res) {

        console.log(res)
     
        wx.getUserInfo({
          success: function (es) {
            app.globalData.nimage = es.userInfo.avatarUrl,
            app.globalData.name = es.userInfo.nickName,

              console.log(app.globalData.name)
            that.setData({
              userInfo: es.userInfo,
              logged: true,
              looo: false,
            })
            wx.request({
              url: 'http://127.0.0.1:8000/index.php/index/login',
              data: {
                code: res.code,
                nameimg: es.userInfo.avatarUrl,
                name: es.userInfo.nickName,
                sex: es.userInfo.gender
              },
              header: {
                "Content-Type": "application/x-www-form-urlencoded"
              },
              method: 'POST',
              dataType: 'json',
              responseType: 'text',
              success: function (res) {
                app.globalData.openid = res.data,
                console.log(res.data)
              },

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