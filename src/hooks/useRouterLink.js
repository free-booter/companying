import Taro from "@tarojs/taro";

export default function useRouterLink(path) {
  return () => {
    Taro.navigateTo({ url: path });
  };
}
