// client/pages/course/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    course_a:[
      {
        image:"../../image/aa3.jpg",
        t1:"HIIt全身脂肪燃动-零基础",
        t2:"HIIT训练方式是非常有效的减脂方式，注意跟上每个节奏，准确的把握动作"
      }
    ],
    course_b:[
      '10个',"10分钟","67千卡"
    ],
    image:[
      "../../image/a1.jpg",
      "../../image/a2.jpg",
      "../../image/a3.jpg",
      "../../image/a4.jpg",
      "../../image/a5.jpg",
    ],
    sr: [
      {
        id: 1,
        video: '../../video/2.mp4',
        t: 'dasdas'
      },
      {
        id: 2,
        video: '../../video/2.mp4',
        t: 'dasdas'
      },
      {
        id: 3,
        video: '../../video/2.mp4',
        t: 'dasdas'
      },
      {
        id: 4,
        video: '../../video/2.mp4',
        t: 'dasdas'
      },
    ],
    pl: [
      {
        id: 1,
        name: "你大爷",
        nameimg: "../../image/a1.jpg",
        time: "2019-4-18 12:15",
        zan: 13,
        text: "好棒的话趣味活动前后地区为后代请我i和地区我i切记后期黑哦而家穷忘记哦"
      },
      {
        id: 2,
        name: "你大爷",
        nameimg: "../../image/a1.jpg",
        time: "2019-4-18 12:15",
        zan: 13,
        text: "好棒的话趣味活动前后地区为后代请我i和地区我i切记后期黑哦而家穷忘记哦"
      }
    ]
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    wx.request({
      url: '',
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
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