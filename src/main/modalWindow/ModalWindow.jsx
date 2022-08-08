import React, {useState} from 'react';
import style from './Modal.module.css'

const ModalWindow = ({title, body, up, getPatch, id, close }) => {
    const [value, setValue] = useState({
        title: title,
        body: body
    })
    
    return (
        <div className={ up ? style.modal_open : style.modal_close} onClick={close}>
            <div className={style.modal_content} onClick={(event) => {event.stopPropagation();}}>
                <span className={style.close} onClick={close}>X</span>
                <form className={style.form}>
                    <input type="text" className={style.input_add} value={value.title} onChange={e => setValue({...value, title : e.target.value})}/>
                    <input type="text" className={style.input_add} value={value.body} onChange={e => setValue({...value, body : e.target.value})}/>
                    <button className={style.btn_save}  onClick={(e) => { e.preventDefault(); getPatch(id, value); close(); }}>Добавить</button>
                </form>
            </div>
        </div>
    );
};

export default ModalWindow;