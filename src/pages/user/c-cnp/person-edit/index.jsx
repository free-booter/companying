import { View, Picker } from '@tarojs/components'
import { useRouter } from '@tarojs/taro'
import { AtButton, AtForm, AtInput, AtList, AtListItem } from 'taro-ui'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

import './index.scss'

export default function PersonEdit() {
  const router = useRouter()
  const { isAdd } = router.params
  const selector = ['男', '女']
  const formData = useSelector(state => state.user.currentPerson)
  const [isDisabled, setIsDisabled] = useState(true)
  useEffect(() => {
    if (isAdd) {
      // 修改标题
      Taro.setNavigationBarTitle({
        title: '添加就诊人'
      })
    }
  }, [isAdd])
  useEffect(() => {
    if (formData.name && formData.phone && formData.id_card && formData.sex) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }, [formData])

  const [sex, setSex] = useState(formData.sex || '男')
  const handleChangeSex = (e) => {
    setSex(selector[e.detail.value])
  }
  const handleSubmit = () => {
    if(isDisabled) return
  }

  return (
    <View className='person-detail comm_page'>
      <AtForm>
        <AtInput  value={formData.name} title='姓名' placeholder='请填写姓名'  />
        <AtInput  value={formData.phone} title='手机号' type='number' placeholder='请填写手机号'  />
        <AtInput  value={formData.id_card} title='身份证' placeholder='请填写身份证'  />
        <Picker
          mode='selector'
          range={selector}
          onChange={handleChangeSex}
        >
          <AtList>
            <AtListItem
              title='性别'
              extraText={sex}
            />
          </AtList>
        </Picker>
      </AtForm>
      <AtButton disabled={isDisabled} type='primary' onClick={handleSubmit}>保存</AtButton>
      {
        !isAdd && <AtButton>删除</AtButton>
      }
    </View>
  );
}
