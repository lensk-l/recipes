import React from "react";
import './formStyle.css'
import {Link} from "react-router-dom";

const SingIn = () => {
    return(
        <div className="sign-in-htm">
            <div className="group">
                <label htmlFor="user" className="label">Email</label>
                <input id="user" type="text" className="input"/>
            </div>
            <div className="group">
                <label htmlFor="pass" className="label">Password</label>
                <input id="pass" type="password" className="input" data-type="password"/>
            </div>
            <div className="group">
                <input id="check" type="checkbox" className="check"/>
                <label htmlFor="check"><span className="icon"></span>Запомнить меня</label>
            </div>
            <div className="group">
                <input type="submit" className="button" value="Войти"/>
            </div>
            <div className="hr"></div>
            <div className="foot-lnk">
                <Link to='/auth/forgot'>Забыли пароль?</Link>
            </div>
        </div>
    )
}
export default SingIn;