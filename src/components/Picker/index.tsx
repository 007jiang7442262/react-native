import * as React from 'react';
import { Component } from 'react';
import { View, Modal } from 'react-native'
import { CascadePicker } from 'react-native-slidepicker';
import { Pickers } from '../../utils/picker'

const ParaData = [
  {
    "name": "Asia",
    "id": 1,
    "list": [
      {
        "name": "China",
        "id": 100,
        "list": [
          {
            "name": "Beijing",
            "id": 1101
          }
        ]
      },
      {
        "name": "South Korea",
        "id": 200,
        "list": []
      }
    ]
  },
  {
    "name": "Asia1",
    "id": 2,
    "list": [
      {
        "name": "China2",
        "id": 200,
        "list": [
          {
            "name": "Beijing3",
            "id": 3101
          }
        ]
      },
      {
        "name": "South Korea4",
        "id": 400,
        "list": []
      }
    ]
  }
]
export default class PickerTest extends Component<any, any> {
  state = { value: null }
  cancel = data => {
    this.props.hiedPicker();
  };
  
  confirm = data => {
    this.setState({ value: data });
    this.props.hiedPicker(data);
  };
  render() {
    return (
      <Modal transparent={true} animationType={'slide'} visible={this.props.showPicker} onRequestClose={() => { }}>
        <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <CascadePicker
            pickerDeep={2}
            value={this.state.value}
            dataSource={Pickers}
            cancel={this.cancel}
            confirm={this.confirm}
            headOptions={{
              confirmText: "确定",
              cancelText: "取消",
              itemHeight: "请选择城市",
            }}
          />
        </View>
      </Modal>

    );
  }
}
