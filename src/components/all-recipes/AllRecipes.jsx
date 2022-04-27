import React, {useEffect, useLayoutEffect, useState} from "react";
import s from "../latest-receipes/latatest.module.css";
import ItemRecipe from "../recipeItemSmallBlock/ItemRecipe";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllRecipes} from "../../store/recipesAllSlice";


const AllRecipes = () => {
    const dispatch = useDispatch();

    useLayoutEffect(()=> {
        dispatch(fetchAllRecipes())
    }, [dispatch]);

    const recipes = useSelector(state => state.rootReducers.recipesAllRed.recipesAll)

    return (

        <div>
            <h3>Все рецепты</h3>
            <div className={s.block}>
                {recipes.map((recipe) => (
                    <ItemRecipe
                        {...recipe}
                        key={recipe.id}
                    />))}
            </div>
        </div>
    )
}
export default AllRecipes;