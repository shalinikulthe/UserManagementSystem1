
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AddEdit from './components/addEdit';
import View from './components/view';
import Update from './components/update';
import Home from './components/home'; // Corrected import path for Home component
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/addedit" element={<AddEdit />} />
        <Route path="/viewpage/:id" element={<View />} />
        <Route path="/update/:id" element={<Update />} />
        {/* Route to Home component */}
      </Routes>
    </div>
  );
}

export default App;

