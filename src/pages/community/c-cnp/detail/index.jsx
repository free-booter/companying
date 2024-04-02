import { View, Text, RichText, Input } from "@tarojs/components";
import { AtAvatar } from "taro-ui";
import { useLoad } from "@tarojs/taro";
import "./index.scss";

export default function Detail() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View className='detail-page'>
      <View className='user-info'>
        <AtAvatar
          size='small'
          className='avatar'
          circle
          image='https://jdc.jd.com/img/200'
        ></AtAvatar>
        <Text className='name'>昵称</Text>
      </View>
      <View className='content'>
        <RichText nodes='<h1>66666</h1>'></RichText>
      </View>
      <View className='divide'></View>
      <View className='comment-box'>
        {new Array(10).fill(0).map((item, index) => (
          <View className='comment-item' key={index}>
            <View className='comment-user'>
              <AtAvatar
                className='avatar'
                size='small'
                circle
                image='https://jdc.jd.com/img/200'
              ></AtAvatar>
              <Text className='name'>昵称</Text>
            </View>
            <View className='comment-content'>
              <Text className='text'>评论内容</Text>
            </View>
            <View className='comment-date'>
              <Text className='date'>2021-06-06</Text>
            </View>
          </View>
        ))}
      </View>
      <View className='comment-operation'>
        <View className='input'>
          <Input placeholder='请输入评论内容'></Input>
        </View>
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
}
