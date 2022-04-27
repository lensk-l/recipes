import React from "react";
import './navigation2.css';
import  {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {fetchAllRecipes} from "../../../store/recipesAllSlice";


const Navigation = () => {

    const dispatch = useDispatch()
    return (
        <div className='wrap'>
            <nav className='nav'>
                <NavLink to={'/'}>Главная страница</NavLink>
                <NavLink to='/recipes' onClick={()=>dispatch(fetchAllRecipes())}>Все рецепты</NavLink>
                <NavLink to='/add-recipe'>Добавить свой рецепт</NavLink>
                <NavLink to='/auth'>Войти</NavLink>
            </nav>
        </div>
    )
}

export default Navigation;