import Form from 'react-bootstrap/Form';

function MinimalHead (){

  return(

      <div className='DefaultHead_Container' style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '2rem'
        }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start'
          }}>
          <h1 style={{
            fontSize: '30px'
          }}>Dashboard</h1>
          <span>Sale overview & summary</span>
        </div>

        <div style={{display: 'flex'}}>
        <Form.Select aria-label="Default select example" style={{
          width: '300px',
          height: '70px'
        }}>
          <option>Order Type</option>
          <option value="1">Segment</option>
          <option value="2">Customer</option>
        </Form.Select>
        <Form.Select aria-label="Default select example" style={{
          width: '300px'
        }}>
          <option>Last 7 days</option>
          <option value="1">Last 30 days</option>
          <option value="2">Last month</option>
          <option value="3">Last year</option>
        </Form.Select>
        </div>
      </div>
  )
}

export default MinimalHead;
