import "./footer.css";

import { Fa500Px } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub} from "react-icons/ai";
const Footer = () =>{
    return (
    <div className="footer">
  
 <a href="https://www.facebook.com/"><BsFacebook className="social-icon"/></a>
 <a href="https://www.instagram.com"><BsInstagram className="social-icon" size={20}/></a>
 <a href="https://in.linkedin.com/"><AiFillLinkedin className="social-icon"/></a>
 <a href="https://github.com/"><AiFillGithub className="social-icon"/></a>
 <h5 className="copyright">Copyright with Hospital</h5>
    </div>
)

}
export default Footer;