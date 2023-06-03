import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assests/images/web-design.png";
import courseImg2 from "../../assests/images/graphics-design.png";
import courseImg3 from "../../assests/images/ui-ux.png";
import "./courses.css";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    title: "CIVIL ENGINEERING",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: "/civil.jpg",
  },

  {
    id: "02",
    title: "COMPUTER ENGINEERING",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: "/computer1.jpg",
  },

  {
    id: "03",
    title: "ELECTRICAL ENGINEERING",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: "/electical.jpg",
  },
  {
    id: "04",
    title: `ELECTRONICS ENGINEERING`,
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: "/electronics.jpg",
  },

  {
    id: "05",
    title: "ENVIRONMENT ENGINEERING",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: "/environment.jpg",
  },

  {
    id: "06",
    title: "COMPUTER ENGINEERING",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: "/computer2.jpg",
  },
];

const Courses = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" md="12" sm="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-100 pl-4">
                <h2 className="our_head">
                  Our <span>Technologies</span> 
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  consequatur libero quod voluptatibus ullam quia quas, vitae voluptatem
                  recusandae reprehenderit!
                </p>
              </div>
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
