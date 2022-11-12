import React, { useState } from "react";
import Header from "../home/navbar";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
let resp = '';
function Login(){
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    const handleLogin = async(e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:4000/api/entries`,
                {
                  email: email,
                  password: password                
                 }
                )
                
                resp = res.data;
            if(res.data === "false"){
                navigate("/fail")
            }else{
                navigate('/success')

            }
        } catch (error) {
            console.log(error)
        }
                
    }
    

    return(
        
        <div className="register">
        <Header />
            <form className="register-form">    
                <h1 className="h3 heading-h1 mb-3 mb-4 fw-normal">Login</h1>
                <input onChange={e => {setEmail(e.target.value)}} className="bottom" type="email" placeholder ="E-mail"/>
                <input onChange={e => {setPassword(e.target.value)}} className="bottom" type="password" placeholder ="Password" autoComplete="false"/>
                <button onClick={handleLogin} className=" btn btn-lg btn-primary" id="login-button">Login </button> 
            </form>
            <p className="log-p">New to this website, <NavLink to = "/register">Register</NavLink></p>
            <div className="footer-reg">
                <p>Copyright Mayank Srivastava</p>
            </div>
        </div>
    )
}

export default Login;
export{resp};