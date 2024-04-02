import { RichText, Video, View } from "@tarojs/components";
import { useSelector } from "react-redux";
import "./index.scss";
import useGetFile from "../../../../hooks/useGetFile";

function Detail() {
  const detailData = useSelector((state) => state.information.detailData);
  return (
    <div className='detail-page'>
      <Video
        id='video'
        src={useGetFile(detailData.video)}
        initialTime={0}
        controls
        autoplay={false}
        loop={false}
        muted={false}
      />
      <View className='page-content'>
        <RichText nodes={detailData.content}></RichText>
      </View>
    </div>
  );
}

export default Detail;
