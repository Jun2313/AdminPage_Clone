import { useState } from 'react';
import { Link } from 'react-router-dom'

function Nav({isOpen}) {
  
  return (
    <>
    <div style={{ overflowY: 'hidden' }}>
      <div id="hamburger-menu" className={isOpen ? 'open' : ''}>
        <ul className='gnb'>
          <li style={{marginTop:'30px', textAlign: 'left', marginLeft: '20px'}}>
            <h4>Interface</h4>
          <li style={{marginTop: '30px', textAlign:'center'}}>
            <Link to="/">Overview</Link>
          </li>
          <li style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '30px'
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