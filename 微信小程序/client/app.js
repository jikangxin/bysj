  //app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')
App({
  globalData: {  
    openid:"",
    nimage:'',
    name:'',
  },
    onLaunch: function () {
      qcloud.setLoginUrl(config.service.loginUrl)
      wx.login({
        key: "userInfo",

        withCredentials: true,
        success: function (res) {

          console.log(res)

          wx.getUserInfo({
            success: function (es) {
              console.log(es)
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
                  that.setData({
                    sz: [] = res.data,
                  })
                  console.log(res.data)
                },

              })
            }
          })

        }
      })
    },
})