import React from "react";
import s from './item.module.css'
import {Link} from "react-router-dom";


const ItemRecipe = (recipe) => {
    console.log('render miniRecipe')

    return (
        <div className={s.item}>
            <div ><img className={s.image} src={`${recipe.img}`} alt=""/></div>
            <div className={s.grid}>
                <div className={s.name}> Название {recipe.name}</div>
                <div className={s.cat}> Категория {recipe.category}</div>
                <div className={s.cat2}><span>Время приготовления: {recipe.time} минут</span></div>
                <div className={s.cat2}><span>Уровень сложности: {recipe.difficulty}</span></div>
                <div className={s.cat2}><span>Рейтинг : {recipe.stars}</span></div>
                <div className={s.blockDescr}>
                    <div className={s.describe}>{recipe.description}</div>
                </div>
                <div className={s.block}>
                    <button><Link to={`/recipes/${recipe.id}`} key={'id'} >готовить</Link></button>
                </div>
            </div>
        </div>
    )
}
export default ItemRecipe;