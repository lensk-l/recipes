import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchAllRecipes = createAsyncThunk(
    'recipes/fetchRecipes',
    async () => {
        const response = await fetch('http://localhost:3001/recipes');
        return await response.json();
    }
);

export const fetchOneRecipe = createAsyncThunk(
    'recipes/fetchOneRecipe',
    async (id, {dispatch}) => {
        let response = await fetch(`http://localhost:3001/recipes/${id}`);
        const data = await response.json()
        dispatch(getOneRecipe(data))
    }
);


const recipesSlice = createSlice({
    name: 'recipes',
    initialState: {
        recipesAll: [],
        status: null,
    },
    reducers: {
        getOneRecipe(state, action) {
            state.recipesAll = action.payload
            state.status = 'dispatch getOneRec';
            //TODO: сделать копию стейта!
        },
    },
    extraReducers: {
        [fetchAllRecipes.pending]: (state) => {
            state.status = 'download';
        },
        [fetchAllRecipes.fulfilled]: (state, action) => {
            state.status = 'success';
            state.recipesAll = action.payload
        },
        [fetchAllRecipes.rejected]: (state) => {
            state.status = 'error';
        },
        [fetchOneRecipe.fulfilled]: (state) => {
            state.status = 'upd';
        },
    },
})


const { getOneRecipe} = recipesSlice.actions;

export default recipesSlice.reducer;