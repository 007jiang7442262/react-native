import { Dimensions } from 'react-native'
//设计高的宽度 / 元素的宽度 = 手机屏幕 / 手机中的元素的宽度


export const screenWidth = Dimensions.get("window").width;
export const screenHight = Dimensions.get("window").height;
//手机中元素的宽度 = 手机屏幕 *  元素的宽度 /设计高的宽度
export const pxToDp = (px) => screenWidth * px / 375;