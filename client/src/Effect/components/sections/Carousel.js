import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCards,Pagination,Navigation,Autoplay } from "swiper";
import img1 from "../assets/Nfts/principal.png";
import img2 from "../assets/Nfts/gautom.jpg";
import img3 from "../assets/Nfts/shariful.jpg";
import img4 from "../assets/Nfts/sarmin.jpg";
import img5 from "../assets/Nfts/pabitra.jpg";
import img6 from "../assets/Nfts/M.jpg";
import img7 from "../assets/Nfts/sahadat.jpg";
import img8 from "../assets/Nfts/harun.jpg";
import img9 from "../assets/Nfts/tahera.jpg";
import img10 from "../assets/Nfts/tarikul.jpg";
import img11 from "../assets/Nfts/Mahbub-Sir.jpg";
import Arrow from "../assets/Arrow.svg"
const Container = styled.div`
  width: 25vw;
  height: 70vh;
  margin: 0 auto;
  //   // background: lightblue;
    display: flex;
    justify-content: center;
    align-items: center;
  @media (max-width: 70em) {
    width: 60vh;
    height: 35vw;
  }
  @media (max-width: 65em) {
    width: 55vh;
    height: 35vw;
  }
  @media (max-width: 48em) {
    margin-top: 30px;
    width: 45vh;
    height: 60vw;
  }
  @media (max-width: 30em) {
    margin-top: 30px;
    width: 35vh;
    height: 60vw;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
  .swiper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    background-color: ${(props) => props.theme.carouselColor};
    border-radius: 30px;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
  }
  .swiper-button-next {
    color: ${(props) => props.theme.text};
    right: 0;
    top: 60%;
    width: 4rem;
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;
    &:after {
      display: none;
    }
    // @media (max-width: 65em) {
    //   width: 3rem;
    // }
    // @media (max-width: 45em) {
    //   width: 2rem;
    // }
    // @media (max-width: 35em) {
    //   width: 1.8rem;
    // }
  }
  .swiper-button-prev {
    color: ${(props) => props.theme.text};
    left: 0;
    top: 60%;
    width: 4rem;
    transform: rotate(180deg);
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;
    &:after {
      display: none;
    }
    // @media (max-width: 65em) {
    //   width: 3rem;
    // }
    // @media (max-width: 45em) {
    //   width: 2rem;
    // }
    // @media (max-width: 35em) {
    //   width: 2rem;
    // }
  }
`;
const Carousel = () => {
  return (
    <Container>
      
      <Swiper
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ type: "fraction" }}
        navigation={true}
        scrollbar={{ draggable: true }}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/tuli1.jpg" />
          <h1 style={{ color: "var(--main-bg)", paddingTop: "10px" }}>
            MST TULI <span style={{ color: "var(--main-color)" }}> KHATUN</span>
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} />
          <h1 style={{ color: "var(--main-bg)", paddingTop: "10px" }}>
            Md <span style={{ color: "var(--main-color)" }}>SAZEDUR</span> RAHMAN
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img8} />
          <h1 style={{ color: "var(--main-bg)", paddingTop: "10px" }}>
            HARUN<span style={{ color: "var(--main-color)" }}> OR</span> RASHID
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} />
          <h1 style={{ color: "var(--main-bg)", paddingTop: "10px" }}>
            Md<span style={{ color: "var(--main-color)" }}> Shariful Islam</span>
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} />
          <h1 style={{ color: "var(--main-bg)", paddingTop: "10px" }}>
            SHARMIN <span style={{ color: "var(--main-color)" }}> SULTANA</span>
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/diya.jpg" />
          <h1 style={{ color: "var(--main-bg)", paddingTop: "10px" }}>
            MST DIYA <span style={{ color: "var(--main-color)" }}> ISLAM</span>
          </h1>
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src="/tuli1.jpg" />
          <h1 style={{ color: "var(--main-bg)", paddingTop: "10px" }}>
          MST  TULI <span style={{ color: "var(--main-color)" }}> KHATUN</span>
          </h1>
        </SwiperSlide> */}
        <SwiperSlide>
          <img src={img5} />
          <h1 style={{ color: "var(--main-bg)", paddingTop: "10px" }}>
            Pabitra<span style={{ color: "var(--main-color)" }}> Kumar</span>
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} />
          <h1 style={{ color: "var(--main-bg)", paddingTop: "10px" }}>
            Md<span style={{ color: "var(--main-color)" }}> Mahabub Islam</span>
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} />
          <h1 style={{ color: "var(--main-bg)", paddingTop: "10px" }}>
            Md<span style={{ color: "var(--main-color)" }}> Mahabub Islam</span>
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img8} />
          <h1 style={{ color: "var(--main-bg)", paddingTop: "10px" }}>
            HARUN<span style={{ color: "var(--main-color)" }}> OR</span> RASHID
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img9} />
          <h1 style={{ color: "var(--main-bg)", paddingTop: "10px" }}>
            Mst<span style={{ color: "var(--main-color)" }}> Tahera</span> Khatun
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img10} />
          <h1 style={{ color: "var(--main-bg)", paddingTop: "10px" }}>
            Md<span style={{ color: "var(--main-color)" }}> Tarikul</span> Islam
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img11} />
          <h1 style={{ color: "var(--main-bg)", paddingTop: "10px" }}>
            Md<span style={{ color: "var(--main-color)" }}> Mahabubur</span> Rahaman
          </h1>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Carousel;
