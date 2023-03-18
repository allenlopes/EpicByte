import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import HeroSection from "../components/Hero-Section/HeroSection";
//import CompanySection from "../components/Company-section/Company";

 import AboutUs from "../components/About-us/AboutUs";
 // import Courses from "../components/Courses-section/Courses";
// import ChooseUs from "../components/Choose-us/ChooseUs";
import WorkingProcess from "../components/WorkingProcess/working"
import Services from "../components/Services/Services";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";


import Registration from "../components/Register/Register";

import Login from "../components/Login/Login"

const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      {/* <CompanySection /> */}
      <AboutUs />
    {/*<Courses />
      <ChooseUs />  */}
      <WorkingProcess />
      <Services />
      <Testimonials />
      <Newsletter />

      <Login />

      <Registration />


      <Footer />

    </Fragment>
  );
};

export default Home;
