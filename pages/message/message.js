// pages/message/message.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

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
                active: 1
            })
            // 自定义组件新增 getTabBar 接口，可获取当前页面下的自定义 tabBar 组件实例。
        }
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },
    onClose(event) {
        const {
            position,
            instance
        } = event.detail;
        switch (position) {
            case 'left':
            case 'cell':
                instance.close();
                break;
            case 'right':
                Dialog.confirm({
                    message: '确定删除吗？',
                }).then(() => {
                    instance.close();
                });
                break;
        }
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