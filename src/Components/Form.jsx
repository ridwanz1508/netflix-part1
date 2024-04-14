import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Form() {
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
        <div className="faq">
            <h2>Frequently Asked Questions</h2>
            <ul className="accordian">
                <li>
                    <input type="radio" name="accordion" id="item1"/>
                    <label for="item1">What is Netflix?</label>
                    <div className="content">
                        <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.</p>
                    </div>
                </li>
                <li>
                    <input type="radio" name="accordion" id="item2"/>
                    <label for="item2">How much does Netflix cost?</label>
                    <div className="content">
                        <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from IDR 54,000 to IDR 186,000 a month. No extra costs, no contracts.</p>
                    </div>
                </li>
                <li>
                    <input type="radio" name="accordion" id="item3"/>
                    <label for="item3">Where can i watch?</label>
                    <div className="content">
                        <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</p>
                    </div>
                </li>
                <li>
                    <input type="radio" name="accordion" id="item4"/>
                    <label for="item4">How do i can cancel?</label>
                    <div className="content">
                        <p>Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
                    </div>
                </li>
                <li>
                    <input type="radio" name="accordion" id="item5"/>
                    <label for="item5">What can I watch on Netflix?</label>
                    <div className="content">
                        <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                    </div>
                </li>
                <li>
                    <input type="radio" name="accordion" id="item6"/>
                    <label for="item6">Is Netflix good for kids?</label>
                    <div className="content">
                        <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.</p>
                    </div>
                </li>
            </ul>
            <div className="form-text">
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
            </div>
            <div className={`form-search ${isInputClicked ? "clicked" : ""}`}>
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
    );
}

export default Form;