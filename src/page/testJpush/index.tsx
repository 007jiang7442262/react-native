import * as React from 'react'
import { Component } from 'react'
import { Text, View } from 'react-native'
import jmessage from '../../utils/jpush'

/* 消息推送 */
export default class Index extends Component {

  getdata = async () => {
    jmessage()

  }
  componentDidMount(): void {
    this.getdata();
  }


  render() {
    return (
      <View>
        <Text> 12345 </Text>
      </View>
    )
  }
}
