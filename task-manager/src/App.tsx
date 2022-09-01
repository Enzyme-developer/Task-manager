import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from  'react-router-dom'
import Tasks from './components/Tasks';
import SingleTask from './components/SingleTask';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Tasks />} />
            <Route path ='/:id' element={<SingleTask />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
