import React from "react";
import { Container, Row, Col } from "reactstrap";

import courseImg01 from "../../assests/images/diagnostic.png";
import courseImg02 from "../../assests/images/treatment.png";
import courseImg03 from "../../assests/images/surgery.png";
import courseImg04 from "../../assests/images/vaccine.png";
import FreeCourseCard from "./ServicesCard";

import "./services.css";

const freeCourseData = [
  {
    id: "01",
    title: "Diagnostics",
    imgUrl: courseImg01,
    students: "Looking for effective treatment options?  Our experienced team of professionals is dedicated to helping you achieve your health goals and improve your quality of life. With state-of-the-art facilities and cutting-edge treatments, we offer the highest standard of care to our patients. Contact us today to schedule a consultation and take the first step towards a healthier, happier you.",
  },
  {
    id: "02",
    title: "Treatment",
    imgUrl: courseImg02,
    students: "Get accurate and reliable diagnostics for your medical needs at our website. Our advanced testing and diagnostic services can help identify the root cause of your symptoms and provide you with an accurate diagnosis. With state-of-the-art equipment and experienced medical professionals, we offer a range of diagnostic services for various medical conditions. Contact us today to schedule your appointment and get the answers you need for optimal health.",
  },

  {
    id: "03",
    title: "Surgery",
    imgUrl: courseImg03,
    students: "Trust us for safe and effective surgical procedures at our website. Our skilled surgeons and medical team utilize the latest technology and techniques to ensure the best possible outcomes for our patients. From minimally invasive procedures to complex surgeries, we offer a range of surgical services tailored to meet your unique needs. We are committed to providing compassionate care and support throughout your entire surgical journey. Contact us today to schedule a consultation and take the first step towards better health.",
  },

  {
    id: "04",
    title: "Vaccine",
    imgUrl: courseImg04,
    students: "Protect yourself and those around you with our vaccines available at our website. Our vaccines are safe, effective, and have been rigorously tested to ensure their quality. We offer a range of vaccines for various diseases and conditions, including COVID-19, flu, and more. Our experienced medical professionals are available to answer any questions you may have and provide you with the information you need to make an informed decision. Contact us today to schedule your vaccination appointment and help keep yourself and your community healthy.",
  },
];

const FreeCourse = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-5">
          <h5 className="fw-bold">Services</h5>
            <h2 className="fw-bold">We Cover A Big Variety Of Medical Services</h2>
          </Col>

          {freeCourseData.map((item) => (
            <Col lg="3" md="4" className="mb-4" key={item.id}>
              <FreeCourseCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FreeCourse;
