
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../page/login';
import CodeScrollView from '../components/CodeScrollView';
import UserInfo from '../page/userInfo';
import Test from '../page/test'
import Geolocations from '../page/geolocations'
import TestJpush from '../page/testJpush';
import BottomSheetTest from '../page/bottomSheetTest';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000'
  },
  headerText: {
    fontSize: 30,
    color: '#fff',

  }
})  

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen222</Text>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}


const Stack = createNativeStackNavigator();

function Nav() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={(data) => {
          //console.log('data =', data);
          let route = data.route;
          //console.log('route', route.name)
          return {
            headerTitleAlign: 'center',
            headerShown: false,
            //headerShown: true, //自定义头设置的必要属性
            //headerMode: 'screen', //自定义头设置的必要属性
            //header: () => ( //自定义头
            //      <View style={styles.header}>
            //         <Text style={styles.headerText}>{route.name}</Text>
            //      </View>
            //)
          };
        }}
        initialRouteName="BottomSheetTest"
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CodeScrollView" component={CodeScrollView} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="userInfo" component={UserInfo} />
        <Stack.Screen name="Test" component={Test} />
        <Stack.Screen name="Geolocations" component={Geolocations} />
        <Stack.Screen name="TestJpush" component={TestJpush} />
        <Stack.Screen name="BottomSheetTest" component={BottomSheetTest} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default Nav;


//react-native-tab-navigator 66集
//react-native-image-header-scroll-view 68集 
// 字体图片引入  https://blog.csdn.net/hzxOnlineOk/article/details/104650543?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_title~default-1.pc_relevant_default&spm=1001.2101.3001.4242.2&utm_relevant_index=4
//react-native-deck-swiper 可以左右滑动