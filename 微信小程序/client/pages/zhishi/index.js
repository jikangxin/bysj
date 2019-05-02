// client/pages/zhishi/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dj1:'rgb(233, 85, 85)',
    dj2:'rgb(233, 218, 218)',
    dj3:'rgb(233, 218, 218)',
    dj4:'rgb(233, 218, 218)',
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
        name:'要毕业了',
        nameimg:'../../image/a1.jpg',
        image:'../../image/aa3.jpg',
        zan:50,
        text:'加油哦，要变得更强,掉收到后奇偶大祭司解耦'
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
    yuyue:[
      {
        id:1,
        image: '../../image/js1.jpg',
        name:"帕菲克健身私教工作室",
        juli:2.5,
        value: 4.5,
        dizhi:"河北科技大学",
        kx:56
      },
      {
        id: 1,
        image: '../../image/js2.jpg',
        name: "亚太游泳馆",
        juli: 3.5,
        value: 3,
        dizhi: "万达广场南",
        kx: 23
      },
      {
        id: 1,
        image: '../../image/sj3.jpg',
        name: "哆来健身工作室",
        juli: 1.6,
        value: 5,
        dizhi: "众美凤凰城",
        kx: 134
      },
      {
        id: 1,
        image: '../../image/sj4.jpg',
        name: "HELIALLSTAR全明星健身",
        juli: 4.6,
        dizhi: "谈固",
        value: 4,
        kx: 112
      },
      {
        id: 1,
        image: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        name: "健身私教工作室",
        juli: 2.5,
        value: 3,
        dizhi: "万达广场南",
        kx: 26
      },
    ],
    
  },
  dainji1:function(e){
    console.log(e.currentTarget.id)
    if (e.currentTarget.id==1){
      this.setData({
        dj1: 'rgb(233, 85, 85)',
        dj2: 'rgb(233, 218, 218)',
        dj3: 'rgb(233, 218, 218)',
        dj4: 'rgb(233, 218, 218)',
      });
      
    }
    if (e.currentTarget.id == 2) {
      this.setData({
        dj2: 'rgb(233, 85, 85)',
        dj1: 'rgb(233, 218, 218)',
        dj3: 'rgb(233, 218, 218)',
        dj4: 'rgb(233, 218, 218)',
      });
    }
    if (e.currentTarget.id == 3) {
      this.setData({
        dj3: 'rgb(233, 85, 85)',
        dj2: 'rgb(233, 218, 218)',
        dj1: 'rgb(233, 218, 218)',
        dj4: 'rgb(233, 218, 218)',
      });
    }
    if (e.currentTarget.id == 4) {
      this.setData({
        dj4: 'rgb(233, 85, 85)',
        dj2: 'rgb(233, 218, 218)',
        dj3: 'rgb(233, 218, 218)',
        dj1: 'rgb(233, 218, 218)',
      });
    }
    console.log(this.data.dj1)
    console.log(this.data.dj2)
    console.log(this.data.dj3)
    console.log(this.data.dj4)
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
  dtxq:function(e){
    wx.navigateTo({
      url: "../dtxq/index?id=" + e.currentTarget.id,
    })
    console.log(e.currentTarget.id)
  },
  tianjia:function(e){
    wx.navigateTo({
      url: "../add/index",
    })
    console.log(e)
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