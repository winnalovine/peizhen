//app.js  
App({
    onLaunch: function () {
   
    },
   
    //第一种底部  
    editTabBar: function () {
      //使用getCurrentPages可以获取当前加载中所有的页面对象的一个数组，数组最后一个就是当前页面。
   
      var curPageArr = getCurrentPages();    //获取加载的页面
      var curPage = curPageArr[curPageArr.length - 1];    //获取当前页面的对象
      var pagePath = curPage.route;    //当前页面url
      if (pagePath.indexOf('/') != 0) {
        pagePath = '/' + pagePath;
      }
      
      var tabBar = this.globalData.tabBar;
      for (var i = 0; i < tabBar.list.length; i++) {
        tabBar.list[i].active = false;
        if (tabBar.list[i].pagePath == pagePath) {
          tabBar.list[i].active = true;    //根据页面地址设置当前页面状态    
        }
      }
      curPage.setData({
        tabBar: tabBar
      });
    },
    //第二种底部，原理同上
    editTabBar1: function () {
      var curPageArr = getCurrentPages();
      var curPage = curPageArr[curPageArr.length - 1];
      var pagePath = curPage.route;
      if (pagePath.indexOf('/') != 0) {
        pagePath = '/' + pagePath;
      }
      var tabBar = this.globalData.tabBar1;
      for (var i = 0; i < tabBar.list.length; i++) {
        tabBar.list[i].active = false;
        if (tabBar.list[i].pagePath == pagePath) {
          tabBar.list[i].active = true; 
        }
      }
      curPage.setData({
        tabBar: tabBar
      });
    },
   
    globalData: {
      //第一种底部导航栏显示
      tabBar: {
        "color": "#9E9E9E",
        "selectedColor": "#f00",
        "backgroundColor": "#fff",
        "borderStyle": "#ccc",
        "list": [
          {
            "pagePath": "/pages/index/index",
            "text": "主页",
            "iconPath":"/image/tabbar/un主页_old.png",
            "selectedIconPath":"/image/tabbar/主页_old.png",
            "clas": "menu-item",
            "selectedColor": "#4EDF80",
            active:true
          },
          {
            "pagePath": "/pages/old_me/old_me",
            "text": "任务",
            "iconPath":"/image/tabbar/un任务_old.png",
            "selectedIconPath":"/image/tabbar/任务_old.png",
            "clas": "menu-item",
            "selectedColor": "#4EDF80",
            active:false
          },
         
          {
            "pagePath": "/pages/old_me/old_me",
            "text": "我的",
            "iconPath":"/image/tabbar/un我的_old.png",
           "selectedIconPath":"/image/tabbar/我的_old.png",
            "selectedColor": "#4EDF80",
            "clas": "menu-item",
            active: true
          }
        ],
        "position": "bottom"
      },
      //第二种底部导航栏显示
      tabBar1: {
        "color": "#9E9E9E",
        "selectedColor": "#f00",
        "backgroundColor": "#fff",
        "borderStyle": "#ccc",
        "list": [
          {
            "pagePath": "/pages/logs/logs",
            "text": "首页",
            "iconPath":"/image/查看.png",
            "selectedIconPath":"/image/查看.png",
            "clas": "menu-item1",
          "selectedColor": "#4EDF80",
            active: true
          },
          
          {
            "pagePath": "/pages/cont/index",
            "text": "简历",
            "iconPath": "/image/查看.png",
            "selectedIconPath": "/image/查看.png",
            "selectedColor": "#4EDF80",
            "clas": "menu-item1",
            active: true
          }
          
        ],
        "position": "bottom"
      }
    }
  })  
  