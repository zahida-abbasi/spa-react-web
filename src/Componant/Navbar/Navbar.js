import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () =>{
    const design = (
        <ul>
            <li>
             <img src="logo192.png" alt="this is logo" width={30}/>
            </li>
            <li><Link to="home">Home</Link></li>
            <li><Link to="about">About</Link></li>
            <li><Link to="gallery">Gallery</Link></li>
            <li><Link to="services">Services</Link></li>
            <li><Link to="settings">Settings</Link>
            </li>
        </ul>

    );
    return design;

}

export default Navbar;