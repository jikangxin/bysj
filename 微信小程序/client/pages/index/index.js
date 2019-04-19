
Page({
  data: {
    active: 1,
    tj:[
      {
        id:1,
        image:"../../image/11a.jpg",
        t1:'马甲线养成',
        t2:'142',
        t3:'k1零基础  5分钟',
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
    ts:[
      {
        id:1,
        image:'../../image/t1.webp',
        t:'四足俯卧撑'
      },
      {
        id: 2,
        image: '../../image/t1.webp',
        t: '四足俯卧撑'
      },
      {
        id: 3,
        image: '../../image/t1.webp',
        t: '四足俯卧撑'
      },
      {
        id: 4,
        image: '../../image/t1.webp',
        t: '四足俯卧撑'
      },
      {
        id: 5,
        image: '../../image/t1.webp',
        t: '四足俯卧撑'
      },
      {
        id: 6,
        image: '../../image/t1.webp',
        t: '四足俯卧撑'
      },
      {
        id: 7,
        image: '../../image/t1.webp',
        t: '四足俯卧撑'
      },
      {
        id: 8,
        image: '../../image/t1.webp',
        t: '四足俯卧撑'
      },
      {
        id: 6,
        image: '../../image/t1.webp',
        t: '四足俯卧撑'
      },
      {
        id: 7,
        image: '../../image/t1.webp',
        t: '四足俯卧撑'
      },
      {
        id: 8,
        image: '../../image/t1.webp',
        t: '四足俯卧撑'
      },
    ]
  },
  course:function(e){
    console.log(e.currentTarget.id)
    wx.navigateTo({
      url: '../course/index?cid=' + e.currentTarget.id,
    })
  },
  onChange(event) {
    // wx.showToast({
    //   // title: `切换到标签 ${event.detail.index + 1}`,
    //   icon: 'none'
    // });
    
  }
   
})
