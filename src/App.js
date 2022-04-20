import Layout from "./components/Laout/Layout";
import './App.css'
import LatestRecipes from "./components/latest-receipes/Latestrecipes";
import React from "react";
import {Route, Routes} from "react-router-dom";
import Auth from "./components/auth/Auth";
import AllRecipes from "./components/all-recipes/AllRecipes";
import AddRecipe from "./components/add-item/AddRecipe";
import RecipeItem from "./components/recipeItemBigBlock/RecipeItem";



function App() {


    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<LatestRecipes />}/>
                    <Route path="auth/*" element={<Auth/>}/>
                    <Route path="add-new" element={<AddRecipe/>}/>
                    <Route path="recipes" element={<AllRecipes/>}/>
                    <Route path="recipes/:id" element={<RecipeItem/>}/>
                </Route>
            </Routes>

        </div>
    );
}

export default App;

