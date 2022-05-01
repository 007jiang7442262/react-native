


import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../src/components/FunctionTest/reducer';
import dataTest from '../src/components/ClassTest/reducer';
export default configureStore({
  reducer: {
    counter: counterReducer,
    dataTest: dataTest
  },
})