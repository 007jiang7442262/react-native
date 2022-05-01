//用于测试 @reduxjs/toolkit的类组件用法
// https://blog.csdn.net/weixin_39753511/article/details/119597398  说不能用于class
import React from 'react';
import {setValue, setData} from './reducer';
import { StyleSheet, Text, View, SafeAreaView, Button, Linking } from 'react-native';
//import { store } from "@reduxjs/toolkit";

class ClassTest extends React.Component {
  render() {
    return (
      <View>
         <Text>类组件用法13311</Text>
      </View>
    )
  }
}

export default ClassTest;

