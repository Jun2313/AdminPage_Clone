function DefaultAccount () {

  return(
    <div className="DefaultAccount_Container">
      <div className="Privacy">
        <div className="Privacy_content">
          <div>
          <h2>Privacy Suggestions</h2>
          <p>Take our privacy checkup to choose which settings <br/
          >are right for you</p>
          </div>
          <div>
            <img src="https://material-admin-pro.startbootstrap.com/assets/img/illustrations/security.svg"
            style={{height: '6rem'}}/>
          </div>
        </div>
        <div className="Privacy_Review"></div>
      </div>
      <div className="Account">
        <div className="Account_content"></div>
        <div className="Account_Manage"></div>
      </div>

    </div>
  )
}

export default DefaultAccount;