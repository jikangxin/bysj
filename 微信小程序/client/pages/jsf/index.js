// client/pages/jsf/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
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
    value:4,
    show: false,
    active: 1,
    sb:[
      {
        id:1,
        img:'../../image/lmj.jpg',
        name:"龙门架",
        sj:'12:00-1:00',
        kx:12
      },
      {
        id: 1,
        img: '../../image/pbj.jpg',
        name: "跑步机",
        sj: '12:00-1:00',
        kx: 12
      },
      {
        id: 1,
        img: '../../image/tyj.jpg',
        name: "椭圆机",
        sj: '12:00-1:00',
        kx: 12
      },
      {
        id: 1,
        img: '../../image/txj.jpg',
        name: "推胸机",
        sj: '12:00-1:00',
        kx: 12
      },
      {
        id: 1,
        img: '../../image/xlj.jpg',
        name: "下拉机",
        sj: '12:00-1:00',
        kx: 12
      },
      {
        id: 1,
        img: '../../image/ywb.jpg',
        name: "仰卧板",
        sj: '12:00-1:00',
        kx: 12
      },
    ],
    array: [
      "09:00-10:00  空闲:20",
      "10:00-11:00  空闲:0",
      "11:00-12:00  空闲:20",
      "12:00-13:00  空闲:20",
      "13:00-14:00  空闲:20",
      "14:00-15:00  空闲:20",
      "15:00-16:00  空闲:20",
      "16:00-17:00  空闲:20",
      "17:00-18:00  空闲:20",
      "18:00-19:00  空闲:20",
      "19:00-20:00  空闲:20",
    ],
    index: 0,
    ists:false,
    ts:[
      "3号机1:00-2:00",
    ]
  },
  onClose() {
    this.setData({ show: false });
  },
  onChange(event) {
    wx.showToast({
      title: `切换到标签 ${event.detail.index + 1}`,
      icon: 'none'
    });
  }, 
  dizhi:function(e){
    wx.navigateTo({
      url: "../map/index",
    })
    console.log(e.currentTarget.id)
  },
  bindPickerChange: function (e) {
    console.log(this.data.array[e.detail.value])
    console.log('picker发送选择改变，携带值为', e.detail.value)
    console.log(this.data.array[e.detail.value].slice(16));
    if (this.data.array[e.detail.value].slice(16)!=0){
      this.setData({
        show: true,
        shijianduan: '您已成功预约了' + this.data.array[e.detail.value].slice(0,11)+'时间段训练'
      })
      wx.request({
        url: 'http://127.0.0.1:8000/index.php/index/yuyue',
        data: {
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
          console.log(res.data)
        },
        fail: function (res) { },
        complete: function (res) { },
      })
    }else{
      this.setData({
        show: true,
        shijianduan: '抱歉该时间已无空闲设备'
      })
    }
    this.setData({
      index: e.detail.value,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    id:options.id
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