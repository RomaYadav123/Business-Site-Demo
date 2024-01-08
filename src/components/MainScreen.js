import React, { useState, useEffect } from "react";
// import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHouseChimney,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
// import logo from "./logo.svg";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Route, Router, Routes, useNavigate } from "react-router-dom";
import sailBoatImage from "../assets/sailboat.jpg";
import avatarImage from "../assets/avatar.jpg";
import snowAvatar from "../assets/snow.jpg";
import lightAvatar from "../assets/lights.jpg";
import mountainAvatar from "../assets/mountains.jpg";
import mapImage from "../assets/map.jpg";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlus } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const MainScreen = () => {
  // const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const [formData, setFormData] = useState({
    name: "",

    email: "",

    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const [currentStep, setCurrentStep] = useState(1);
  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  return (
    <div className="App parent-container">
      <div className="header">
        <div className="header-item-one">
          <div className="inner-items">
            <FontAwesomeIcon icon={faHouseChimney} />
            <span>Logo</span>
          </div>
        </div>
        <div className="header-item-two">
          <div
            className={`hamburger ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          {isMenuOpen && (
            <nav className="navigation-button list-items">
              <ul className="label">
                <li>
                  <a href="#our-team-section">Team</a>
                </li>
                <li>
                  <a href="#our-work-section">Work</a>
                </li>
                <li>
                  <a href="#price-section">Price</a>
                </li>
                <li>
                  <a href="#contact-section">Contact</a>
                </li>
              </ul>
            </nav>
          )}

          <div className="list-items-dynamic">
            <nav><ul className="label-dynamic">
                <li>
                  <a href="#our-team-section">Team</a>
                </li>
                <li>
                  <a href="#our-work-section">Work</a>
                </li>
                <li>
                  <a href="#price-section">Price</a>
                </li>
                <li>
                  <a href="#contact-section">Contact</a>
                </li>
              </ul></nav>
          </div>
        </div>
      </div>
      <div className="section">
        <div id="hero-section">
          <img src={sailBoatImage} alt="Sailboat"></img>
        </div>
        <div id="our-team-section">
          <div className="our-team-section-title">
            <h2>OUR TEAM</h2>
          </div>
          <p className="our-team-section-para">
            Meet the team - our office rats:
          </p>
          <div className="image-wrapper">
            <div className="image-styling">
              <img
                src={avatarImage}
                alt="Sailboat"
                className="avatar-image"
              ></img>
              <span className="team-name">Johnny Walker</span>
              <span className="our-team-section-para">Web Designer</span>
            </div>
            <div className="image-styling">
              <img
                src={avatarImage}
                alt="Sailboat"
                className="avatar-image"
              ></img>
              <span className="team-name">Rebecca Flex</span>
              <span className="our-team-section-para">Support</span>
            </div>
            <div className="image-styling">
              <img
                src={avatarImage}
                alt="Sailboat"
                className="avatar-image"
              ></img>
              <span className="team-name">Jan Ringo</span>
              <span className="our-team-section-para">Boss Man</span>
            </div>
            <div className="image-styling">
              <img
                src={avatarImage}
                alt="Sailboat"
                className="avatar-image"
              ></img>
              <span className="team-name">Kai Ringo</span>
              <span className="our-team-section-para">Fixer</span>
            </div>
          </div>
        </div>
        <div id="our-work-section">
          <div className="our-work-section-upper">
            <div className="our-team-section-title">
              <h2>Our Work</h2>
            </div>
            <p className="our-team-section-para">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
              semper nisi. Aenean vulputate eleifend tellus.
            </p>
          </div>

          <div className="our-work-section-lower">
            <div className="work-lower-subparts">
              <img src={snowAvatar} alt="Snow" className="image-styling"></img>
              <div className="work-para">
                <div className="our-work-name">
                  <h3>Customer 1</h3>
                  <span> Trade </span>
                  <span> Trade </span>
                  <span> Trade </span>
                  <span> Trade </span>
                  <span> Trade </span>
                </div>
              </div>{" "}
            </div>

            <div className="work-lower-subparts">
              <img
                src={lightAvatar}
                alt="Light"
                className="image-styling"
              ></img>
              <div className="work-para">
                <div className="our-work-name">
                  <h3>Customer 2</h3>
                  <span> Trade </span>
                  <span> Trade </span>
                  <span> Trade </span>
                  <span> Trade </span>
                  <span> Trade </span>
                </div>
              </div>{" "}
            </div>

            <div className="work-lower-subparts">
              <img
                src={mountainAvatar}
                alt="Mountain"
                className="image-styling"
              ></img>
              <div className="work-para">
                <div className="our-work-name">
                  <h3>Customer 3</h3>
                  <span> Trade </span>
                  <span> Trade </span>
                  <span> Trade </span>
                  <span> Trade </span>
                  <span> Trade </span>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
      <div id="price-section">
        <div className="pricing-section-upper">
          <h2> PRICING </h2>
          <p className="pricing-para">
            Choose a Pricing plan that fits your needs.
          </p>
        </div>

        <div className="table">
          <div className="basic-table basic">
            <div className="table-title">
              <h3>Basic</h3>
            </div>
            <div className="table-content">
              <span>
                <b> 10 GB</b> Storage
              </span>
              <span>
                <b> 10 Enails</b> Storage
              </span>
              <span>
                <b> 10 Domains</b> Storage
              </span>
              <span>
                <b> Endless</b> Support
              </span>
              <h2>
                $ 10 <span> per month </span>
              </h2>
              <div className="signup-button">
                <button>
                  <FontAwesomeIcon icon={faCheck} /> Sign Up
                </button>
              </div>
            </div>
          </div>
          <div className="basic-table pro ">
            <div className=" table-title special-background">
              <h3>Pro</h3>
            </div>
            <div className="table-content">
              <span>
                <b> 25 GB</b> Storage
              </span>
              <span>
                <b> 25 Enails</b> Storage
              </span>
              <span>
                <b> 25 Domains</b> Storage
              </span>
              <span>
                <b> Endless</b> Support
              </span>
              <h2>
                $ 25 <span> per month </span>
              </h2>
              <div className="signup-button">
                <button>
                  <FontAwesomeIcon icon={faCheck} /> Sign Up
                </button>
              </div>
            </div>
          </div>
          <div className="basic-table premium">
            <div className="table-title">
              <h3>Premium</h3>
            </div>
            <div className="table-content">
              <span>
                <b> 50 GB</b> Storage
              </span>
              <span>
                <b> 50 Enails</b> Storage
              </span>
              <span>
                <b> 50 Domains</b> Storage
              </span>
              <span>
                <b> Endless</b> Support
              </span>
              <h2>
                $ 50 <span> per month </span>
              </h2>
              <div className="signup-button">
                <button>
                  <FontAwesomeIcon icon={faCheck} /> Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="contact-section">
        <div className="contact-title">
          <h3>Contact Us</h3>
        </div>
        <div className="address">
          <div className="address-items">
            <span> Swing by for a cup of coffee, or whatever.</span>
            <span>
              <FontAwesomeIcon icon={faLocationDot} className="location-icon" />
              Chicago, US
            </span>
            <span>
              <FontAwesomeIcon icon={faPhone} className="location-icon" />
              +00 1515151515
            </span>
            <span>
              <FontAwesomeIcon icon={faEnvelope} className="location-icon" />
              test@test.com
            </span>
          </div>
          <div className="form">
            <div className="field-login">
              <div className="label">Name</div>
              <input
                type="text"
                name="name"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className="field-login">
              <div className="label">Email</div>
              <input
                type="text"
                name="password"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className="field-login">
              <div className="label">Message</div>
              <input
                type="text"
                name="message"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className="contact-footer">
              {/* <div className="contact-footer-one">
                <button className="contact-button" onClick={nextStep}>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="contact-check-icon"
                  />
                </button>
                I Like it!
              </div> */}
              <div className="contact-footer-two">
                <button>Send </button>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-location-image">
          <img src={mapImage}></img>
        </div>
      </div>
      <div className="footer">
        <h2>Follow Us</h2>
        <div className="social-media">
          <button>
            <a href="https://facebook.com/">
              <FontAwesomeIcon
                icon={faFacebook}
                className="social-media-icon"
              />
            </a>
          </button>
          <button>
            <a href="https://twitter.com/">
              <FontAwesomeIcon icon={faTwitter} className="social-media-icon" />
            </a>
          </button>
          <button>
            <a href="https://goggleplus.com/">
              <FontAwesomeIcon
                icon={faGooglePlus}
                className="social-media-icon"
              />
            </a>
          </button>
          <button>
            <a href="https://instagram.com/">
              <FontAwesomeIcon
                icon={faSquareInstagram}
                className="social-media-icon"
              />
            </a>
          </button>
        </div>
        <div className="last-line">
          Powered By
          <a href="http://borrowland.in/" title="Borrowland">
            Borrowland
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
