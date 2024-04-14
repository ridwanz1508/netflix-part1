import React, { useState } from "react";

function Footer() {
    const [selectedLanguage, setSelectedLanguage] = useState("English");

    const handleChangeLanguage = (event) => {
        setSelectedLanguage(event.target.value);
    };
    return(
        <div className="footer">
            <div className="footer-text">
                <p>Questions? Call <span className="phone-number">8888-8888-8888</span></p>
            </div>
            <div className="footer-row">
                <div className="footer-col">
                    <a href="/" className="footer-link">FAQ</a>
                    <a href="/" className="footer-link">Investor Relations</a>
                    <a href="/" className="footer-link">Privacy</a>
                    <a href="/" className="footer-link">Speed Test</a>
                </div>
                <div className="footer-col">
                    <a href="/" className="footer-link">Help Center</a>
                    <a href="/" className="footer-link">Jobs</a>
                    <a href="/" className="footer-link">Cookies Preferences</a>
                    <a href="/" className="footer-link">Legal Notices</a>
                </div>
                <div className="footer-col">
                    <a href="/" className="footer-link">Account</a>
                    <a href="/" className="footer-link">Ways to watch</a>
                    <a href="/" className="footer-link">Coorporate information</a>
                    <a href="/" className="footer-link">Only on Netflix</a>
                </div>
                <div className="footer-col">
                    <a href="/" className="footer-link">Media Centre</a>
                    <a href="/" className="footer-link">Term of Use</a>
                    <a href="/" className="footer-link">Contact Us</a>
                </div>
            </div>
            <div className="footer-nav">
                <select
                    className="language-dropdown"
                    value={selectedLanguage}
                    onChange={handleChangeLanguage}
                >
                    <option value="English"> English</option>
                    <option value="Indonesian">Indonesian</option>
                </select>
                <p>Netflix Indonesia</p>
            </div>
        </div>
    );
}

export default Footer;
