import {createSlice} from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
    },
    reducers: {
        createNewUser(){},
        loginUser(){},
        rememberPass(){},
    }
})

export const {createNewUser, loginUser, rememberPass} = usersSlice.actions;

export default usersSlice.reducer;


// import {createSlice} from "@reduxjs/toolkit";
//
// const todoSlice = createSlice({
//     name: 'todos',
//     initialState: {
//         todos: [],
//     },
//     reducers: {
//         addTodo(state, action) {
//             state.todos.push({
//                 id: new Date().toISOString(),
//                 text: action.payload.text,
//                 status: false,
//             })
//         },
//         removeTodo(state, action) {
//             state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
//         },
//         changeStatus(state, action) {
//             const toggledTodo = state.todos.find(todo => todo.id === action.payload.id);
//             toggledTodo.status = !toggledTodo.status;
//         },
//     }
// })
//
// export const {addTodo, removeTodo, changeStatus} = todoSlice.actions;
//
// export default todoSlice.reducer;



///////////////////
// const authReducer = (state = initialState, action) => {
//
//     switch (action.type) {
//         case SET_USER_DATA:
//             return {
//                 ...state,
//                 ...action.userData,
//             }
//         case SET_LOGIN_DATA:
//             return {
//                 ...state,
//                 ...action.userData,
//             }
//         default:
//             return state;
//     }
//
// }



//////////////////////////////////






//
// export const logInThunk = (email, password, rememberMe) => async (dispatch) => {
//     let response = await authAPI.logeIn(email, password, rememberMe);
//
//     if (response.data.resultCode === 0) {
//         dispatch(isAuthThunk());
//     } else {
//         let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
//         dispatch(stopSubmit('login', {_error: message}));
//     }
//
// }
//
// export const logeOutThunk = () => async (dispatch) => {
//     let response = await authAPI.logeOut();
//
//     if (response.data.resultCode === 0) {
//         dispatch(setAuthUserData(null, null, null, false))
//     }
// }