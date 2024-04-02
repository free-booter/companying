import { AtButton, AtForm, AtInput } from "taro-ui";
import { View } from "@tarojs/components";
import { useState } from "react";

import "./index.scss";

function Login() {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const handleAccount = (e) => {
    setAccount(e.trim());
  };

  const handlePassword = (e) => {
    setPassword(e.trim());
  };

  const handleLogin = () => {};

  const handleReset = () => {
    setAccount('')
    setPassword('')
  };
  return (
    <View className='login-page comm_page'>
      <View className='title'>认“诊”陪伴</View>
      <AtForm onSubmit={handleLogin} onReset={handleReset}>
        <AtInput
          name='value'
          title='账号'
          type='text'
          placeholder='请输入账号'
          value={account}
          onChange={handleAccount}
        />
        <AtInput
          name='value'
          title='密码'
          type='password'
          placeholder='请输入密码'
          value={password}
          onChange={handlePassword}
        />
        <View className='btn-box'>
          <AtButton type='primary' formType='submit'>提交</AtButton>
          <AtButton formType='reset'>重置</AtButton>
        </View>
      </AtForm>
    </View>
  );
}

export default Login;
