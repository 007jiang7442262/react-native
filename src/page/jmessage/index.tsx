import * as React from 'react';
import { Component } from 'react';
import { Text, View } from 'react-native';
//import jmessage from '../../utils/jmessage';

export default class index extends Component {

  setData = () => {
    //jmessage.init();
    //jmessage.lgoin('jiangchao', '12345678');
  }

  componentDidMount(): void {
    this.setData();
  }
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}
