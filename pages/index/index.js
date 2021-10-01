// miniprogram/pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  /**
   * 去首页
   */
  goHome() {
    wx.navigateTo({
      url: '/pages/index/index',
    })
  },
  /**
   * 去works
   */
  goWorks() {
    wx.navigateTo({
      url: '/pages/works/works',
    })
  },
  /**
   * 去works
   */
  goAbout() {
    wx.navigateTo({
      url: '/pages/about/about',
    })
  },
   /**
   * 去Rise
   */
  goRise() {
    wx.navigateTo({
      url: '/pages/works/ui/rise/rise',
    })
  },
  /**
   * 去Qmenu
   */
  goQmenu() {
    wx.navigateTo({
      url: '/pages/works/ui/qmenu/qmenu',
    })
  },
  /**
   * 去Kennels
   */
  goKennels() {
    wx.navigateTo({
      url: '/pages/works/graphic/kennels/kennels',
    })
  },
  /**
   * 去Katuobushi
   */
  goKatuobushi() {
    wx.navigateTo({
      url: '/pages/works/ui/katuobushi/katuobushi',
    })
  },
    /**
   * 去Giyamanashi
   */
  goGiyamanashi() {
    wx.navigateTo({
      url: '/pages/works/photograph/giyamanashi/giyamanashi',
    })
  },
  /**
   * 去Qukiyoe
   */
  goQukiyoe() {
    wx.navigateTo({
      url: '/pages/works/illustration/qukiyoe/qukiyoe',
    })
  },
    /**
   * 去Touch
   */
  goTouch() {
    wx.navigateTo({
      url: '/pages/works/graphic/touch/touch',
    })
  },
  /**
  * 去Ice
  */
  goIce() {
    wx.navigateTo({
      url: '/pages/works/illustration/ice/ice',
    })
  },
  /**
  * 去GraphicList
  */
 goGraphicList() {
  wx.navigateTo({
    url: '/pages/works/graphic/graphic_list/graphic_list',
  })
},
  /**
  * 去UiList
  */
 goUiList() {
  wx.navigateTo({
    url: '/pages/works/ui/ui_list/ui_list',
  })
},
  /**
  * 去CodeList
  */
 goCodeList() {
  wx.navigateTo({
    url: '/pages/works/code/code_list/code_list',
  })
},
  /**
  * 去IllList
  */
 goIllList() {
  wx.navigateTo({
    url: '/pages/works/illustration/illustration_list/illustration_list',
  })
},
  /**
  * 去PhotoList
  */
 goPhotoList() {
  wx.navigateTo({
    url: '/pages/works/photograph/photo_list/photo_list',
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