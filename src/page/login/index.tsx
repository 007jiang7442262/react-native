import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Text, View, Image, StatusBar, StyleSheet, TextInput, ActivityIndicator, Platform } from 'react-native';
import { pxToDp } from '../../utils/styleTransition'
import { Input } from '@rneui/themed';
import Icon from 'react-native-vector-icons/AntDesign';
import Toasts from '../../components/Loading';
import Toast from 'teaset/components/Toast/Toast';
import axios from 'axios';
import THButton from '../../components/THButton';
import Code from '../../components/Code'


const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: pxToDp(300),
  },
  flex: {
    display: 'flex',
    borderBottomWidth: pxToDp(0.8),
    borderBottomColor: '#888',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 0,
    marginTop: Platform.OS === 'ios' ? pxToDp(30) : 0,
  },
  center: {
    width: '100%',
    //height: pxToDp(100),
    display: 'flex',
    alignItems: 'center',
    marginTop: pxToDp(1)
    //justifyContent:'center',
    //flexDirection:  'row'
  }
})

const str: any = "请输入手机号";

export default (props: any) => {
  const [phone, setPhone] = useState('13162299265');
  const [serverData, setSrverData] = useState('');
  const [time, setTime] = useState(0);
  const [timeStatus, setTimeSatus] = useState(null);
  const refs = useRef<any>();

  useEffect(() => {
    //axios.get('http://localhost:7001/getData')
    //.then((data) => {
    //  // console.log(' 姜超 =', data.data);
    // 
    //  setSrverData(data.data.ad);
    //})

    Toasts.showLoading('加载中3...');
    setTimeout(() => {
      Toasts.hideLoading();
    }, 2000);

    return () => {
      if (timeStatus) {
        clearInterval(timeStatus);
      }
    }
  }, [])

  const onChange = (val) => {
    setPhone(val);
  }

  const login = () => {
    const regex = /^1[3-9]\d{9}$/;
    if (!phone) {
      return Toast.fail('手机号不能为空')
    } else if (!regex.test(phone)) {
      return Toast.fail('手机号格式不对');
    }
    setTime(60);
    let number = 60;
    const timeData = setInterval(() => {
      if (number <= 0) {
        clearInterval(timeData)
      } else {
        number--;
        setTime(number)
      }
    }, 1000);
    setTimeSatus(timeData);
  }

  const codeEnd = () => {
    const codes = refs.current.getData();
    console.log('codes =', codes);
    Toast.success(`验证码${codes}已经发送`);
    setTimeout(() => {props.navigation.navigate('userInfo')}, 2000)
  }

  return (
    <View>
      {/* StatusBar 是通栏 */}
      <StatusBar backgroundColor="transparent" translucent={true} />
      <Image style={styles.img} source={require('../../assetc/22.jpeg')} />
      <View style={{ padding: pxToDp(20), display: 'flex' }}>
        <Text style={{ color: '#888', fontSize: pxToDp(25), fontWeight: 'bold' }}>
          {time === 0 ? '手机号登入注册' : '输入验证码'}
        </Text>
        {
          time === 0 ?
            (
              <View >
                <Input
                  placeholder='请输入手机号'
                  keyboardType='phone-pad'
                  style={{ fontSize: pxToDp(20) }}
                  onChangeText={onChange}
                  leftIcon={<Icon name="phone" size={25} color="#888" />}
                  onSubmitEditing={login}
                />
              </View>
            )
            :
            (
              <View style={{ padding: 10 }}>
                <Code refs={refs} onSubmitEditing={codeEnd} />
              </View>
            )
        }

        <View style={styles.center}>
          <THButton onClick={time === 0 ? login : codeEnd} text={time === 0 ?`注册或登录` : `发送验证码 ${time ? `(${time}s)` : ''} `} />
        </View>

        <Text>{phone}</Text>
        <Text>{serverData}</Text>
      </View>
    </View>
  )
}
