// pages/home/home.js
// import request from '../../utils/request.js'
import {
    getSlides,
    getCategories
} from "../../api/index.js"
Page({

    /**
     * 页面的初始数据
     */
    data: {
        slides: [],
        categories: [],
        background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
        indicatorDots: true,
        vertical: false,
        autoplay: false,
        interval: 2000,
        duration: 500
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getSlides(),
            this.getCategories()
    },
    handleSearchFocus(){
        wx.redirectTo({
          url: '/pages/search/search',
        })
    },
    getSlides() {
        getSlides().then(res => {
            this.setData({
                slides: res.data
            })
        })
    },
    getCategories() {
        getCategories().then(res => {
            this.setData({
                categories: res.data
            })
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        if (this.getTabBar && typeof this.getTabBar === 'function') {
            this.getTabBar().setData({
                active: 0
            })
            // 自定义组件新增 getTabBar 接口，可获取当前页面下的自定义 tabBar 组件实例。
        }
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})