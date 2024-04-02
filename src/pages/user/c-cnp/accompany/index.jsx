import { View, Text,Picker } from "@tarojs/components";
import {
  AtForm,
  AtInput,
  AtImagePicker,
  AtList,
  AtListItem,
  AtButton,
} from "taro-ui";
import { useState , useEffect } from "react";

import "./index.scss";

function Accompany() {
  const [files, setFiles] = useState([]);
  const handleChangeFiles = (e) => {
    if (e.length) {
      setFiles(e);
    } else {
      setFiles([]);
    }
    console.log(e);
  };

  const selector = ["男", "女"];
  const handleChangeSex = (e) => {
    setFormData({
      ...formData,
      sex: selector[e.detail.value]
    })
  }

  const [formData, setFormData] = useState({
    name: '',
    avatar: '',
    sex: '男',
    age: '',
    phone: ''
  })
  const [isDisabled, setIsDisabled] = useState(true)
  const submit = () => {

  }

  useEffect(() => {
    if (formData.name && formData.age && formData.phone && files.length) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }, [formData, files])

  return (
    <View className='accompany-page comm_page'>
      <AtForm>
        <View className='custom-input input-upload'>
          <Text>形象照片</Text>
          <AtImagePicker
            mode='scaleToFill'
            length={1}
            files={files}
            onChange={handleChangeFiles}
          />
        </View>
        <AtInput clear title='展示称呼' value={formData.name} onChange={e => setFormData({...formData, name: e.trim()})} placeholder='设置您称呼用于服务展示' />
        <Picker
          mode='selector'
          range={selector}
          onChange={handleChangeSex}
        >
          <AtList>
            <AtListItem
              title='性别'
              extraText={formData.sex}
            />
          </AtList>
        </Picker>
        <AtInput clear title='年龄' value={formData.age} onChange={e => setFormData({...formData, age: e.trim()})} placeholder='请填写周岁年龄' />
        <AtInput clear title='手机号' value={formData.phone} onChange={e => setFormData({...formData, phone: e.trim()})} placeholder='请填写您的手机号' />
      </AtForm>
      <AtButton type='primary' disabled={isDisabled} formType='submit' onClick={submit}>注册成为陪诊师</AtButton>

    </View>
  );
}

export default Accompany;
