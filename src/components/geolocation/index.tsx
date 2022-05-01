import * as React from 'react';
import { Platform, PermissionsAndroid } from 'react-native';
import { Geolocation, init, addLocationListener, start, stop } from "react-native-amap-geolocation";
import axios from 'axios';
class ClockedInList {


  async geolocationInit() {

   await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
    ]);

    await init({
      ios: "7fe4f20bf4cf0ad0d29a77f7247bf13d", //ios模拟器不行, 应该真机可以
      android: "7c7d163a053ff0c9c603bb1d793630f4"   // 传入AMAP_KEY
    });


   /*  return new Promise((resolve,reject) => {
      Geolocation.getCurrentPosition((data) => {
        console.log('data =', data);
        resolve(resolve);
      }, (error) => {
        reject(error)
        console.log('定位报错 =', error);
      })
    }) */


  };

  //componentDidMount() {
  //  this.geolocationInit();
  //}

  async requestFetchGetList() {
    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition((data) => {
        console.log('datassss =', data);
        resolve(data);
      }, (error) => {
        console.log('baco =', JSON.stringify(error))
        reject(error)
      }, {
        enableHighAccuracy: true,
        maximumAge:0,
        timeout:0
      })
    })
  }

  async location(longitude, latitude) {
    console.log('longitude =', longitude);
    console.log('latitude =', latitude);
    const res1 = await axios.get('https://restapi.amap.com/v3/assistant/coordinate/convert', {
      params: {
        locations: `${longitude},${latitude}`,
        key: "ff2edec87b1d9c88ab8924633e37886f",
        coordsys: 'gps',
        output: 'json'
      }
    })
    const result = res1.data;
    let array = result.locations.split(',')
    const res: any = await axios.get(`https://restapi.amap.com/v3/geocode/regeo`,
      {
        //params: { location: `${array[0]},${array[1]}`, key: "ff2edec87b1d9c88ab8924633e37886f", }
        //params: { location: `${array[0]},${array[1]}`, key: "ff2edec87b1d9c88ab8924633e37886f", }
        params: { location: `116.310003,39.991957`, key: "ff2edec87b1d9c88ab8924633e37886f", }
      }
    )
    console.log('res.data1 =', res)
    console.log('res1 =', res1);
  }


  /* 
    getPositions=()=>{
      //获取位置再得到城市先后顺序，通过Promise完成
      return new Promise((resolve, reject) => {
  
          Geolocation.getCurrentPosition(
              location => {
                  this.setState({
                      longitude: location.coords.longitude,//经度
                      latitude: location.coords.latitude,//纬度
                  });
                  fetch(`https://restapi.amap.com/v3/assistant/coordinate/convert?locations=${this.state.longitude},${this.state.latitude}&coordsys=gps&output=json&key=${config.GaoDeKey.key}`, { method: "GET" })
                      .then(response => response.json())
                      .then((jsonDa) => {
                          let newVar = jsonDa.locations.split(',')
                              this.setState({
                                  longitude: newVar[0],//经度
                                  latitude: newVar[1],//纬度
                              });
                          //访问网络开始
                          fetch('http://restapi.amap.com/v3/geocode/regeo?key='+config.GaoDeKey.key+'&location='+this.state.longitude+','+this.state.latitude+'&radius=1000&extensions=all&batch=false&roadlevel=0', {
                              method: "POST",
                              headers: {
                                  "Content-Type": "application/x-www-form-urlencoded"
                              },
                              body: ``
                          })
                              .then((response) => response.json())
                              .then((jsonData) => {
                                  try {
                                      //Toast.show(jsonData.result.formatted_address+jsonData.result.sematic_description)
                                      this.setState({
                                          position:jsonData.regeocode.formatted_address,
                                      });
                                  }catch (e) {
  
                                  }
                              })
                              .catch((error) => {
                                  console.error(error);
                              });
                          //访问网络结束
                      })
                      .catch(error => {
                          reject(error);
                      });
  
  
              },
              error => {
                  reject(error);
                  if(error.code==2){
                      ToastAndroid.show('定位失败，请查看手机是否开启GPS定位服务',ToastAndroid.SHORT);
                  }else if(error.code==3){
                      ToastAndroid.show("定位超时，请尝试重新获取定位",ToastAndroid.SHORT);
                  }else{
                      ToastAndroid.show("定位失败："+error.message,ToastAndroid.SHORT);
                  }
              }, {
                  enableHighAccuracy: false,
                  timeout: 5000,
                  maximumAge: 10000
              }
          );
  
      })
  
  } */


  /* async test() {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      await Geolocation.init({
        ios: "3a13625b5f789532f77cb87fe625d587",
        android: "493a8cc84015339d9ba0735e525da943"
      });

      Geolocation.setOptions({
        interval: 3000,
        distanceFilter: 20
      });

      Geolocation.addLocationListener(location => {
        console.log('给给解决')
        console.log(location, numTime++);
        let gpsData = { ...location };
        gpsData.userName = `大师兄`;
        insertGps(gpsData);
      });

      Geolocation.start();
    }
  } */


}

export default ClockedInList;
