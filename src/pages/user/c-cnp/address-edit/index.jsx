import { View } from "@tarojs/components";
import { useSelector } from 'react-redux';
import { useState , useEffect } from 'react';
import Taro, { useRouter } from "@tarojs/taro";
import { AtButton, AtForm, AtInput } from "taro-ui";
import "./index.scss";

function AddressDetail() {
  // 获取路由参数
  const router = useRouter()
  const { isAdd } = router.params
  const formData = useSelector(state => state.user.currentAddress)
  const [isDisabled, setIsDisabled] = useState(true)
  useEffect(() => {
    if (isAdd) {
      // 修改标题
      Taro.setNavigationBarTitle({
        title: '添加地址'
      })
    }
  }, [isAdd])
  useEffect(() => {
    if (formData.name && formData.phone && formData.address) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }, [formData])

  // 提交
  const handleSubmit = () => {
    if(isDisabled) return
  }

  return (
    <View className='address-detail comm_page'>
      <AtForm>
        <AtInput value={formData.name} title='收件人' placeholder='请填写收件人信息'  />
        <AtInput value={formData.phone} title='手机号' type='number' placeholder='请填写手机号'  />
        <AtInput value={formData.address} title='收货地址' placeholder='请填写收货地址'  />
      </AtForm>
      <AtButton disabled={isDisabled} type='primary' onClick={handleSubmit}>保存</AtButton>
      {
        !isAdd && <AtButton>删除</AtButton>
      }
    </View>
  );
}

export default AddressDetail;
