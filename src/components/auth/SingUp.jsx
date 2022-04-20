import React from "react";
import './formStyle.css'
import {Link} from "react-router-dom";

const SingUp = () => {
    return(
        <div className="sign-up-htm">
            <div className="group">
                <label htmlFor="user" className="label">UserName</label>
                <input id="user" type="text" className="input"/>
            </div>
            <div className="group">
                <label htmlFor="pass" className="label">Password</label>
                <input id="pass" type="password" className="input" data-type="password"/>
            </div>
            <div className="group">
                <label htmlFor="pass" className="label">Repeat Password</label>
                <input id="pass" type="password" className="input" data-type="password"/>
            </div>
            <div className="group">
                <label htmlFor="pass" className="label">Email Address</label>
                <input id="pass" type="text" className="input"/>
            </div>
            <div className="group">
                <input type="submit" className="button" value="Зарегистрироватся"/>
            </div>
            <div className="hr"></div>
            <div className="foot-lnk">
                <label htmlFor="tab-1"><Link to={'/auth'}>Уже зарегестрирован?</Link></label>
            </div>
        </div>
    )
}
export default SingUp;