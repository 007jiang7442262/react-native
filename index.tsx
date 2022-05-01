/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';


console.disableYellowBox = true;
const _XHR = global.originalXMLHttpRequest ? global.originalXMLHttpRequest: global.XMLHttpRequest;  //加了这个可以在调试里面看见你的调用接口

XMLHttpRequest = _XHR
AppRegistry.registerComponent(appName, () => App);
