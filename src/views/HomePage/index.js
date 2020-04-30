import React from "react";
import Open from "../../components/common/Open";
import Header from "../../components/common/Header";
import Background from "../../components/common/Main/Background";
import AboutMe from "../../components/common/Main/AboutMe";
import Education from "../../components/common/Main/Education";
import Interest from "../../components/common/Main/Interests";
import Contact from "../../components/common/Main/Contact";
import Top from "../../components/common/Top";
import Footer from "../../components/common/Footer";

const HomePage = () => {
  return (
    <>
      <Open />
      <Header />
      <Background />
      <div className="container">
        <AboutMe />
        <Education />
        <Interest />
        <Contact />
      </div>
      <Top />
      <Footer />
    </>
  );
};
export default HomePage;
