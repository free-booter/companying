import { View } from "@tarojs/components";
import "./index.scss";
import useSystemInfo from "../../hooks/useSystemInfo";

function NavigationNavBar(props) {
  const { navBarHeight, navBarRight, menuRight, menuTop } = useSystemInfo();
  return (
    <View
      className='navbar-page'
      style={{
        height: `${navBarHeight}px`,
        paddingRight: `${navBarRight}px`,
        paddingLeft: `${menuRight}px`,
        paddingTop: `${menuTop}px`,
      }}
    >
      <View className='navbar-page__content'>
        <View className='navbar-page__content__back'>{props.leftChild}</View>
        <View className='navbar-page__content__box'>
          {props.centerChild || props.title}
        </View>
      </View>
    </View>
  );
}

export default NavigationNavBar;
