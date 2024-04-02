import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import { useState } from 'react'
import './index.scss'

export default function Order() {

  const tabList = [
    { title: '全部' },
    { title: '待支付' },
    { title: '进行中' },
    { title: '已完成' },
    { title: '审核中' },
    { title: '已取消' },
  ]
  const [current, setCurrent] = useState(0)
  const handleClick = (value) => {
    setCurrent(value)
  }
  return (
    <View className='order-page comm_page'>
      <AtTabs current={current} tabList={tabList} onClick={handleClick}>
        <AtTabsPane current={current} index={0} >
          <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >标签页一的内容</View>
        </AtTabsPane>
        <AtTabsPane current={current} index={1}>
          <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页二的内容</View>
        </AtTabsPane>
        <AtTabsPane current={current} index={2}>
          <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页三的内容</View>
        </AtTabsPane>
        <AtTabsPane current={current} index={3}>
          <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页四的内容</View>
        </AtTabsPane>
        <AtTabsPane current={current} index={4}>
          <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页五的内容</View>
        </AtTabsPane>
        <AtTabsPane current={current} index={5}>
          <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页六的内容</View>
        </AtTabsPane>
      </AtTabs>
    </View>
  )
}
