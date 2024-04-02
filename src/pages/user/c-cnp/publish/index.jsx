import { View, Text, Image, RichText, } from "@tarojs/components";
import Taro from "@tarojs/taro";
import useGetFile from "@/hooks/useGetFile";

import "./index.scss";

export default function Index() {

  const handleToDetail = (index) => {
    Taro.navigateTo({
      url: `/pages/community/c-cnp/detail/index?id=${index}`,
    });
  }

  return (
    <View className='publish-page comm_page'>
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
      </View>
    </View>
  );
}
