import { View, Text, Image, Picker, Button } from "@tarojs/components";
import Taro, { useLoad } from "@tarojs/taro";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import {
  AtSteps,
  AtList,
  AtListItem,
  AtInput,
  AtTextarea,
  AtButton,
  AtModal,
  AtModalHeader,
  AtModalContent,
  AtModalAction,
} from "taro-ui";
import "./index.scss";

export default function Apply() {

  const [service, setService] = useState({})
  useLoad(() => {
    console.log('useLoad');
    if(process.env.TARO_ENV === "weapp") {
      const instance = Taro.getCurrentInstance()
      const eventChannel = instance.page.getOpenerEventChannel()
      eventChannel.on("acceptDataFromIndexPage", function(data){
        setService(data)
      })
    }
  })

  const stepArr = [
    { title: "填写订单" },
    { title: "在线支付" },
    { title: "专人服务" },
    { title: "服务完成" },
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    date: "请选择服务日期",
    time: "请选择服务时间",
    hospital: null,
    address: null,
  });
  const hospitalArr = [
    {
      id: 1,
      name: "北京肿瘤医院",
    },
    {
      id: 2,
      name: "北京协和医院",
    },
  ];

  const useRenderType = () => {
    return (
      <>
        <Image className='type-icon' src={service.image}></Image>
        <Text>{service.value}</Text>
      </>
    );
  };

  // 获取地址
  const handleChooseAddress = () => {
    Taro.navigateTo({
      url: `/pages/user/c-cnp/address/index?isChecked=true`,
    });
  };
  const currentAddress = useSelector((state) => state.user.currentAddress);
  useEffect(() => {
    if (Object.keys(currentAddress).length) {
      setFormData({
        ...formData,
        address: currentAddress,
      });
    }
  }, [currentAddress]);
  // 服务时间
  const handleChangeDate = (e) => {
    const { value } = e.detail;
    setFormData({
      ...formData,
      date: value,
    });
  };
  const handleChangeTime = (e) => {
    const { value } = e.detail;
    setFormData({
      ...formData,
      time: value,
    });
  };
  //医院
  const handleChangeHospital = (e) => {
    const { value } = e.detail;
    setFormData({
      ...formData,
      hospital: hospitalArr[value],
    });
  };

  //下单
  const [isDisabled, setIsDisabled] = useState(true);
  const [password, setPassword] = useState("");
  const [isOpened, setIsOpened] = useState(false);
  useEffect(() => {
    if (
      formData.address &&
      formData.date &&
      formData.hospital &&
      formData.phone
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [formData]);
  const handlePayment = () => {
    if (password === "123456") {
      setCurrentStep(1);
      console.log("生成订单", {
        address: formData.address.id,
        date: formData.date,
        time: formData.time,
        des: formData.des,
        hospital: formData.hospital.id,
        phone: formData.phone,
        money: 300,
        type: service.index,
      });
      setIsOpened(false);
    } else {
      Taro.showToast({
        title: "密码错误",
        icon: "none",
      });
      setPassword("");
    }
  };
  const handleCancel = () => {
    setPassword("");
    setIsOpened(false);
  };
  return (
    <View className='apply-page comm_page'>
      <View className='apply-step'>
        <AtSteps items={stepArr} current={currentStep} />
      </View>
      <View className='apply-content'>
        <View className='apply-type'>{useRenderType()}</View>

        <AtList className='apply-form'>
          <Picker
            mode='selector'
            range={hospitalArr}
            rangeKey='name'
            onChange={handleChangeHospital}
          >
            <AtList>
              <AtListItem
                title='所在医院'
                extraText={formData.hospital?.name || "请选择就诊所在医院"}
              />
            </AtList>
          </Picker>
          <Picker mode='date' onChange={handleChangeDate}>
            <AtList>
              <AtListItem title='服务日期' extraText={formData.date} />
            </AtList>
          </Picker>
          <Picker mode='time' onChange={handleChangeTime}>
            <AtList>
              <AtListItem title='服务时间' extraText={formData.time} />
            </AtList>
          </Picker>
          {!formData.address && (
            <AtListItem
              title='收件信息'
              extraText='请选择收件信息'
              onClick={handleChooseAddress}
            />
          )}
          {formData.address && (
            <AtListItem
              title={`${formData.address.name} ${formData.address.phone}`}
              note={formData.address.address}
              onClick={handleChooseAddress}
            />
          )}
          <AtInput
            value={formData.phone}
            border={false}
            align='right'
            title='联系电话'
            type='number'
            placeholder='请输入联系电话'
            placeholderClass='input-placeholder'
            onChange={(e) => setFormData({ ...formData, phone: e.trim() })}
          />
        </AtList>

        <View className='apply-des'>
          <View className='des-tit'>服务需求</View>
          <AtTextarea
            value={formData.des}
            onChange={(e) =>
              setFormData({
                ...formData,
                des: e.trim(),
              })
            }
            maxLength={200}
            placeholder='请简单描述您的服务需求...'
          />
        </View>
        <AtButton
          disabled={isDisabled}
          type='primary'
          onClick={() => setIsOpened(true)}
        >
          确认下单（支付300）
        </AtButton>
      </View>
      <AtModal isOpened={isOpened}>
        <AtModalHeader>支付下单</AtModalHeader>
        <AtModalContent>
          <View className='money'>
            支付<Text>300</Text>元
          </View>
          <AtInput
            value={password}
            type='password'
            placeholder='请输入支付密码'
            onChange={(e) => setPassword(e.trim())}
          />
        </AtModalContent>
        <AtModalAction>
          <Button onClick={handleCancel}>取消</Button>{" "}
          <Button onClick={handlePayment}>确定</Button>
        </AtModalAction>
      </AtModal>
    </View>
  );
}
