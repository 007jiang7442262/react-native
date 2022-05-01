import JPush from 'jpush-react-native'


function initPush() {

// 初始化
JPush.init({
  "appKey": "0a8a3a73030c8f359246d6f2",
  "channel": "dev",
  "production": true,
});


//连接状态
const connectListener = result => {
  console.log("连接状态:" + JSON.stringify(result))
};
JPush.addConnectEventListener(connectListener);

//通知回调
const notificationListener = result => {
  console.log("通知回调:" + JSON.stringify(result))
};
JPush.addNotificationListener(notificationListener);

//本地通知回调
const localNotificationListener = result => {
  console.log("本地通知回调:" + JSON.stringify(result))
};
JPush.addLocalNotificationListener(localNotificationListener);

//tag alias事件回调
const tagAliasListener = result => {
  console.log("alias事件回调:" + JSON.stringify(result))
};
JPush.addTagAliasListener(tagAliasListener);

//手机号码事件回调
const mobileNumberListener = result => {
  console.log("手机号码事件回调:" + JSON.stringify(result))
};
JPush.addMobileNumberListener(mobileNumberListener);


JPush.getRegistrationID((registerID) => {
  console.log('registerID : ', registerID);
})


}

export default initPush;