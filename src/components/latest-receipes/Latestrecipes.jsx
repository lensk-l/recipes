import React from "react";
import ItemRecipe from "../recipeItemSmallBlock/ItemRecipe";
import s from './latatest.module.css';

const Latestrecipes = () => {
    return (
        <div>
            <h3>Последние добавленные рецепты</h3>
            <div className={s.block}>
                <ItemRecipe/>
                <ItemRecipe/>
                <ItemRecipe/>
                <ItemRecipe/>
            </div>
        </div>

    )
}
export default Latestrecipes;