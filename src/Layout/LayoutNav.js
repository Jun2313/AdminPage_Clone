import { useState } from 'react';
import { Link } from 'react-router-dom'

function Nav({isOpen}) {
  
  return (
    <>

    <div>
      <div id="hamburger-menu" className={isOpen ? 'open' : ''}>
        <ul className='gnb'>
          <li><h4>Interface</h4>
          <li style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>Dashboards
            <ul className='subGnb'>
            <li><Link to="/default">Default</Link></li>
            <li><Link to="/minimal">Minimal</Link></li>
            <li><Link to="/analytics">Analytics</Link></li>
            <li><Link to="/accounting">Accounting</Link></li>
            <li><Link to="/orders">Orders</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            </ul>
          </li>
          </li>
        </ul>
      </div>
    </div>
    </>
  );
}

export default Nav;