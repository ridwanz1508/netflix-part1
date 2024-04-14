import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [isInputFilled, setIsInputFilled] = useState(false);
  const [isInputClicked, setIsInputClicked] = useState(false);

  const handleInputChange = (event) => {
    setIsInputFilled(event.target.value.trim() !== "");
  };

  const handleInputClick = () => {
    setIsInputClicked(true);
  };

  const handleInputBlur = () => {
    setIsInputClicked(false);
  };

  return (
    <div className="header">
      <div className="header-text">
        <h1>Unlimited movies, TV shows, and more</h1> 
        <p className="p1">Watch anywhere. Cancel anytime.</p>
        <p className="p2">Ready to watch? Enter your email to create or restart your membership.</p>
        <div className={`header-search ${isInputClicked ? "clicked" : ""}`}>
          <input
            type="text"
            className="search-input"
            onChange={handleInputChange}
            onClick={handleInputClick}
            onBlur={handleInputBlur}
            required
          />
          <label className={isInputFilled ? "filled" : ""} htmlFor="">Email Address</label>
          <button className="btn btn-danger">
            Get Started <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
