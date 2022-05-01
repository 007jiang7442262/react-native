// npm install react-native-datepicker --save  时间插件


import * as React from 'react'
import { Component } from 'react';
import { View, Modal, Platform } from 'react-native';
import DateTimePicker, {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import { DatePicker, } from "react-native-common-date-picker";



type TimeType = {
  headTime: (time: any) => void,
  visible: boolean,
  cancel: () => void
}

export default class MyDatePicker extends Component<TimeType, any> {
  constructor(props) {
    super(props)
    this.state = {
      timeValue: new Date()
    }
  }

  handleDateChange1 = (date) => {
    this.setState({ timeValue: date })
    this.props.headTime(date.toDateString());
  }

  handleDateChange2 = (date) => {
    this.props.headTime(date);
  }

  /* render() {
    return (
      <Modal transparent={true} animationType={'slide'} visible={this.props.visible} onRequestClose={() => { }}>
        <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <DateTimePicker
            testID="dateTimePicker"
            value={this.state.timeValue}
            mode={Platform.OS === 'ios' ? 'countdown' : 'time'}
            //minimumDate={new Date(1950, 0, 1)}
            //maximumDate={new Date()}
            //display="calendar"
            //is24Hour={Platform.OS === 'ios' ? true : false}
            onChange={(a, b) => { this.handleDateChange1(b) }}
          />
        </View>

      </Modal>

    )
  } */
/* DateTimePickerAndroid */
  

 render() {
    return (
      <Modal transparent={true} animationType={'slide'} visible={this.props.visible} onRequestClose={() => { }}>
        <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <DatePicker
            minDate={'1949-5-23'}
            maxDate={'2030-6-6'}
            defaultDate={'2019-9-9'}
            cancel={() => this.props.cancel()}
            headerTitleType={5}
            selectedDateMarkType={'square'}
            horizontal={true}
            pagingEnabled={true}
            cancelText="取消"
            confirmText="确认"
            confirm={this.handleDateChange2}
          />
        </View>
      </Modal>
    )
  }  
}