import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { pxToDp } from '../../utils/styleTransition';
import { SvgUri, SvgXml } from 'react-native-svg';
import { nv, nan } from '../../utils/svg'
import Time from './components/Time';
import { useRef } from 'react';
import { Input } from '@rneui/themed';
import PickerComponent from '../../components/Picker';
import ClockedInList from '../../components/geolocation';
import THButton from '../../components/THButton';
import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';
import Toast from 'teaset/components/Toast/Toast';

const styles = StyleSheet.create({
  setTop: {
    paddingTop: pxToDp(40)
  },
  svgAll: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  svgBox: {
    display: 'flex',
    flexDirection: 'row',
  },
  svgMige: {
    width: pxToDp(80),
    height: pxToDp(80),
    borderRadius: pxToDp(40),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  setMargin: {
    marginRight: pxToDp(20)
  },

})


//npm install react-native-svg --save svg插件
// npm install react-native-datepicker --save  时间插件

// react-native-amap-geolocation 调用高德地图



const IP = 'http://192.168.100.102:7001'




const Index = () => {
  const [show, setShow] = React.useState(false);
  const [date, setDate] = React.useState('');
  const [name, setName] = React.useState('');
  const [pickerData, setPickerData] = React.useState('');
  const [showPicker, setShowPicker] = React.useState(false);
  const [selectType, setSelectType] = React.useState<number>(1); //0 男孩  1女孩
  const [location, setLocation] = React.useState<any>({ address: '', city: '' }) //城市
  const [base64, setBase64] = React.useState('');

  const refs = useRef(null);

  const getLocation = async () => {
    const geolocation = new ClockedInList();
    await geolocation.geolocationInit();
    const dataLocation: any = await geolocation.requestFetchGetList();
    setLocation(dataLocation.location);
  }


  const getData = () => {

    const temp = axios.create({
      baseURL: IP,
      timeout: 6000,
      headers: {
        Accept: 'application/json',
        "Content-Type": 'application/json;charset=utf8'
      }
    })


    temp.get('/getData')
      .then((data) => {
        console.log('姜超111 =', data.data);
        //setSrverData(data.data.ad);
      })
      .catch((error) => {
        console.log('error =', error)
      })
  }

  React.useEffect(() => {
    //getLocation()
    getData()
    // getLocation();
  }, [])

  const headTime = (time) => {
    setShow(false);
    setDate(time);
  }


  const picker = () => {
    setShowPicker(true);
  }


  const hiedPicker = (data: any[]) => {
    if (data) {
      let str = ''
      data.forEach(item => {
        str += item.name;
      })
      //console.log('data =', data);
      setPickerData(str);
    }
    setShowPicker(false);
  }

  const upImg = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      //cropping: true,
      includeBase64: true
    }).then((image: any) => {

      const temps = axios.create({
        baseURL: IP,
        timeout: 6000,
        headers: {
          //'Content-Type': "multipart/form-data; boundary=something",
          //"content-type": "application/x-www-form-urlencoded" 
          "Content-Type": 'application/json;charset=utf8'

        }
      })
      const fileName = image.path.split('/').pop();
      temps.post('/base64Img', { base64_URL: `data:${image.mime};base64,${image.data}`, filename: fileName })
        .then(res => {
          Toast.success('图片上传成功', 3000)
          setBase64(`${IP}/public/img/${fileName}`)
        }
        )
        .catch(err => { console.log('err =', err); Toast.fail('图片上传失败', 3000) })

      /* 
            const formData = new FormData();
            const file:any = {
              uri: image.path, // 本地文件路径
              type: image.mime,
              name: image.path.split('/').pop(), // 图片名称
            };
            console.log('file', file)
            formData.append('file', file);
      
      
            temps.post('/uploadImg', formData)
              .then(res => {
                Toast.success('图片上传成功', 4000);
                console.log('姜超111', res)
              })
              .catch(err => { console.log('err =', err); Toast.fail('图片上传失败', 3000) }) 
        */

    });
  }



  const styleObjNan = {
    backgroundColor: selectType === 1 ? 'red' : '#ccc'
  }

  const styleObjNv = {
    backgroundColor: selectType === 0 ? 'red' : '#ccc'
  }



  return (
    <View style={styles.setTop}>
      <View style={styles.svgAll}>
        <View style={styles.svgBox}>
          <TouchableOpacity onPress={() => { setSelectType(1) }} style={{ ...styles.svgMige, ...styles.setMargin, ...styleObjNan }} ><SvgXml xml={nv} width={50} height={70} /></TouchableOpacity>
          <TouchableOpacity onPress={() => { setSelectType(0) }} style={{ ...styles.svgMige, ...styleObjNv }}><SvgXml xml={nan} width={40} height={60} /></TouchableOpacity>
        </View>
      </View>
      <View>
        <View>
          <Input onChangeText={(name: React.SetStateAction<string>) => { setName(name) }} placeholder="请设置名称" />
        </View>

        <TouchableOpacity onPress={() => { console.log('现在日期'); setShow(true); }} >
          <View style={{ position: 'relative', }}>
            <Input disabled={true} placeholder="请选择生日" value={date} />
            <View style={{ width: '100%', height: '100%', position: 'absolute', left: 0, right: 0, }}></View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={picker} >
          <View style={{ position: 'relative', }}>
            <Input disabled={true} value={`当前城市: ${pickerData ? pickerData : location.city}`} />
            <View style={{ width: '100%', height: '100%', position: 'absolute', left: 0, right: 0, }}></View>
          </View>
        </TouchableOpacity>

        <View style={{ display: 'flex', alignSelf: 'center' }}>
          <THButton onClick={upImg} text="上传头像" />
        </View>
      </View>
      <Image
        source={{ uri: base64 }}
        style={{ width: 100, height: 100, borderRadius: 50 }}
      />


      <Time headTime={headTime} visible={show} cancel={() => { setShow(false) }} />
      <PickerComponent showPicker={showPicker} hiedPicker={hiedPicker} />
    </View>
  )

}
export default Index;

