/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

/* 

import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Linking } from 'react-native';
//import RootSrot from './mobx';
import { Provider } from 'react-redux';
import store from './store/store';

import Icon from 'react-native-vector-icons/AntDesign';
import Bnt from './src/components/FunctionTest/Bnt';
import ClassTest from './src/components/ClassTest/index.tsx'
/* 
const App = () => {
  // console.log('zhong');
  // console.log('11110000')
  return (
    <View>
     <Provider store={store}>
        <SafeAreaView>
          <Bnt />
          <ClassTest />
          <Text style={styles.text}>niao123</Text>
          <View>
            <Icon name="home" size={40} color="red" />
          </View>
          <Button
            onPress={() => {
              Linking.openURL('https://www.baidu.com/')
            }} title="跳转连接0"></Button>
        </SafeAreaView>
       </Provider>
    </View>

  )
} */


/* const App = () => {
  // console.log('zhong');
  // console.log('11110000')
  return (
    <View>
    
    </View>

  )
}
export default App;

const styles = StyleSheet.create({
  text: {
    color: '#000000',
    fontSize: 20
  }
})  */






import * as React from 'react';
import { View, Text } from 'react-native';
//import i18next from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import Nav  from './src/nav';


const languageDetector:any = {
  type: 'languageDetector',
  async: true,
  detect: cb => cb('cn'),
  init: () => {},
  cacheUserLanguage: () => {},
};
/* 
i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'cn',
    debug: true,
    resources: {
      en: {
        translation: {
          hello: 'Hello world',
          change: 'Change language',
        },
      },
      cn: {
        translation: {
          hello: '你好',
          change: '拉拉',
        },
      },
    },
  }); */


export default function App() {
 // const { t, i18n } = useTranslation();

    return (
      <View style={{flex: 1}}>
                {/* <Text>{t('change')}</Text> */}
         <Nav />
      </View>
    )
  
}


//1 添加字体图标
//https://oblador.github.io/react-native-vector-icons/
// npm i react-native-vector-icons -D
// npx react-native link react-native-vector-icons 应该不用这个
//在react-native.config.js 里面添加代码

//2
//https://github.com/jhen0409/react-native-debugger/releases  下载react-native-debugge  用于debugger
// commad + M 
//  对接React Native Debugger报错     解决办法  在package.josn里面添加一个字段
// "resolutions": { "react-devtools-core": "4.14.0" }
// npm i 如果不行就 运行下面的命令



//3 路由
// npm install --save  react-native-screens  @react-navigation/native react-native-safe-area-context @react-navigation/native-stack




// 4. 这问题没有解决
// Cannot add node "1" because a node with that id is already in the Store.  这个错误 就在package.josn里面添加一个字段



//5 支持ts
// https://www.cnblogs.com/aoximin/p/13173805.html

//6 react-native-element  https://reactnativeelements.com/docs 也是 ui组件

//7  ui组件 teaset https://github.com/rilyu/teaset/blob/master/docs/cn/README.md









// error
// npm run ios 
// 报错  error Failed to build iOS project. We ran "xcodebuild" command but it exited with error code 65. To debug build logs further, consider building your app with Xcode.app, by opening
//原因  react-native link react-native-vector-icons 创建了字体图标软连接导致的
//解决  先运行  react-native unlink react-native-vector-icons 断开软连接
// 进入 ios 文件 Podfile文件内容
//  把 use_flipper!() 修改成    use_flipper!({ 'Flipper-Folly' => '2.6.10' })
//然后运行下面命令
//pod install 
//pod update
//更新的时候会报错, 可以重新运行多次就可以了
// https://blog.csdn.net/qq_33384402/article/details/114649454 参考网站







//react-native-gesture-handler 没用到