// client/pages/zhishi/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 1,
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    circular: true,
    mrht:[
      {
        id:1,
        image:'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        t:'#你吃对了吗#'
      },
      {
        id: 2,
        image: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        t: '#你练对了吗#'
      },
    ],
    jszs:[
      {
        id: 1,
        image: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        t: '#你吃对了吗#'
      },
      {
        id: 2,
        image: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        t: '#你练对了吗#'
      },
      {
        id: 1,
        image: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        t: '#你吃对了吗#'
      },
      {
        id: 2,
        image: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        t: '#你练对了吗#'
      },
    ],
    dt:[
      {
        id:1,
        name:'',
        nameimg:'',
        image:'',
        zan:5,
        text:''
      },
      {
        id: 1,
        name: '',
        nameimg: '',
        image: '',
        zan: 5,
        text: ''
      },
      {
        id: 1,
        name: '',
        nameimg: '',
        image: '',
        zan: 5,
        text: ''
      },
      {
        id: 1,
        name: '',
        nameimg: '',
        image: '',
        zan: 5,
        text: ''
      },
    ],
    yuyue:[
      {
        id:1,
        image: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        name:"健身私教工作室",
        juli:2.5,
        dizhi:"万达广场南",
        kx:26
      },
      {
        id: 1,
        image: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        name: "健身私教工作室",
        juli: 2.5,
        dizhi: "万达广场南",
        kx: 26
      },
      {
        id: 1,
        image: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        name: "健身私教工作室",
        juli: 2.5,
        dizhi: "万达广场南",
        kx: 26
      },
      {
        id: 1,
        image: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        name: "健身私教工作室",
        juli: 2.5,
        dizhi: "万达广场南",
        kx: 26
      },
      {
        id: 1,
        image: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        name: "健身私教工作室",
        juli: 2.5,
        dizhi: "万达广场南",
        kx: 26
      },
    ],
    value:3,
  },
  onChange(event) {
    wx.showToast({
      title: `切换到标签 ${event.detail.index + 1}`,
      icon: 'none'
    });
  },
  onChangexinxin(event) {
    this.setData({
      value: event.detail
    });
  },
  jianshen:function(e){
    wx.navigateTo({
      url: "../jsf/index?id=" + e.currentTarget.id,
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