  //app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')

App({
    onLaunch: function () {
        qcloud.setLoginUrl(config.service.loginUrl)
    },
  toLogin: function () {
             // 前往授权登录界面
            wx.navigateTo({
               url: '/pages/myself/index',
           })
    
  },
       ready: function() {
             return Promise((resolve, reject) => {
                   const userkey = wx.getStorageSync('userkey')
                   const userId = wx.getStorageSync('userId')
                   const sessionData = wx.getStorageSync('sessionData')
                   // 检查用户是否具有登陆态
                  if (!userkey || !userId || !sessionData) {
                        // 如果未登录就前往登录界面
                        this.toLogin()
        
      } else {
                        // 如果有就只要更改一下Promise，以继续执行后续操作
                        resolve()
        
      }
      
    })
    
  }
})