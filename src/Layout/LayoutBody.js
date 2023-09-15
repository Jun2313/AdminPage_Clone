import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Default from '../components/Default/DefaultMain'; // Adjust the path as per your file structure

function Body( {isNavOpen}) {
  return (
    <div style={{
      marginLeft: isNavOpen ? '300px' : '0px'
    }}>
      <Routes>
        <Route path="/default" element={<Default />} />
      </Routes>
    </div>
  );
}
export default Body;