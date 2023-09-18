
import React from 'react';

import DefaultHead from './DefaultHead'
import DefaultData from './DefaultData'
import DefaultGraph from './DefaultGraph'
import DefaultAccount from './DefaultAccount';
function Default() {

  return (
    <div className='Defulet_Container' style={{padding: '2.5rem'}}>
      <DefaultHead />
      <DefaultData />
      <DefaultGraph />
      <DefaultAccount/>
      <div className='Defulet_5'>차트</div>
      </div>
  );
}

export default Default;
