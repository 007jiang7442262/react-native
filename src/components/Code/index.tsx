import * as React from 'react';
import { useState, useImperativeHandle }  from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

import {
  CodeField,
  Cursor,
} from 'react-native-confirmation-code-field';

const styles = StyleSheet.create({
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFiledRoot: {marginTop: 20},
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


 const Index = (porps) => {
  const [vcodeTxt, setVcodeTxt] = useState('')

  const onVcodeChangeText = (val) => {
    setVcodeTxt(val)
  }


  useImperativeHandle(porps.refs, ()=> ({getData:() => vcodeTxt}));


  const onSubmitEditing = (val) => { porps.onSubmitEditing()}

    return (
      <CodeField
       onSubmitEditing={onSubmitEditing}
        value={vcodeTxt}
        onChangeText={onVcodeChangeText}
        // 输入密码框的个数
        cellCount={6}
        rootStyle={styles.codeFiledRoot}
        keyboardType="number-pad"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
          >
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
    );
  
}

export default Index;
