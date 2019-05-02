// client/pages/favorite/favorite.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tj: [
      {
        id: 1,
        image: "../../image/11a.jpg",
        t1: '马甲线养成',
        t2: '142',
        t3: 'k1零基础  5分钟',
      },
      {
        id: 2,
        image: "../../image/11b.jpg",
        t1: '大腿塑性',
        t2: '432',
        t3: 'k2初学  15分钟',
      },
      {
        id: 3,
        image: "../../image/11c.jpg",
        t1: '腹肌撕裂者',
        t2: '1523',
        t3: 'k2初学 20分钟',
      },
      {
        id: 4,
        image: "../../image/11d.jpg",
        t1: '手臂塑性',
        t2: '14313',
        t3: 'k2初学  25分钟',
      },
      {
        id: 5,
        image: "../../image/11e.jpg",
        t1: '胸背塑性',
        t2: '1324',
        t3: 'k2初学 15分钟',
      },
    ],
  },
  course: function (e) {
    console.log(e.currentTarget.id)
    wx.navigateTo({
      url: '../course/index?cid=' + e.currentTarget.id,
    })
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

  }
})