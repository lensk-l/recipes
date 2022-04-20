import React from "react";
import Navigation from "./navigation/Navigation";
import s from './header.module.css';
import {Outlet} from "react-router-dom";
import FindField from "./find-field/FindField";

const Layout = () => {



    return(
        <>
        <div className={s.headerBlock}>
            <Navigation/>
            <h1>Книга рецептов</h1>
        </div>
            <FindField/>
            <Outlet/>
        </>
    )
}
export default Layout;