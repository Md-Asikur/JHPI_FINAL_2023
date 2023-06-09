import React from "react";

import "./principal.css";

import HeroBg from "./img/principal.png";
import Footer from "../../ALL__Hero/components/Footer/Footer";

export default function PrincipalInfo() {
  
  return (
    <>
      {/* <div class="principal">
        <Top title="About Our Institute" />

        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
         Principal
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]"> Message</span>
              </p>
              <hr className="col"/>
        <div className="contents mt-6">
          
          <p className="text-[1rem] lg:text-[2.5rem] font-normal tracking-wide text-headingColor">
            
            <div class="image-section">
              <img src={Delivery} />
            </div>{" "}
            Engr. Md. Sajed ur Rhman Principal (In-charge) I heartily welcome you to the
            official website of Jhenaidah Polytechnic Institute (30023). You will have a
            clear idea about the location and activities of this institute by surfing its
            website. This website is aimed to provide essential information to the
            students, teachers and staffs and most importantly to the online visitors.As a
            government institute, our job is to provide service to the people of the
            Republic and to implement decisions and plans of the government of the
            Republic. The main target of the present government is to make Bangladesh as a
            developed country by 2041.
          </p>
        </div>
      </div> */}
      <div class="about-sec">
        <div class="about-img">
          <img src={HeroBg} />
        </div>
        <div class="about-intro">
          <h3  style={{ color: "var(--main-color)" }}>
            Principal Message <span style={{ color: "var(--main-color)" }}>!</span>
          </h3>
          <p>
            Engr. Md. Sajed ur Rhman Principal (In-charge) I heartily welcome you to the
            official website of Jhenaidah Polytechnic Institute (30023). You will have a
            clear idea about the location and activities of this institute by surfing its
            website. This website is aimed to provide essential information to the
            students, teachers and staffs and most importantly to the online visitors.As a
            government institute, our job is to provide service to the people of the
            Republic and to implement decisions and plans of the government of the
            Republic. The main target of the present government is to make Bangladesh as a
            developed country by 2041.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
