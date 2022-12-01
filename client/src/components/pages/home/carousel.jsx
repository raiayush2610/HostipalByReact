import React from "react";
import coronaImg from "../../../images/corona.png";
import diaebetsImg from "../../../images/diabetes.png";
import vitaminsImg from "../../../images/vitamin.png";
import "./home.css"
function Carousel(){
    return(
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={coronaImg} className="d-block w-100" alt="..."/>
                    </div>
                <div className="carousel-item">
                    <img src={diaebetsImg} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={vitaminsImg} className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            
            </div>

    )
}

export default Carousel;