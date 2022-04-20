import React, {useEffect} from "react";
import s from './itemRecipe.module.css'
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchOneRecipe} from "../../store/recipesSlice";




const RecipeItem = () => {
    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchOneRecipe((id)))
    },[dispatch]);

    const recipe = useSelector(state => state.rootReducers.recipesRed.recipesAll);
    console.log(recipe)

    return (
        <div className={s.item}>
            <div className={s.grid}>
                <div className={s.image}><img className={s.image} src={`${recipe.img}`}/></div>
                <div className={s.name}>{recipe.name}</div>
                <div className={s.cat}>{recipe.category}</div>
                <div className={s.cat2}><span>Время приготовления:{recipe.time}минут</span></div>
                <div className={s.cat3}><span>Уровень сложности: {recipe.difficulty}</span></div>
                <div className={s.cat4}><span>Рейтинг : {recipe.stars} звезд</span></div>
                <div className={s.block}>
                    <div><p>Начало рецепта.....</p></div>
                </div>
            </div>
        </div>
    )
}
export default RecipeItem;