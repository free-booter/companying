import { View, Text, Image, Swiper, SwiperItem } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { AtSearchBar, AtGrid } from "taro-ui";
import { useState } from "react";
import { useSelector } from "react-redux";

import NavigationNavBar from "@/components/navigation-navBar";
import "./index.scss";

import MapIcon from "../../assets/images/common/map.png";
import useSystemInfo from "../../hooks/useSystemInfo";
import useGetFile from "../../hooks/useGetFile";
import useRouterLink from "../../hooks/useRouterLink";

export default function Index() {
  // 定位
  const location = useSelector((state) => state.home.location);
  const { navBarHeight } = useSystemInfo();
  // 搜索框
  const [searchKeywords, setSearchKeywords] = useState("");
  const [searchFocus, setSearchFocus] = useState(false);
  const handleSearchKeyWords = (e) => {
    const value = e.trim();
    setSearchKeywords(value);
  };
  const handleSearchBlur = () => {
    setSearchFocus(false);
    searchKeywords && setSearchKeywords("");
  };

  const handleServer = (item, index) => {
    if (!index) {
      Taro.makePhoneCall({
        phoneNumber: "1234567890",
      });
    } else {
      Taro.navigateTo({
        url: `/pages/index/c-cnp/apply/index`,
        success: (res) => {
          if (process.env.TARO_ENV === "weapp") {
            // 通过eventChannel向被打开页面传送数据---只兼容微信小程序端
            res.eventChannel.emit("acceptDataFromIndexPage", {
              ...item,
              index,
            });
          }
        },
      });
    }
    console.log(item, index);
  };

  const useRenderSwiper = () => {
    return (
      <Swiper
        className='swiper-container'
        indicatorColor='#999'
        indicatorActiveColor='#6190E8'
        circular
        indicatorDots
        autoplay
      >
        <SwiperItem>
          <Image
            className='banner_img'
            src={useGetFile("service_cover.jpg")}
          ></Image>
        </SwiperItem>
        <SwiperItem>
          <Image
            className='banner_img'
            src={useGetFile("service_cover2.jpg")}
          ></Image>
        </SwiperItem>
      </Swiper>
    );
  };

  return (
    <>
      <View className='navbar-box'>
        <NavigationNavBar
          leftChild={
            !searchFocus && (
              <View
                className='navbar_left'
                onClick={useRouterLink("/pages/index/c-cnp/location/index")}
              >
                <Image className='map_icon' src={MapIcon} />
                <Text>{location}</Text>
                <View className='at-icon at-icon-chevron-right'></View>
              </View>
            )
          }
          centerChild={
            <View className='navbar_center'>
              <AtSearchBar
                value={searchKeywords}
                placeholder='找医院'
                onFocus={() => setSearchFocus(true)}
                onBlur={handleSearchBlur}
                onChange={handleSearchKeyWords}
              />
            </View>
          }
        />
      </View>
      <View
        className='home-page comm_page'
        style={{ paddingTop: `${navBarHeight}px` }}
      >
        <View className='page-banner'>{useRenderSwiper()}</View>
        <View className='page-menu'>
          <AtGrid
            mode='rect'
            hasBorder={false}
            onClick={handleServer}
            data={[
              {
                image: useGetFile("reservation_icon.png"),
                value: "诊前预约",
              },
              {
                image: useGetFile("send_icon.png"),
                value: "送取结果",
              },
              {
                image: useGetFile("agency_icon.png"),
                value: "代办问诊",
              },
              {
                image: useGetFile("pills_icon.png"),
                value: "代办买药",
              },
              {
                image: useGetFile("whole_icon.png"),
                value: "全程陪诊",
              },
              {
                image: useGetFile("half_icon.png"),
                value: "半天陪诊",
              },
            ]}
          />
        </View>
        <View className='page-list'>
          {new Array(10).fill(0).map((item, index) => {
            return (
              <View className='list-item' key={index}>
                {/* <Image className='item-cover' src='' /> */}
                <View className='item-cover'></View>
                <View className='list-item__content'>
                  <View className='list-item__content__title'>医院名称</View>
                  <View className='list-item__content__tags'>
                    <Text className='comm_tag'>综合医院</Text>
                    <Text className='comm_tag'>三甲医院</Text>
                    <Text className='comm_tag'>医保定点</Text>
                    <Text className='comm_tag'>公立医院</Text>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </>
  );
}
