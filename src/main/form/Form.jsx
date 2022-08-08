import React, {useState} from 'react';
import style from './Form.module.css';
import axios from "axios";

const Form = ({getTask}) => {
    const [value, setValue] = useState({
        title: "",
        body: "",
        checked: false
    })

const getPost = async (obj) => {
    await axios.post("http://localhost:3001/task", obj).then((res => {
        getTask();
    }))
}

const getAddPost = (e) => {
        e.preventDefault();
        setValue(getPost(value));
        setValue({
            title: "",
            body: ""
        })
        
    }
    return (
        <form className={style.form}>
            <input type="text" className={style.input_add} value={value.title}
            onChange={e => setValue({...value, title : e.target.value})}/>
            <input type="text" className={style.input_add} value={value.body}
            onChange={e => setValue({...value, body : e.target.value})}/>
            <button className={style.btn_save} onClick={getAddPost}>Добавить</button>
        </form>
    );
};

export default Form;