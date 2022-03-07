import React,{useEffect} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Gallerydiv, Item } from "./GalleryElements";
import item1 from "../../images/item1.png"
import item2 from "../../images/item2.png"
import item3 from "../../images/item3.png"
import item4 from "../../images/item4.png"
import item5 from "../../images/item5.png"
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                autoplay: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

export function Gallery() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []
    );

    return (
        <Gallerydiv data-aos="fade-up">
            
            <Slider {...settings}>
                <Item src={item1}></Item>
                <Item src={item2}></Item>
                <Item src={item3}></Item>
                <Item src={item4}></Item>
                <Item src={item5}></Item>
            </Slider>

        </Gallerydiv>
    )
}

