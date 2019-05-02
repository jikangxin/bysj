// client/pages/shake/shake.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dt: [
      {
        id: 1,
        name: '要毕业了',
        nameimg: '../../image/a1.jpg',
        image: '../../image/aa3.jpg',
        zan: 50,
        text: '加油哦，要变得更强,掉收到后奇偶大祭司解耦'
      },
      {
        id: 1,
        name: '要毕业了',
        nameimg: '../../image/a1.jpg',
        image: '../../image/aa3.jpg',
        zan: 50,
        text: '加油哦，要变得更强,掉收到后奇偶大祭司解耦'
      },
      {
        id: 1,
        name: '要毕业了',
        nameimg: '../../image/a1.jpg',
        image: '../../image/aa3.jpg',
        zan: 50,
        text: '加油哦，要变得更强,掉收到后奇偶大祭司解耦'
      },
      {
        id: 1,
        name: '要毕业了',
        nameimg: '../../image/a1.jpg',
        image: '../../image/aa3.jpg',
        zan: 50,
        text: '加油哦，要变得更强,掉收到后奇偶大祭司解耦'
      },
      {
        id: 1,
        name: '要毕业了',
        nameimg: '../../image/a1.jpg',
        image: '../../image/aa3.jpg',
        zan: 50,
        text: '加油哦，要变得更强,掉收到后奇偶大祭司解耦'
      },
      {
        id: 1,
        name: '要毕业了',
        nameimg: '../../image/a1.jpg',
        image: '../../image/aa3.jpg',
        zan: 50,
        text: '加油哦，要变得更强,掉收到后奇偶大祭司解耦'
      },
      {
        id: 1,
        name: '要毕业了',
        nameimg: '../../image/a1.jpg',
        image: '../../image/aa3.jpg',
        zan: 50,
        text: '加油哦，要变得更强,掉收到后奇偶大祭司解耦'
      },
      {
        id: 1,
        name: '要毕业了',
        nameimg: '../../image/a1.jpg',
        image: '../../image/aa3.jpg',
        zan: 50,
        text: '加油哦，要变得更强,掉收到后奇偶大祭司解耦'
      },
    ],
  },
  dtxq: function (e) {
    wx.navigateTo({
      url: "../dtxq/index?id=" + e.currentTarget.id,
    })
    console.log(e.currentTarget.id)
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