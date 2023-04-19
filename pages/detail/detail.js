// pages/detail/detail.js
import {
    getShopsById
} from "../../api/index.js"
Page({

    /**
     * 页面的初始数据
     */
    data: {
        id: 0,
        detail: {},
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.setData({
            id: Number(options.id)
            //小技巧：Number()将String类型转为Number类型
        })
        this.getShopsById()
    },
    getShopsById() {
        getShopsById(this.data.id).then(res => {
            this.setData({
               detail: res.data
            })
            console.log(res.data)
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