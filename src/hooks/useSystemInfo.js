import Taro from "@tarojs/taro";

export default function useSystemInfo() {
  // 实现一个获取自定义导航栏高度的函数

  const { statusBarHeight, screenWidth } = Taro.getSystemInfoSync();
  const { height, top, left, right, width } = Taro.getMenuButtonBoundingClientRect();
  const navBarHeight =
    (top - statusBarHeight) * 2 + height + statusBarHeight; // 导航栏高度
  const menuBottom = top - statusBarHeight; // 胶囊距底部间距（顶部间距也是这个）
  const menuRectWidth = screenWidth - left; // 胶囊宽度（包括距离屏幕右侧的距离）
  const menuRight = screenWidth - right; // 胶囊距右侧间距
  const menuTop = top; // 胶囊距顶部间距
  const navBarRight = width - menuRight; // 导航栏宽度
  return {
    statusBarHeight,
    navBarHeight,
    navBarRight,
    menuBottom,
    menuRectWidth,
    menuRight,
    menuTop
  }
}
