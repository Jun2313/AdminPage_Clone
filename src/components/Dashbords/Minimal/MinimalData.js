function MinimalData (){

  const data = [
    { downloads: '101.1K', percentage: '3%', caption: 'from last month', color: 'blue',type: 'Download', icon: 'download' },
    { downloads: '12.2K', percentage: '3%', caption: 'from last month', color: 'red' ,type: 'Purchases', icon: 'storefront'},
    { downloads: '5.3K', percentage: '3%', caption: 'from last month', type: 'Customers', icon: 'people'},
    { downloads: '7K', percentage: '3%', caption: 'from last month', type: 'Channels', icon: 'devices'},
  ];

  return(
    <div className="MinimalData_Container" style={{
      marginBottom: '2rem'
    }}>
    {data.map((item, index) => (
      <div key={index} className={`MinimalData_Box ${item.color}`}>
        <div className="MinimalData_BoxContainer">
          <div>
            <span>{item.downloads}</span>
            <span>{item.type}</span>
          </div>
          <div className="icon-circle bg-white-51 text-primary">
            <i className="material-icons" style={{ marginLeft: '12px'}}>{item.icon}</i>
          </div>
        </div>
        <div className="MinimalData_text">
          <i className="material-icons icon-xs" style={{ fontSize: '18px' }}>arrow_upward</i>
          <div className="caption fw-500 me-2">{item.percentage}</div>
          <div className="caption">{item.caption}</div>
        </div>
      </div>
    ))}
  </div>
  )  
}

export default MinimalData;