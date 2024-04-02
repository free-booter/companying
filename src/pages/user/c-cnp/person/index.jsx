import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useDispatch } from "react-redux";
import { AtButton, AtList, AtListItem } from "taro-ui";

import "./index.scss";

export default function Person() {
  const personList = [
    {
      name: "姓名",
      phone: "17379900502",
      id_card: "身份证",
      sex: '女'
    }
  ];
  const dispatch = useDispatch();
  const handleLinkToPersonEdit = (item) => {
    dispatch({type: 'user/setCurrentPerson', payload: item});
    Taro.navigateTo({url: "/pages/user/c-cnp/person-edit/index"});
  }
  const addPerson = () => {
    dispatch({type: 'user/setCurrentPerson', payload: {}});
    Taro.navigateTo({url: `/pages/user/c-cnp/person-edit/index?isAdd=true`});
  }
  return (
    <View className='person-page comm_page'>
      <AtList>
        {personList.map((item, index) => {
          return (
            <AtListItem
              key={index}
              title={`${item.name} ${item.phone}`}
              note={item.id_card}
              arrow='right'
              onClick={() => handleLinkToPersonEdit(item)}
            />
          );
        })}
      </AtList>
      <View className='btn-box'>
        <AtButton type='primary' onClick={addPerson}>添加就诊人</AtButton>
      </View>
    </View>
  );
}
