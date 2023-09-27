import { configureStore } from '@reduxjs/toolkit'
import allStates from './Reducer';

export default configureStore({
  reducer:allStates
})