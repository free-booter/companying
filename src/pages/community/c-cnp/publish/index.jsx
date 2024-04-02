import { View, Editor } from '@tarojs/components'
import Taro from '@tarojs/taro';
import { AtButton } from 'taro-ui'
import { useState } from 'react';

import './index.scss'

export default function Publish() {

  const [EditorContext, setEditorContext] = useState(null)
  const handleEditorReady = () => {
    Taro.createSelectorQuery().select('#editor').context(res => {
      setEditorContext(res.context)
    }).exec()
  }
  const handlePublish = () => {
    EditorContext.getContents().then(res => {
      console.log(res.html)
    })
  }

  return (
    <View className='publish-page comm_page'>
      <Editor id='editor' onReady={handleEditorReady} placeholder='请填写内容'></Editor>
      <AtButton type='primary' onClick={handlePublish}>发布</AtButton>
    </View>
  )
}
