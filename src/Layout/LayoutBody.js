import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Default from '../components/Default/DefaultMain'; // Adjust the path as per your file structure
import Main from '../components/Main'
function Body( {isNavOpen}) {
  return (
    <div style={{
      marginLeft: isNavOpen ? '300px' : '0px',
      overflow: 'auto'
    }}>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path="/default" element={<Default />} />
      </Routes>
    </div>
  );
}
export default Body;