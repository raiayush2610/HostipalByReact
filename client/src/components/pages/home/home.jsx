import React from "react";
import Navbar from "./navbar";
import Card from "./card";
import Carousel from "./carousel";
function Home(){
    return(
        <div>
            <Navbar />

            <div className="center">
                <h2>Your health is our first priority</h2>
                <p><em>We are Expanding Day by Day</em></p>
            </div>

            <Card />

            <Carousel />
            
            <h3 className="car-text"><a href="https://www.news-medical.net/">Read more articles on health</a></h3>
            <div className="footer">
                <p>Copyright Ayush Rai</p>
            </div>
        </div>
    )
}

export default Home;