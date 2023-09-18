import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Default from '../components/Dashbords/Default/DefaultMain';
import Minimal from '../components/Dashbords/Minimal/MinimalMain';

import LayoutsMain from '../components/Layouts/LayoutsMain';
import DarkTheme from '../components/Layouts/DarkTheme';
import WhiteTheme from '../components/Layouts/WhiteTheme';
import StaticNavigation from '../components/Layouts/StaticNavigation';

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
        <Route path="/minimal" element={<Minimal />} />
        <Route path="/darktheme" element={<DarkTheme />} />
        <Route path="/whitetheme" element={<WhiteTheme/>} />
        <Route path="/StaticNavigation" element={<StaticNavigation />}/>
        {/* <Route path='/layoutsmain' element={<LayoutsMain />} /> */}
      </Routes>
    </div>
  );
}
export default Body;