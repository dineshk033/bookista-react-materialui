import CardTemplate from 'component/card/cardTemplate1';
import { Booklist } from 'mock/data';
import React, { Component, useRef } from 'react';
import Slider from 'react-slick';
import IconButton from '@mui/material/IconButton';
import { Box } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default () => {
    const elementRef = useRef(null);
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1660,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true
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

    const handleNext = () => {
        if (elementRef) {
            elementRef.current.slickNext();
        }
    };
    const handlePrev = () => {
        if (elementRef) {
            elementRef.current.slickPrev();
        }
    };
    return (
        <div>
            <Box textAlign="end" mt={-3} mb={2} mr={2}>
                <IconButton color="warning" aria-label="prev click" onClick={handlePrev}>
                    <ArrowBackIosIcon />
                </IconButton>
                <IconButton color="warning" aria-label="next click" onClick={handleNext}>
                    <ArrowForwardIosIcon />
                </IconButton>
            </Box>

            <Slider ref={elementRef} {...settings}>
                {Booklist.map((el) => (
                    <Box key={el.title} px={2}>
                        <CardTemplate {...el} />
                    </Box>
                ))}
            </Slider>
        </div>
    );
};
