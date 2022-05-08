import {combineReducers, configureStore} from '@reduxjs/toolkit'
import recipesAllSlice from './recipesAllSlice'


const rootReducers = combineReducers({
    recipesAllRed: recipesAllSlice,
})

const store = configureStore({
   reducer: {
       rootReducers,
   }});

export default store;
