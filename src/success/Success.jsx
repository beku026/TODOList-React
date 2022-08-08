import React from 'react';
import Carts from '../main/cart/Carts';
import s from './Success.module.css';

const Success = ({data, getPatch, getDelete}) => {
    
    return (
        <div className={s.carts}>
            {data.map(item => {
                if (item.checked) {
                    return <Carts getDelete={getDelete} getPatch={getPatch} title={item.title} key={item.id} body={item.body} id={item.id} checked={item.checked}/>
                }
            })}
        </div>
    );
};

export default Success;