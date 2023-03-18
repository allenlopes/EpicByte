import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assests/images/about-us.png";
import CountUp from "react-countup";
import "./about.css";

const AboutUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
            <h4 className="fw-bold">About Us</h4>
            <h2 className="fw-bold">The Great Place Of Medical Hospital Center</h2>
              <p>
              We provide the special tips and advice’s of
              heath care treatment and high level of best technology involve in the our hospital.
              </p>

              <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={200} duration={2} suffix="+" />
                    </span>

                    <p className="counter__title">Doctors</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={20} duration={2} suffix="+" />
                    </span>

                    <p className="counter__title">Awards</p>
                  </div>
                </div>

                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={500} duration={2} suffix="+" />
                    </span>

                    <p className="counter__title">Satisfied Clients</p>
                  </div>

                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
