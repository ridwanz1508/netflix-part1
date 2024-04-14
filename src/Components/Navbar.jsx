import React, { useState } from "react";
import { Link } from "react-scroll";
import Logo from "../Images/logo/logo-netflix.png";

function Navbar() {
    const [selectedLanguage, setSelectedLanguage] = useState("English");

    const handleChangeLanguage = (event) => {
        setSelectedLanguage(event.target.value);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="header" className="logo">
                    <img src={Logo} alt="Logo" />
                </Link> 
            </div>
            <div className="navbar-nav">
                <select
                    className="language-dropdown"
                    value={selectedLanguage}
                    onChange={handleChangeLanguage}
                >
                    <option value="English"> English</option>
                    <option value="Indonesian">Indonesian</option>
                </select>
                <button className="btn btn-danger">Sign in</button>
            </div>
        </nav>
    );
}

export default Navbar;
