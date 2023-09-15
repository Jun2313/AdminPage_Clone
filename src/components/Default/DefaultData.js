function DefaultData (){

  return(
    <div className="DefaultData_Container">
      <div className="DefaultData_Box blue">
        <div style={{ 
          display: 'flex',
          justifyContent: 'space-around'}}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flexstart'}}>
            <span>101.1K</span>
            <span>Downloads</span>
          </div>
          <div>
            이미지
          </div>
        </div>
        <div>
          text
        </div>
      </div>
      <div className="DefaultData_Box yellow" >박스1</div>
      <div className="DefaultData_Box perple">박스1</div>
      <div className="DefaultData_Box green">박스1</div>
    </div>
  )
}

export default DefaultData;