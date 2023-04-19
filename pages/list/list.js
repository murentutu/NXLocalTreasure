// pages/list/list.js
import {
    getCategoriesById,
    getShops
} from "../../api/index.js"
Page({

    /**
     * 页面的初始数据
     */
    data: {
        id: 0,
        page: 0,
        limit: 20,
        shops: [],
        hasMore: true
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        // console.log(typeof(options.id))
        this.setData({
            id: Number(options.id)
            //小技巧：Number()将String类型转为Number类型
        })
        this.getCategoriesById(),
        this.getShops()
    },
    makePhoneCall(e) {
        // 使用微信打电话组件实现点击电话号码自动拨号的功能
        wx.makePhoneCall({
            phoneNumber: e.target.dataset.phone
        })
    },
    getCategoriesById() {
        getCategoriesById(this.data.id).then(res => {
            wx.setNavigationBarTitle({
                title: res.data.name,
            })
        })
    },
    getShops() {
        if (this.data.hasMore !== true) return;
        ++this.data.page
        getShops({
            id: this.data.id,
            page: this.data.page,
            limit: this.data.limit
        }).then(res => {
            if (res.data.length > 0) {
                this.setData({
                    shops: [...this.data.shops, ...res.data]
                })
            } else {
                this.setData({
                    hasMore: false
                })
            }
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
        this.setData({
            hasMore: true,
            shops: [],
            page: Math.floor(Math.random() * 3)
        })
        this.getShops()
        wx.stopPullDownRefresh() //关闭下拉的黑窗口
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {
        this.getShops()
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})