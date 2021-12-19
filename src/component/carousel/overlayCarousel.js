import { Box, Avatar, Typography, Rating, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { image } from 'faker';
import { Booklist } from 'mock/data';
// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react';
import Slider from 'react-slick';
import _lodash from 'lodash';
import './swiperStyle.scss';

const OverlayCarousel = () => {
    const elementRef = useRef(null);
    const settings = {
        dots: false,
        infinite: true,
        adaptiveHeight: true,
        speed: 500,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1
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
        <Box width="75%" sx={{ margin: 'auto', position: 'relative', pt: 2 }}>
            <IconButton
                sx={{ position: 'absolute', top: '33%', left: '5%', zIndex: 999 }}
                color="secondary"
                onClick={handlePrev}
                aria-label="prev click"
            >
                <ArrowBackIosIcon />
            </IconButton>
            <IconButton
                sx={{ position: 'absolute', top: '33%', right: '5%', zIndex: 999 }}
                color="secondary"
                onClick={handleNext}
                aria-label="next click"
            >
                <ArrowForwardIosIcon />
            </IconButton>
            <Slider ref={elementRef} {...settings}>
                {Booklist.map((el) => (
                    <Box
                        className="overlay"
                        sx={{
                            display: 'flex !important',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <img src={el.imageUrl} key={el.title} className="imageSlide" alt={el.title} />
                        <Box
                            className="carousel-avatar"
                            sx={{
                                display: 'none',
                                textAlign: 'center',

                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Avatar
                                alt="Remy Sharp"
                                src={image.imageUrl()}
                                sx={{ marginTop: -3, width: 70, height: 70, border: '5px solid #fff' }}
                            />
                            <Typography gutterBottom variant="h6" component="div">
                                Don Brown
                            </Typography>
                            <Rating name="read-only" value={_lodash.random(1, 5)} readOnly size="small" />
                        </Box>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};

export default OverlayCarousel;
