//用于渐变按键
import * as React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { pxToDp } from '../../utils/styleTransition';

type propsType = {
  onClick: () => void,
  text: string,
  height?: number,
  width?: number

}

// npm install react-native-linear-gradient --save
const THButton : React.FC<propsType>  = ({onClick, text, height, width}) => {
  //disabled 是否能点击
  return (
    <TouchableOpacity disabled={false} style={{height: pxToDp(height || 46), width: pxToDp(width ||250)}} onPress={onClick}>
      <LinearGradient colors={['#9b63cd', '#e0708c']} style={styles.linearGradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
        <Text style={styles.buttonText}>
            {text}
        </Text>
      </LinearGradient>
    </TouchableOpacity>

  )
}

export default THButton;

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderRadius: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});