import React from "react";
import { Container, Row, Col } from "reactstrap";
import CourseCard from "../../../ALL__Hero/components/Courses-section/CourseCard";



const coursesData = [
  {
    id: "01",
    title: "CIVIL ENGINEERING",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: "/cvi1.jpg",
  },

  {
    id: "02",
    title: "COMPUTER ENGINEERING",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: "/cmt1.jpg",
  },

  {
    id: "03",
    title: "ELECTRICAL ENGINEERING",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: "/elc1.jpg",
  },
  {
    id: "04",
    title: `ELECTRONICS ENGINEERING`,
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: "/elct1.jpg",
  },

  {
    id: "05",
    title: "ENVIRONMENT ENGINEERING",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: "/env1.jpg",
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

const Recherch = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" md="12" sm="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-100 pl-4">
                <h2 className="our_head">
                  RESE<span>ARCHES.</span>
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

export default Recherch;
