import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import { AtAvatar, AtList, AtListItem } from "taro-ui";
import "./index.scss";
import useGetFile from "../../hooks/useGetFile";
import useRouterLink from "../../hooks/useRouterLink";

export default function Index() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View className='user-page comm_page'>
      {/* 头像 */}
      <View
        className='user-info'
        style={{ backgroundImage: `url(${useGetFile("service_cover2.jpg")})` }}
      >
        <View className='user-avatar'>
          <AtAvatar
            circle
            size='large'
            image={useGetFile("default-avatar.jpg")}
          ></AtAvatar>
        </View>
        <View className='user-name'>
          <Text>用户名</Text>
        </View>
      </View>
      <View className='page-content'>
        <AtList hasBorder={false}>
          <AtListItem title='地址管理' onClick={useRouterLink('/pages/user/c-cnp/address/index')} arrow='right' iconInfo={{ size: 25, color: '#636466', value: 'map-pin', }} />
          <AtListItem title='就诊人管理' onClick={useRouterLink('/pages/user/c-cnp/person/index')} arrow='right' iconInfo={{ size: 25, color: '#636466', value: 'settings', }} />
          <AtListItem title='订单管理' onClick={useRouterLink('/pages/user/c-cnp/order/index')} arrow='right' iconInfo={{ size: 25, color: '#636466', value: 'list', }} />
          <AtListItem title='我的发布' onClick={useRouterLink('/pages/user/c-cnp/publish/index')}  arrow='right' iconInfo={{ size: 25, color: '#636466', value: 'file-generic', }} />
          <AtListItem title='我的客服' arrow='right' iconInfo={{ size: 25, color: '#636466', value: 'phone', }} />
          <AtListItem title='申请陪诊师' onClick={useRouterLink('/pages/user/c-cnp/accompany/index')} hasBorder={false} arrow='right' iconInfo={{ size: 25, color: '#636466', value: 'heart-2', }} />
        </AtList>
        <AtList hasBorder={false} className='bottom'>
          <AtListItem title='退出登录' hasBorder={false} />
        </AtList>
      </View>
    </View>
  );
}
