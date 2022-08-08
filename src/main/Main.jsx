import React from 'react';
import Carts from './cart/Carts';
import Form from './form/Form';

const Main = ({data, getPatch, getDelete, getTask}) => {

    return (
        <main className="main">
            <h1 className="main-title">Todos</h1>
            <Form getTask={getTask}/>
            <div className="carts">
                {data.map(item => {
                return <Carts getDelete={getDelete} getPatch={getPatch} title={item.title} key={item.id} body={item.body} id={item.id} checked={item.checked}/>
                })}
            </div>
        </main>
    );
}

export default Main;