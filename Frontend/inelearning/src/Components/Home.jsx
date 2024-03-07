import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-student-with-books.png";
import { FiArrowRight } from "react-icons/fi";
import About from "./HomeComponents/About";
import Work from "./HomeComponents/Work";
import Testimonial from "./HomeComponents/Testimonial";
import Contact from "./HomeComponents/Contact";
import Footer from "./HomeComponents/Footer";
import Navbar from "./HomeComponents/Navbar";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="App">
      <div className="home-container" id="home">
        <Navbar />
        <div className="home-banner-container">
          <div className="home-bannerImage-container">
            <img src={BannerBackground} alt="" />
          </div>
          <div className="home-text-section">
            <h1 className="primary-heading">
              INElearning: Your Platform for Endless Knowledge
            </h1>
            <p className="primary-text">
              Embark on Your Learning Journey : Explore, Share, Grow with INElearning!
            </p>
            <Link to={'/login'}><button className="secondary-button">Register Now <FiArrowRight /></button></Link>
          </div>
          <div className="home-image-section">
            <img src={BannerImage} alt="" />
          </div>
        </div>
        <About />
        <Work />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
