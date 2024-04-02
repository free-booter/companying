export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/index/c-cnp/location/index',
    'pages/index/c-cnp/apply/index',
    'pages/community/index',
    'pages/community/c-cnp/publish/index',
    'pages/community/c-cnp/detail/index',
    'pages/information/index',
    'pages/information/c-cnp/detail/index',
    'pages/user/index',
    'pages/login/index',
    'pages/user/c-cnp/accompany/index',
    'pages/user/c-cnp/address/index',
    'pages/user/c-cnp/address-edit/index',
    'pages/user/c-cnp/person/index',
    'pages/user/c-cnp/person-edit/index',
    'pages/user/c-cnp/order/index',
    'pages/user/c-cnp/publish/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    backgroundColor: '#f7f7f7',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#000000',
    selectedColor: '#6190E8',
    backgroundColor: '#fff',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: 'assets/images/tabbar/home.png',
        selectedIconPath: 'assets/images/tabbar/home-active.png'
      },
      {
        pagePath: 'pages/community/index',
        text: '社区',
        iconPath: 'assets/images/tabbar/community.png',
        selectedIconPath: 'assets/images/tabbar/community-active.png'
      },
      {
        pagePath: 'pages/information/index',
        text: '科普',
        iconPath: 'assets/images/tabbar/science.png',
        selectedIconPath: 'assets/images/tabbar/science-active.png'
      },
      {
        pagePath: 'pages/user/index',
        text: '我的',
        iconPath: 'assets/images/tabbar/user.png',
        selectedIconPath: 'assets/images/tabbar/user-active.png'
      }
    ]
  }
})
