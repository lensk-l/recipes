import {combineReducers, configureStore} from '@reduxjs/toolkit'
import recipesSlice from './recipesSlice'


const rootReducers = combineReducers({
    //users: usersSlice,
    recipesRed: recipesSlice,
})

const store = configureStore({
   reducer: {
       rootReducers,
   }});

export default store;
