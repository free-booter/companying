import { View, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useDispatch } from "react-redux";

import "./index.scss";
import data from "./data.json";
import useGetFile from "../../hooks/useGetFile";

export default function Index() {
  const dispatch = useDispatch();
  const handleLinkToDetail = (item) => {
    dispatch({ type: 'information/setDetailData', payload: item });
    Taro.navigateTo({
      url: `/pages/information/c-cnp/detail/index`});
  }
  return (
    <View className='science-page comm_page'>
      <View className='page-list'>
        {data.map((_, index) => {
          return (
            <div className='list-item' key={index} onClick={() => handleLinkToDetail(_)}>
              <Image className='item-cover' src={useGetFile(_.cover)} />
              <div className='item-box'>
                <div className='item-box-tit'>{ _.title }</div>
                <div className='item-box-info'>
                  <div className='item-box-info__date'>2023-02-14</div>
                  <div className='item-box-info__num'>浏览：2830</div>
                </div>
              </div>

            </div>
          );
        })}
      </View>
    </View>
  );
}
