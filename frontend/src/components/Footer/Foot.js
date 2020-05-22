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
          <div className="row">
            <div className="col">
              <Card className="infocard">
                <Card.Body>
                  <Card.Title style={{ fontWeight: "bold" }}>
                    Book a demo
                  </Card.Title>
                  <Card.Text style={{ color: "black" }}>
                    To see how Circle In can work for your workplace.
                  </Card.Text>
                  <br />
                  <Button className="infoButton mr-sm-2 text-center">
                    Book a demo
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col">
              <Card className="infocard">
                <Card.Body>
                  <Card.Title style={{ fontWeight: "bold" }}>
                    Discover the cost
                  </Card.Title>
                  <Card.Text style={{ color: "black" }}>
                    Discover the cost of investment and measure the impact with
                    our business case template.
                  </Card.Text>
                  <Button className="infoButton mr-sm-2 text-center">
                    Discover now
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col">
              <Card className="infocard">
                <Card.Body>
                  <Card.Title style={{ fontWeight: "bold" }}>
                    More questions
                  </Card.Title>
                  <br />
                  <Card.Text style={{ color: "black" }}>Let us help.</Card.Text>
                  <br />
                  <Button className="infoButton mr-sm-2 text-center">
                    Contact us
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-4 text-left">
              <h2>Get the latest industry insights direct to your inbox</h2>
              <p>
                Industry news, research and advice for organisations supporting
                working parents.
              </p>
            </div>
            <div className="col-1"/>
            <div className="col-3">
              <Form>
                <Form.Group>
                  <Form.Control placeholder="First name*"/>
                </Form.Group>
                <Form.Group>
                  <Form.Control type="email" placeholder="Email*" />
                </Form.Group>
                <Button className="subscribeButton">
                  Subscribe
                </Button>
              </Form>
            </div>
          </div>
        </div>
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
