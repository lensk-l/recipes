import React from "react";
import './navigation2.css';
import  {NavLink} from "react-router-dom";


const Navigation = () => {

    return (
        <div className='wrap'>
            <nav className='nav'>
                <NavLink to={'/'}>Главная страница</NavLink>
                <NavLink to='/recipes'>Все рецепты</NavLink>
                <NavLink to='/add-new'>Добавить свой рецепт</NavLink>
                <NavLink to='/auth'>Войти</NavLink>
            </nav>
        </div>
    )
}

export default Navigation;