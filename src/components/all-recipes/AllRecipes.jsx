import React, {useEffect} from "react";
import s from "../latest-receipes/latatest.module.css";
import ItemRecipe from "../recipeItemSmallBlock/ItemRecipe";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllRecipes} from "../../store/recipesSlice";


const AllRecipes = () => {

    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(fetchAllRecipes())
    }, [dispatch])


   const recipes = useSelector(state => state.rootReducers.recipesRed.recipesAll);

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