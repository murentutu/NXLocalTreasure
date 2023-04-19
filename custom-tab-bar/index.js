// custom-tab-bar/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        active: 0,
        list: [
            {
              "pagePath": "pages/home/home",
              "text": "首页",
              "iconPath": "/tabs/home.png",
              "selectedIconPath": "/tabs/home-active.png"
              },
              {
                "pagePath": "pages/message/message",
                "text": "消息",
                "iconPath": "/tabs/message.png",
                "selectedIconPath": "/tabs/message-active.png"
              },
              {
                  "pagePath": "pages/profile/profile",
                  "text": "个人信息",
                  "iconPath": "/tabs/profile.png",
                  "selectedIconPath": "/tabs/profile-active.png"
              }
            ]
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onChange(event){
            // this.setData({
            //     active: event.detail
            // });
            wx.switchTab({
                url: '/'+this.data.list[event.detail].pagePath
              })
        }
       
    }
})
