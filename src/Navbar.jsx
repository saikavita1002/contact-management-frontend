import { Link } from "react-router-dom";
import logo from "./assets/logo.jpg";

function Navbar() {
    return (
    <nav>

        <Link to="/home" className="logo">
    <img src={logo} alt="ContactMS Logo" className="logo-img" />
    <span>ContactMS</span>
</Link>

        <div className="nav-links">

        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/service">Services</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/register">Register</Link>
        <Link to="/contactlist">Contact List</Link>
        <Link to="/bookticket">Book Ticket</Link>

        </div>

    </nav>
    );
}

export default Navbar;