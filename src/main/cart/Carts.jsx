import React, {useState} from 'react';
import ModalWindow from '../modalWindow/ModalWindow';
import style from './Carts.module.css';

const Carts = ({ body, title, getDelete, id, getPatch, checked}) => {
    const [update, setUpdate] = useState(false);
    function openModal () { setUpdate(true) }
    function closeModal () { setUpdate(false) }
    function checkbox () {
        if (checked) {
            getPatch(id, {checked: false});
        }else {
            getPatch(id, {checked: true});
        }
    }
    return (
        <>
            <div className={style.cart}>
                <div className={style.cart_header}>
                    <h3 className={style.cart_title}>{title}</h3>
                    <label className={style.label}>
                        <input type="checkbox" checked={checked} className={style.checkbox}
                        onChange={checkbox}
                        />
                        <span className={style.input_border}></span>
                    </label>
                </div>
                <p className={style.cart_body}>{body}</p>
                <div className={style.cart_footer}>
                    <button className={style.cart_update} onClick={openModal} >Upadate</button>
                    <button className={style.cart_delete} onClick={() => getDelete(id)} >Delete</button>
                </div>
            </div>
            <ModalWindow key={id}  title={title} body={body} id={id} getPatch={getPatch} up={update} close={closeModal} />
        </>
    );
};

export default Carts;