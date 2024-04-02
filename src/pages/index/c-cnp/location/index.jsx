import { View, Text } from '@tarojs/components'
import { useSelector, useDispatch } from 'react-redux'
import { setLocation } from '@/store/modules/home'
import './index.scss'

export default function Location() {
  const location = useSelector(state => state.home.location)
  const locationList = ['北京', '深圳', '青岛']
  const dispatch = useDispatch()

  return (
    <View className='location-page comm_page'>
      {
        locationList.map((item, index) => (
          <View key={index} className='comm_list_box location-item'>
            <Text>{item}</Text>
            <View className='btn-box'>
              <View className={`btn ${location === item ? 'active' : ''}`} onClick={() => dispatch(setLocation(item))} >切换</View>
            </View>
          </View>
        ))
      }
    </View>
  )
}
