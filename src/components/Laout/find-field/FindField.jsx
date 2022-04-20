import React from 'react';
import s from './findField.module.css';
import MySelect from "../../common-components/Select/Select";


const FindField = () => {
    return(
            <div className={s.fieldBlock}>
                <div className={s.leftPart}><div><p>Хочешь найти рецепт? Введи названия блюда или ингридиент</p></div></div>
                <div className={s.rightPart}><div>
                   <MySelect/>
                </div>
                    <button className={s.customBtn}>Найти рецепт</button></div>
            </div>
    )
}
export default FindField;