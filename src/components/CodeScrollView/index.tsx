
//当输入框在底部的时候 弹起键盘会把输入框顶上来 解决办法
import * as React from 'react';
import { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View, StatusBar, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

import {
  CodeField,
  Cursor,
} from 'react-native-confirmation-code-field';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
  root: { flex: 1, padding: 20 },
  title: { textAlign: 'center', fontSize: 30 },
  codeFiledRoot: { marginTop: 20 },
  // 里面每个密码小框的样式
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
  },
  // 当里面的每个密码小框被选中之后的样式
  focusCell: {
    borderColor: '#888',
  },
});





const Index = () => {
  const [vcodeTxt, setVcodeTxt] = useState('')



  const onVcodeChangeText = (val) => {
    console.log('val =', val);
    setVcodeTxt(val)
  }

  const onSubmitEditing = (val) => { 
    //console.log('jjjjj =', val.nativeEvent.text)
    
  }
  return (
    <>
      {
        Platform.OS === 'ios' ?
          (
            <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
              <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                  <View>
                    <View style={{ width: '100%', height: 900, backgroundColor: 'red' }}></View>
                    <CodeField
                      onSubmitEditing={onSubmitEditing}
                      value={vcodeTxt}
                      onChangeText={onVcodeChangeText}
                      // 输入密码框的个数
                      cellCount={6}
                      rootStyle={styles.codeFiledRoot}
                      keyboardType="number-pad"
                      renderCell={({ index, symbol, isFocused }) => (
                        <Text
                          key={index}
                          style={[styles.cell, isFocused && styles.focusCell]}
                        >
                          {symbol || (isFocused ? <Cursor /> : null)}
                        </Text>
                      )}
                    />
                  </View>
                </ScrollView>
              </SafeAreaView>
            </KeyboardAvoidingView>
          )
          :
          (
            <SafeAreaView style={styles.container}>
              <ScrollView style={styles.scrollView}>
                <View>
                  <View style={{ width: '100%', height: 900, backgroundColor: 'red' }}></View>
                  <CodeField
                    onSubmitEditing={onSubmitEditing}
                    value={vcodeTxt}
                    onChangeText={onVcodeChangeText}
                    // 输入密码框的个数
                    cellCount={6}
                    rootStyle={styles.codeFiledRoot}
                    keyboardType="number-pad"
                    renderCell={({ index, symbol, isFocused }) => (
                      <Text
                        key={index}
                        style={[styles.cell, isFocused && styles.focusCell]}
                      >
                        {symbol || (isFocused ? <Cursor /> : null)}
                      </Text>
                    )}
                  />
                </View>
              </ScrollView>
            </SafeAreaView>
          )
      }
    </>


  );

}

export default Index;
