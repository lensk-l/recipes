import React, {useEffect, useState} from "react";
import s from './itemRecipe.module.css'
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import { fetchOneRecipe} from "../../store/recipesAllSlice";



const RecipeItem = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false);
    const [recipe, setRecipe] =useState([])

    useEffect(() => {
        dispatch(fetchOneRecipe(id)).then(response => {
            setRecipe(response.payload)
        })
    }, [dispatch]);


    return (
        <div className={s.item}>
            <div className={s.grid}>
                <div className={s.image}>
                    <img className={s.image} src={`${recipe.img}`}/>
                </div>
                     <div className={s.name}>{recipe.name}</div>
                <div className={s.cat}>{recipe.category}</div>
                <div className={s.cat2}><span>Время приготовления:{recipe.time}минут</span></div>
                <div className={s.cat5}><span>Уровень сложности: {recipe.difficulty}</span></div>
                <div className={s.cat3}><span>Ингридиенты:</span>
                    { recipe.ingredients
                        ?(recipe.ingredients.map(item => (
                            <li key={item}>
                                {item}
                            </li>)))
                        : (recipe.ingredients = [])
                    }
                </div>
                <div className={s.cat4}><span>Рейтинг : {recipe.difficulty} звезд</span></div>
                <div className={s.block}>
                    <div><p>{recipe.description}</p></div>
                </div>
                <div>
                    <button onClick={() => setEdit(!edit)}>Изменить рецепт</button>
                </div>
            </div>
        </div>
    )
}
export default RecipeItem;