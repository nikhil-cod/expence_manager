import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit'
import cardItems from './Reducer'
// export default configureStore({
//   reducer: {
   
//   },
// })

export default configureStore({
  reducer:cardItems
})