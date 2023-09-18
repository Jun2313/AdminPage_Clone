

function Main (){

  return(
    <>
    <div style={{
      height: '400px',
      backgroundColor: '#333'
    }}>
      <div style={{
        color: 'white',
        display: 'flex',
        justifyContent:'center',
        }}>
        <div style={{ marginTop : '100px'}}>
          <div className="material-symbols-outlined" style={{ color: 'white', scale: '2', padding:'20px'}}>
          diversity_2
          </div>
          <h4 style={{fontSize: '26px'}}>Build beaufiful products, fast.</h4>
          <p style={{ fontSize: '14PX', opacity:'0.6'}}>Build high-quality digital experiences with the world's most intuitive union</p>
          <p style={{ fontSize: '14PX', opacity:'0.6' }}>between bootstrap 5 and MATERIAL Design.</p>
          <button type="button" style={{
            fontWeight: 'bold',
            color: 'white',
            border: '2px solid white',
            width: '200px',
            height:'60px',
            display: "flex",
            justifyContent: 'center',
            marginLeft: 'calc(50% - 100px)',
            marginTop: '20px',
            lineHeight: '54px'
          }}>EXPLORE DEMOS</button>
        </div>
      </div>
    </div>

    <div 
    className="container-xl p-5"
    // style={{
    //   display: 'flex', 
    //   padding: '2.5rem',
    //   alignItems: 'first-start'
    //   }}
      >
      <div style={{
        textAlign: 'left'
      }}>
      <h2 className="display-6 mb-0">Dashboards</h2>
      <p className="small text-muted" style={{
        borderBottom: '1px solid black',
        marginBottom: '1rem'
      }}>Six pre-built, customizable dashboard demos</p>
      </div>
      

      <div className="row gx-5">
        <div className="col-sm-6 col-lg-4 mb-5">
          <img class="img-fluid" src="https://assets.startbootstrap.com/img/screenshots-product-pages/material-admin-pro/dashboards/default.png" alt="..." />
          <div class="small font-monospace text-center">Default Dashboard</div>
        </div>
        <div className="col-sm-6 col-lg-4 mb-5">
        <img class="img-fluid" src="https://assets.startbootstrap.com/img/screenshots-product-pages/material-admin-pro/dashboards/minimal.png" alt="..." />
        <div class="small font-monospace text-center">Default minimal</div>
        </div>
        <div className="col-sm-6 col-lg-4 mb-5">
        <img class="img-fluid" src="https://assets.startbootstrap.com/img/screenshots-product-pages/material-admin-pro/dashboards/analytics.png" alt="..."/>
        <div class="small font-monospace text-center">Default analytics</div>
        </div>
        <div className="col-sm-6 col-lg-4 mb-5">
        <img class="img-fluid" src="https://assets.startbootstrap.com/img/screenshots-product-pages/material-admin-pro/dashboards/accounting.png" alt="..." />
        <div class="small font-monospace text-center">Default accounting</div>
        </div>
        <div className="col-sm-6 col-lg-4 mb-5">
        <img class="img-fluid" src="https://assets.startbootstrap.com/img/screenshots-product-pages/material-admin-pro/dashboards/orders.png" alt="..." />
        <div class="small font-monospace text-center">Default orders</div>
        </div>
        <div className="col-sm-6 col-lg-4 mb-5">
        <img class="img-fluid" src="https://assets.startbootstrap.com/img/screenshots-product-pages/material-admin-pro/dashboards/projects.png" alt="..." />
        <div class="small font-monospace text-center">Default projects</div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Main;