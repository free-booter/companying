import { View } from "@tarojs/components";
import Taro, { useRouter } from "@tarojs/taro";
import { AtButton, AtList, AtListItem, AtSwipeAction } from "taro-ui";
import { useDispatch } from "react-redux";
import { setCurrentAddress } from "@/store/modules/user";
import "./index.scss";

function Address() {
  const router = useRouter();
  const { isChecked } = router.params;
  const addressList = [
    {
      id: 1,
      name: "李四",
      phone: "17379900502",
      address: "xx省xx市xx区xx街道xx小区xx栋xx单元xx号xx室",
    },
    {
      id:2,
      name: "张三",
      phone: "17379900502",
      address: "xx省xx市xx区xx街道xx小区xx栋xx单元xx号xx室",
    },
  ];

  const dispatch = useDispatch();
  const handleDetail = (item) => {
    dispatch(setCurrentAddress(item));
    Taro.navigateTo({
      url: "/pages/user/c-cnp/address-edit/index",
    });
  };
  const addAddress = () => {
    dispatch(setCurrentAddress({}));
    Taro.navigateTo({
      url: `/pages/user/c-cnp/address-edit/index?isAdd=true`,
    });
  };
  const handleChecked = (item) => {
    if (isChecked) {
      dispatch(setCurrentAddress(item));
      Taro.navigateBack();
    }
  };

  return (
    <View className='address-page comm_page'>
      <AtList>
        {addressList.map((item, index) => {
          return (
            <AtSwipeAction
              onClick={() => handleDetail(item)}
              key={index}
              options={[
                {
                  text: "编辑",
                  style: {
                    backgroundColor: "#6190E8",
                  },
                },
              ]}
            >
              <AtListItem
                title={`${item.name} ${item.phone}`}
                note={item.address}
                onClick={() => handleChecked(item)}
              />
            </AtSwipeAction>
          );
        })}
      </AtList>
      <View className='btn-box'>
        <AtButton type='primary' onClick={addAddress}>
          添加地址
        </AtButton>
      </View>
    </View>
  );
}

export default Address;
