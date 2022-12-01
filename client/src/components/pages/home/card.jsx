import React from "react";
import "./home.css"

function Card(){
    return(
        <div className="row">
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Lab Tests</h5>
                            <p className="card-text">Wide variety of tests avaiable</p>
                            <ul>
                                <li>Saliva Test</li>
                                <li>Endoscopy</li>
                                <li>Heavy Metals Blood Test </li>
                                <li>Hair Mineral Analysis</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                         <div className="card-body">
                            <h5 className="card-title">Avaiable Services</h5>
                            <ul>
                                <li>Lab tests</li>
                                <li>List of doctors</li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                         <div className="card-body">
                            <h5 className="card-title">Contact Us</h5>
                            <p className="card-text">For any queries or complaints contact us at </p>
                            <a href = "mailto:mayank31rbt@gmail.com">Mail</a>
                            
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Card;