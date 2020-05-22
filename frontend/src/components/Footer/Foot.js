import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import "../Footer/footer.css";

export const Foot = () => {
  return (
    // footer brought from previous work!
    <div>
       <footer className="page-footer">
        <div className="container">
          <div className="row list">
            <div className={"col"}>
              <h5 className={"text-uppercase"}>Product</h5>
              <ul>
                <li>How it Works</li>
                <li>FAQs</li>
                <li>Discover the cost</li>
              </ul>
            </div>
            <div className={"col"}>
              <h5 className={"text-uppercase"}>resources</h5>
              <ul>
                <li>Research & guides</li>
                <li>Case Studies</li>
                <li>Insights</li>
              </ul>
            </div>
            <div className={"col"}>
              <h5 className={"text-uppercase"}>company</h5>
              <ul>
                <li>Our story</li>
                <li>Customers</li>
                <li>Media</li>
                <li>News</li>
                <li>Careers</li>
                <li>Terms</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className={"col"}>
              <h5 className={"text-uppercase"}>community</h5>
              <ul>
                <li>I'm planning</li>
                <li>I'm expecting</li>
                <li>I'm on leave</li>
                <li>I'm just back at work</li>
                <li>I'm a working parent</li>
                <li>Real stories</li>
                <li>Just life</li>
                <li>Wellness</li>
              </ul>
            </div>
            <div className={"col"}>
              <div className="row">
                <img
                  alt=""
                  src="https://circlein.com/wp-content/uploads/elementor/thumbs/CI-Landscape-Gradient-1-onirtzjrdivx2a3xb8n0t81wxk108wwio6undogxhi.png"
                  width="166"
                  height="38"
                />
              </div>
              <br />
              <div className="row">
                <div className="react-icons">
                  <FaFacebookF size="2em" className="react-icons" />
                  <AiFillInstagram size="2em" className="react-icons" />
                  <FaLinkedinIn size="2em" className="react-icons" />
                  <FaTwitter size="2em" className="react-icons" />
                </div>
              </div>
              <br />
              <div className="row">
                <Button className="infoButton mr-sm-2 text-center">
                  Search
                </Button>
              </div>
            </div>
          </div>
          <hr />
          <div className="footer-copyright text-left py-3">
            © 2020 Copyright: Circle In Coding Assignment
          </div>
        </div>
      </footer>
    </div>
  )
}
