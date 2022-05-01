module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-decorators', {'legacy': true}],  //用于es7 语法装饰器
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        extensions: ['.js', '.png'],
        alias: {
          //
          'react-native/Libraries/Animated/src/Easing': 'react-native/Libraries/Animated/Easing',
        },
      },
    ]
  ],

};
