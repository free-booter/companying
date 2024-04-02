import { View, Text, Image, RichText, } from "@tarojs/components";
import { AtFab } from "taro-ui";
import Taro from "@tarojs/taro";
import useGetFile from "@/hooks/useGetFile";

import "./index.scss";

export default function Index() {

  const handlePublish = () => {
    Taro.navigateTo({
      url: "/pages/community/c-cnp/publish/index",
    });
  }

  const handleToDetail = (index) => {
    Taro.navigateTo({
      url: `/pages/community/c-cnp/detail/index?id=${index}`,
    });
  }

  return (
    <View className='community-page comm_page'>
      {/* 发布 */}
      {/* <View className='publish-box'>
        <View className='at-icon at-icon-edit'></View>
        <Text>发布</Text>
      </View> */}
      {/* 内容 */}
      <View className='page-content'>
        <View className='list-box'>
          {new Array(20).fill(0).map((item, index) => {
            return (
              <View onClick={() => handleToDetail(index)} className='list-item' key={index}>
                <View className='item-top'>
                  <Image
                    className='avatar'
                    src={useGetFile("default-avatar.jpg")}
                  ></Image>
                  <View className='name'>昵称</View>
                </View>
                <View className='item-content'>
                  <RichText nodes='<h1>66666</h1>'></RichText>
                </View>
                <View className='item-bottom'>
                  <View className='comment bottom-box'>
                    <View className='at-icon at-icon-message'></View>
                    <Text>6</Text>
                  </View>
                  <View className='star bottom-box'>
                    <View className='at-icon at-icon-star'></View>
                    <Text>6</Text>
                  </View>
                  <View className='like bottom-box'>
                    <View className='at-icon at-icon-heart'></View>
                    <Text>6</Text>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
        <AtFab onClick={handlePublish}>
          <Text className='at-fab__icon at-icon at-icon-edit'></Text>
        </AtFab>
      </View>
    </View>
  );
}
