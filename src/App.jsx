import React, {useState, useEffect} from 'react';
import './App.css';
import { Link, Routes, Route, } from 'react-router-dom';
import Main from './main/Main';
import Success from './success/Success';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([])

    useEffect(()=> {
        getTask();
    }, [])
    
    const getTask =  async () => {
        return await axios.get("http://localhost:3001/task").then(res => setData(res.data));
    } 

    const getPatch =  async (id, obj) => {
        return await axios.patch(`http://localhost:3001/task/${id}`, obj)
        .then(res => {getTask()})
    } 

    const getDelete =  async (id) => {
        return await axios.delete(`http://localhost:3001/task/${id}`)
        .then(res => {getTask()})
    } 
  return (
    <div>
      <nav className='navigation'>
        <Link to="/" className='link'>Main</Link><br />
        <Link to="/succes" className='link'>Success</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Main data={data} getPatch={getPatch} getDelete={getDelete} getTask={getTask}  />} />
        <Route path='succes' element={<Success data={data} getPatch={getPatch} getDelete={getDelete}/> } />
      </Routes>
    </div>
  );
};

export default App;