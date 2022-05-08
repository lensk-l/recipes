import Layout from "./components/Laout/Layout";
import './App.css'
import LatestRecipes from "./components/latest-receipes/Latestrecipes";
import React, {useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import Auth from "./components/auth/Auth";
import AllRecipes from "./components/all-recipes/AllRecipes";
import AddRecipe from "./components/add-item/AddRecipe";
import RecipeItem from "./components/recipeItemBigBlock/RecipeItem";
import {useDispatch} from "react-redux";
import {fetchAllRecipes} from "./store/recipesAllSlice";



function App() {
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(fetchAllRecipes())
    },[]);

    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<LatestRecipes />}/>
                    <Route path="auth/*" element={<Auth/>}/>
                    <Route path="add-new" element={<AddRecipe/>}/>
                    <Route path="recipes" element={<AllRecipes/>}/>
                    <Route path="add-recipe" element={<AddRecipe/>}/>
                    <Route path="recipes/:id" element={<RecipeItem/>}/>
                </Route>
            </Routes>

        </div>
    );
}

export default App;

