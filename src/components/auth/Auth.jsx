import React from "react";
import './formStyle.css'
import SingUp from "./SingUp";
import SingIn from "./SingIn";
import {useLocation} from "react-router-dom";
import Forgot from "./forgot/Forgot";


const Auth = () => {
    const location = useLocation();

    return (
        <div className={'auth'}>
            <div className="login-wrap">
                {location.pathname === '/auth/forgot' ? <Forgot/> :
                    <div className="login-html">
                        <input id="tab-1" type="radio" name="tab" className="sign-in" checked/>
                        <label htmlFor="tab-1" className="tab">Войти</label>
                        <input id="tab-2" type="radio" name="tab" className="sign-up"/>
                        <label htmlFor="tab-2" className="tab">Регистрация</label>
                        <div className="login-form">
                            <SingIn/>
                            <SingUp/>
                        </div>
                    </div>
                }
            </div>
        </div>

)
}

export default Auth;