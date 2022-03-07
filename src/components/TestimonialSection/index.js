import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  Testimony,
  TestimonyContent,
  Testimonydiv,
  TestimonyHeading,
} from "./TestimonialSectionElements";
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  arrows: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        autoplay: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const Testimonial = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Testimonydiv data-aos="fade-up">
        <h1 className="text-center mt-5">Testimonials</h1>
        <p className="underline mb-3"></p>
        <Slider {...settings}>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </Slider>
      </Testimonydiv>
    </>
  );
};

const Cards = () => {
  return (
    <div>
      <Testimony>
        <TestimonyHeading className="heading">Anonymous</TestimonyHeading>
        <TestimonyContent>
          <ImQuotesLeft style={{ color: "#ff971d" }} />
          <br />
          <p
            className="para2"
            style={{ lineHeight: "1.8", fontSize: "1.3rem" }}
          >
            &ensp;&ensp;&ensp;it is a long established fact that a reader will
            be distracted by the readable content of a page when looking at its
            layout. The point of using Lorem Ipsum is that it has a more-or-less
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable
            English.&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
            <ImQuotesRight style={{ color: "#ff971d" }} />{" "}
          </p>
        </TestimonyContent>
      </Testimony>
    </div>
  );
};
