// pages/classic/classic.js
// import {HTTP} from '../../util/http.js';
import {ClassicModel} from '../../models/classic.js';
import {LikeModel} from '../../models/like.js';
// 实例化对象
// let http = new HTTP();
let classicModel = new ClassicModel();
let likeModel = new LikeModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classicData: null,
    latest: true,
    first: false
  },

  onLike:function(e){
    console.log(e)
    let behavior = e.detail.behavior;
    likeModel.like(behavior, this.data.classicData.id, this.data.classicData.type)
  },

  onNext:function(){

  },

  onPrevious:function(){

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx:wx.request({
    //   url: 'http://bl.7yue.pro/v1/classic/latest?appkey=keWR6ayobbmsBnkm',
    //   data: '',
    //   header: {},
    //   method: 'GET',
    //   dataType: 'json',
    //   responseType: 'text',
    //   success: (res) => {
    //     console.log(res)
    //   },
    //   fail: function(res) {},
    //   complete: function(res) {},
    // })

    // http.request({
    //   url: 'classic/latest',
    //   success: (res) => {
    //     console.log(res)
    //   }
    // })

    // getLatest 传入一个函数为参数(sCallback) res 作为函数的参数(sCallback(res)) 
    classicModel.getLatest((res) => {
      this.setData({
        classicData: res
      })
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