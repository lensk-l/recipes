import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchAllRecipes = createAsyncThunk(
    'recipes/fetchAllRecipes',
    async (_, {dispatch}) => {
        let response = await fetch('http://localhost:3001/recipes');
        const data =  await response.json();
        dispatch(setAllRecipes(data))
        return data;
    }
);
export const fetchAllCetegories = createAsyncThunk(
    'recipes/fetchCategories',
    async (_, ) => {
        let response = await fetch('http://localhost:3001/categories');
        return  await response.json();
    }
);

export const fetchOneRecipe = createAsyncThunk(
    'recipes/fetchOneRecipe',
    async(id) => {
        let response = await fetch(`http://localhost:3001/recipes/${id}`);
        return await response.json();
    }
)

export const fetchAddRecipe = createAsyncThunk(
    'recipes/addRecipe',
    async (data, {dispatch}) => {
        let response = await fetch('http://localhost:3001/recipes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: data
            }),
            recipe = await response.json();
        dispatch(addNewRecipe(recipe));
    }
);

const recipesAllSlice = createSlice({
    name: 'recipes',
    initialState: {
        recipesAll: [],
    },
    reducers: {
        setAllRecipes(state, action){
            state.recipesAll = action.payload
        },
        getAllRecipes(state){
            return state.recipesAll;
        },
        addNewRecipe(state, action){
            state.recipesAll.push(action.payload);
        }
    },
    extraReducers: {},
});


export const {setAllRecipes, addNewRecipe} = recipesAllSlice.actions;

export default recipesAllSlice.reducer;