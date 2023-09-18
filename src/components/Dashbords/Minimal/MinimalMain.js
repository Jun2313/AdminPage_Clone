
import React from 'react';

import MinimalHead from './MinimalHead'
import MinimalData from './MinimalData'
import MinimalGraph from './MinimalGraph'
import MinimalAccount from './MinimalAccount';

function Minimal() {

  return (
    <div className='Defulet_Container' style={{padding: '2.5rem'}}>
      <MinimalHead />
      <MinimalData />
      <MinimalGraph />
      <MinimalAccount/>
      <div className='Defulet_5'>차트</div>
      </div>
  );
}

export default Minimal;
