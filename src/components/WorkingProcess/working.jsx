import React from 'react';
import { Container, Row, Col } from "reactstrap";
import "./working.css";


const Services = () => {
  return (
    <section id='services'>
          <Col lg="12" className="text-center mb-5">
          <h5 className="fw-bold">Working Process</h5>
            <h2 className="fw-bold">How AppointUs works?</h2>
          </Col>

      <div className='container services__container'>

        <article className="service">
          <div className="service__head">
            <h1>STEP 01</h1>
          </div>

          <ul className='service__list'>
            <li>
              <a className='service__list-icon' />
              <h4>Make Appointment</h4>
            </li>
            <li>
              <a className='service__list-icon' />
              <p>Book an Appointmnet with us by Login/Registration on our website and filling apporopriate details.</p>
            </li>


          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h1>STEP 02</h1>
          </div>

          <ul className='service__list'>
            <li>
              <a className='service__list-icon' />
              <h4>Visit the Hospital</h4>
            </li>
            <li>
              <a className='service__list-icon' />
              <p>Once you have booked an appointment the next step is to visit the Hospital
                on the appointment date.
              </p>
            </li>


          </ul>
        </article>


        <article className="service">
          <div className="service__head">
            <h1>STEP 03</h1>
          </div>

          <ul className='service__list'>
            <li>
              <a className='service__list-icon' />
              <h4>Enter Your Ticket Id</h4>
            </li>
            <li>
              <a className='service__list-icon' />
              <p>Now that you've reached the hospital for the appointment you need to enter your
                ticket id on the appointment verification machine and confirm your slot.
              </p>
            </li>


          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services