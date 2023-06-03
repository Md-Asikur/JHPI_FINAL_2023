import * as React from "react";
import "./ev.css"

export default function MultiActionAreaCard() {
  return (
    <>
      
      <div class="wrapper">
        <div class="services">
          <a href="#">
            <span class="single-img img-one">
              <span class="img-text">
                <h4>Canon 9587</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, quam.
                </p>
                <button>View More</button>
              </span>
            </span>
          </a>
          <a href="#">
            <span class="single-img img-two">
              <span class="img-text">
                <h4>Independece Day!</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, quam.
                </p>
                <button>View More</button>
              </span>
            </span>
          </a>
          <a href="#">
            <span class="single-img img-three">
              <span class="img-text">
                <h4>Holiday!</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, quam.
                </p>
                <button>View More</button>
              </span>
            </span>
          </a>
        </div>
      </div>{" "}
      
      
    </>
  );
}
