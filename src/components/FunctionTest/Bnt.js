// 用于测试 @reduxjs/toolkit的函数组件用法
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './reducer'
import { StyleSheet, Text, View, SafeAreaView, Button, Linking } from 'react-native';

const Bnts  = (props) => {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();

  const onClick = () => {
     dispatch(decrement())
     //props.RootSrot.setName('面试')
  }

  const show = () => {
  }

  return (
    <View>
          <Text style="fontSize: 20" onPress={show}>www12w</Text>
          <Text onPress={onClick}>{count || '姜超'}</Text>
    </View>
)};

export default Bnts;