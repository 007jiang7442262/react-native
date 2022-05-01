import * as React from 'react';
import Toast from 'teaset/components/Toast/Toast';
import { ActivityIndicator } from 'react-native'

let customKey = null;

 const showLoading = (text:string) => {
  if (customKey) return;
  customKey = Toast.show({
    text: text,
    icon: <ActivityIndicator size='large' color={'#eee'} />,
    position: 'center',
    duration: 100000,
  });
}

 const hideLoading = () => {
  if (!customKey) return;
  Toast.hide(customKey);
  customKey = null;
};

export default {hideLoading, showLoading}