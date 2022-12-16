import React from 'react'

function Card(props) {
  return (
    <>
    <div className="col-lg-4">
                    <div className="card ">
                        <div className="card-body">
                            <h5 className="card-title">Basic Info</h5>
                            <h6 className="info">First Name:  </h6> <p className="info">{props.fName}</p><br/>
                            <h6 className="info">Last Name:  </h6> <p className="info">{props.lName}</p><br />
                            <h6 className="info">Email:  </h6> <p className="info">{props.email}</p><br/>
                            <div class="nav-item dropdown">
                            
                            
                            </div>
                            
                        
                    </div>
                    </div>
                </div>
    </>
  )
}

export default Card;
