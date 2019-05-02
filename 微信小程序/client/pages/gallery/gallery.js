Page({
  data: {
    yuyue: [
      {
        id: 1,
        image: '../../image/js1.jpg',
        name: "帕菲克健身私教工作室",
        juli: 2.5,
        value: 4.5,
        time: "17:00-18:00",
        kx: 56
      },
      {
        id: 1,
        image: '../../image/js2.jpg',
        name: "亚太游泳馆",
        juli: 3.5,
        value: 3,
        time: "18:00-19:00",
        kx: 23
      },
      {
        id: 1,
        image: '../../image/sj3.jpg',
        name: "哆来健身工作室",
        juli: 1.6,
        value: 5,
        time: "20:00-21:00",
        kx: 134
      },
      {
        id: 1,
        image: '../../image/sj4.jpg',
        name: "HELIALLSTAR全明星健身",
        juli: 4.6,
        time: "21:00-22:00",
        value: 4,
        kx: 112
      },
    ],

  },
  jianshen: function (e) {
    wx.navigateTo({
      url: "../jsf/index?id=" + e.currentTarget.id,
    })
    console.log(e.currentTarget.id)
  },
  onLoad: function (options) {
   
  },
 
})