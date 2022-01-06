import React from 'react';
import { Col, Container, Image, Row, Button } from 'react-bootstrap';
import bannerImage from '../../images/banner.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
           <section className="banner-image">
              <img src={bannerImage} alt="banners" />
           </section>
           <section>
              
         <h1 className="mx-3">Our Service<span id="CourseSub-text">Going</span> </h1>
        <h4 className="mx-3 sub-text " >Explore your Passion</h4>
       <Button as={Col} variant="success" className="mx-3 mt-5 Button">See More</Button>

           </section>
        </div>
    );
};

export default Banner;