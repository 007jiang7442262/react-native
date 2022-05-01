import * as React from 'react';
import  { Component, useState } from 'react';
import { Text, View } from 'react-native';
import ClockedInList from '../../components/geolocation';

let i = 0;
export default () =>  {

  const [datas, setDatas] = useState<any>({latitude:'000', longitude:'0000'});//经纬度
  const [textVal, setTextVal] = useState<number>(0)
  const [location, setLocation] = useState<any>({address: '', city: ''}) //城市
  const onClick = async  () => {
    const geolocation  = new ClockedInList();
  
   
     await geolocation.geolocationInit();
     const data:any = await geolocation.requestFetchGetList();
     
    console.log('datasf=', data.coords);
    setLocation(data.location);
    setDatas(data.coords);
    setTextVal(++i);
  }

    return (
      <View style={{paddingTop: 100}}>
        <Text onPress={onClick}> 急急急 33</Text>
        <Text > latitude : {datas.latitude}</Text>
        <Text > longitude : {datas.longitude}</Text>
        <Text>{textVal}</Text>
        <Text>当前城市: {location.city}</Text>
        <Text>详情地址: {location.address}</Text>
      </View>
    )
  
}
