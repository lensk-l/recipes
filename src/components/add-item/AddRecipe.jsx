import React, {useEffect, useState} from "react";
import s from './addItem.module.css'
import {useFormik} from "formik";
import {fetchAddRecipe, fetchAllCetegories, fetchAllRecipes,} from "../../store/recipesAllSlice";
import {useDispatch} from "react-redux";
import {useNavigate} from 'react-router-dom';


const AddRecipe = () => {

    const [categories, setCategories] = useState([]);
    const [file, setFile] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const SavePhoto = (e) => {
        if (e.target.files.length) {
            setFile(e.target.files[0]);
        }
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            difficulty: '',
            category: '',
            time: 0,
            img: {},
            description: '',
            ingredients: '',
        },
        onSubmit: values => {
            values.img = {name: file.name, size: file.size};
            values.ingredients = values.ingredients.toString().split(' ');
            console.log(values.ingredients)
            let data = JSON.stringify(values, null, 2);
            dispatch(fetchAddRecipe(data))
                .then(() => {
                        dispatch(fetchAllRecipes())
                            .then(response => {
                                navigate(`/recipes/${response.payload.length}`)
                            })
                    }
                );
        },
    });


    useEffect(() => {
        dispatch(fetchAllCetegories()).then(response => {
            setCategories(response.payload)
        })
    }, [dispatch]);


    return (
        <>
            <div className={s.addForm}>
                <div className={s.loginWrap}>
                    <div className={s.loginHtml}>
                        <div className={s.loginForm}>
                            <form onSubmit={formik.handleSubmit}>
                                <div className="">
                                    <h3 className={s.title}>Добавить рецепт</h3>
                                    <div className={`${s.group} ${s.flex}`}>
                                        <label htmlFor="img" className={s.label}>Картинка</label>
                                        <input id="img"
                                               type="file"
                                               onChange={SavePhoto}
                                               className={s.input}/>
                                        <label htmlFor="name" className={s.label}>название</label>
                                        <input id="name"
                                               type="text"
                                               onChange={formik.handleChange}
                                               onBlur={formik.handleBlur}
                                               value={formik.values.name}
                                               className={s.input}/>
                                        {formik.errors.name ? <div>{formik.errors.name}</div> : null}
                                        <label htmlFor="time" className={s.label}>Время приготовления (минут)</label>
                                        <input id="time"
                                               type="number"
                                               onChange={formik.handleChange}
                                               onBlur={formik.handleBlur}
                                               value={formik.values.time}
                                               className={s.input}/>
                                        {formik.errors.name ? <div>{formik.errors.name}</div> : null}
                                        <label htmlFor="category" className={s.label}>Категория</label>
                                        <select
                                            name="category"
                                            id="category"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.category}>
                                            {categories.map(el => (
                                                <option key={el.id} value={el.category}>{el.alias}</option>))}
                                            <option disabled value="">Выберете категорию</option>
                                        </select>
                                    </div>
                                    <div className={`${s.group} ${s.flex}`}>
                                        <label htmlFor="difficulty " className={s.label}>Сложность</label>
                                        <select
                                            id="difficulty"
                                            name="difficulty"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.difficulty}
                                        >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option disabled value="">Выберете сложность</option>
                                        </select>

                                    </div>
                                    <div className={`${s.group} ${s.flex}`}>
                                        <label htmlFor="ingredients " className={s.label}>Ингридиенты:</label>
                                        <input
                                            id="ingredients"
                                            name="ingredients[0]"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.ingredients}
                                            className={s.input}
                                        />
                                    </div>
                                    <div className={s.group}>
                                        <label htmlFor="description" className={s.label}>способ приготовление</label>
                                        <textarea name="description"
                                                  id="description"
                                                  onChange={formik.handleChange}
                                                  onBlur={formik.handleBlur}
                                                  value={formik.values.description}
                                                  className={s.input}/>
                                    </div>
                                    <div className={s.group}>
                                        <button type="submit" className={s.button} value="Отправить">Загрузить</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddRecipe;