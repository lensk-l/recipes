import React from "react";
import  s from './addItem.module.css'
import Select from "react-select";

const AddRecipe = () => {
    const options = [
        { value: 1, label: 1 },
        { value: 2, label: 2 },
        { value: 3, label: 3 },
        { value: 4, label: 4 },
        { value: 5, label: 5 }
    ];
    const optionsCategory = [
        { value: 1, label: 'Суп' },
        { value: 2, label: 'Основное блюдо' },
        { value: 3, label: 'Салат'},
        { value: 4, label: 'Напиток' },
        { value: 5, label: 'Другое' }
    ];
    return <div className={s.addForm}>
        <div className={s.loginWrap}>
            <div className={s.loginHtml}>
                <div className={s.loginForm}>
                    <div className="">
                        <h3 className={s.title}>Добавить рецепт</h3>
                        <div className={`${s.group} ${s.flex}`}>
                            <label htmlFor="name" className={s.label}>название</label>
                            <input id="name" type="text" className={s.input}/>
                            <label htmlFor="category"className={s.label}>категория</label>
                            <Select
                                theme={(theme) => ({
                                    ...theme,
                                    margin: 0,
                                    borderRadius: 0,
                                    colors: {
                                        ...theme.colors,
                                        primary25: 'rgba(102, 94, 91, 0.63)',
                                        primary: 'rgba(102, 94, 91, 1)',
                                    },
                                })}
                                options={optionsCategory}
                            />
                        </div>
                        <div className={`${s.group} ${s.flex}`}>
                            <label htmlFor="difficulty " className={s.label}>сложность</label>
                            <Select
                                    theme={(theme) => ({
                                        ...theme,
                                        margin: 0,
                                        borderRadius: 0,
                                        colors: {
                                            ...theme.colors,
                                            primary25: 'rgba(102, 94, 91, 0.63)',
                                            primary: 'rgba(102, 94, 91, 1)',
                                        },
                                    })}
                                    options={options}
                            />
                            <label htmlFor="img " className={s.label}>Фото блюда</label>
                            <input id="img " type="file" className={s.input} />
                        </div>
                        <div className={s.group}>
                            <label htmlFor="description" className={s.label}>способ приготовление</label>
                            <textarea id="description" className={s.input}/>
                        </div>
                        <div className={s.group}>
                            <input type="submit" className={s.button} value="Отправить"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default AddRecipe;