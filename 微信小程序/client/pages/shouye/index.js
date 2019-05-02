// client/pages/shouye/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    // you:true,
    // meiyou:false,
    meiyou:true,
    you:false,
    sr:[
      {
        id:1,
        image:'../../image/11a.jpg',
        t:'马甲线养成'
      },
      {
        id: 2,
        image: '../../image/11b.jpg',
        t: '大腿塑性'
      },
      {
        id: 3,
        image: '../../image/aa3.jpg',
        t: 'dasdas'
      },
      {
        id: 4,
        image: '../../image/aa3.jpg',
        t: 'dasdas'
      },
    ],
    zs: [
      {
        id: 1,
        image: '../../image/12a.jpg',
        t: '退役后的奥运冠军成了健身达人？'
      },
      {
        id: 2,
        image: '../../image/12c.jpg',
        t: '不花钱也能健身，8个徒手动作练遍全身'
      },
      {
        id: 3,
        image: '../../image/aa3.jpg',
        t: 'dasdas'
      },
      {
        id: 4,
        image: '../../image/aa3.jpg',
        t: 'dasdas'
      },
    ]
  },
  course: function (e) {
    console.log(e.currentTarget.id)
    wx.navigateTo({
      url: '../course/index?cid=' + e.currentTarget.id,
    })
  },
  article:function(e){
    console.log(e.currentTarget.id)
    wx.navigateTo({
      url: '../article/index?aid=' + e.currentTarget.id,
    })
  },
  aass:function(e){
    console.log(11)
    // this.setData({
    //   meiyou:false,
    //   you:true,
    // })
    wx.reLaunch({
      url: '../index/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that=this
      wx.request({
        url: 'http://127.0.0.1:8000/index.php/index/a',
        data:{
          id: 8,
          data: 11,
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
        fail: function (res) { },
        complete: function (res) { },
      })
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

  }
})