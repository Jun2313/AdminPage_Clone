import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';

function ContextAwareToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey),
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <button
      type="button"
      style={{ backgroundColor: isCurrentEventKey ? 'transparent' : 'transparent' }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

function Nav({ isOpen }) {
  return (
    <>
      <div style={{ overflowY: 'hidden' }}>
        <div id="hamburger-menu" className={isOpen ? 'open' : ''}>
          <ul className='gnb'>
            <li style={{ marginTop: '30px', textAlign: 'left', marginLeft: '20px' }}>
              <h4>Interface</h4>
            </li>
            <li style={{ margin: '30px 0', textAlign: 'center', fontSize:'1.4rem' }}>
              <Link to="/">Overview</Link>
            </li>
            <Accordion defaultActiveKey="0">
              <Card style={{ border: 'none', background: 'transparent' }}>
                <Card.Header style={{ padding: '0', border: 'none', fontSize: '1.2rem'}}>
                  <ContextAwareToggle eventKey="0">Dashboards</ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body style={{ padding: '0', border: 'none', display: 'flex', justifyContent: 'center' }}>
                    <ul className='subGnb' style={{marginBottom: '20px'}}>
                      <li><Link to="/default">Default</Link></li>
                      <li><Link to="/minimal">Minimal</Link></li>
                      <li><Link to="/analytics">Analytics</Link></li>
                      <li><Link to="/accounting">Accounting</Link></li>
                      <li><Link to="/orders">Orders</Link></li>
                      <li><Link to="/projects">Projects</Link></li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card style={{ border: 'none', background: 'transparent' }}>
                <Card.Header style={{ padding: '0', border: 'none', fontSize: '1.2rem' }}>
                  <ContextAwareToggle eventKey="1">Layouts</ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body style={{ padding: '0', border: 'none', display: 'flex', justifyContent: 'center' }}>
                    <ul className='subGnb'>
                      <li><Link to="/darkTheme">DarkTheme</Link></li>
                      <li><Link to="/whiteTheme">WhiteTheme</Link></li>
                      <li><Link to="/staticNavigation">StaticNavigation</Link></li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Nav;
