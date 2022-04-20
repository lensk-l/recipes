import React from "react";
import s from './forgot.module.css'
import {Link} from "react-router-dom";


const Forgot = () => {
    return(
        <div className={s.block}>
            <div className={s.blockInh}></div>
            <div className={s.blockInh}><h3 className={s.title}>Забыли пароль?</h3></div>
            <div className={s.blockInh}>
                <label htmlFor="email" className={s.label}>введите email</label>
                <input id="email" type="email" className={s.input} datatype="email"/>
            </div>
            <div className={s.blockInh}>
                <input type="submit" className={s.but} value="восстановить пароль"/>
            </div>
            <div className={s.blockInh}>
                <Link to='/auth'> Я помню пароль</Link>
            </div>
            <div className={s.blockInh}></div>
            <div className={s.blockInh}></div>

        </div>

    )
}
export default Forgot;