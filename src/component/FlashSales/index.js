import { Box, Typography, Grid } from '@mui/material';
import React from 'react';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { lorem } from 'faker';
import SlickCarousel from 'component/carousel/slickCarousel';
import CardTemplate from 'component/card/cardTemplate3';
import { Booklist } from 'mock/data';

const CarouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    className: 'margin',
    slidesToScroll: 1
};

const LabelKeyComponent = ({ label, value }) => (
    <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h4" color="background.paper">
            {label}
        </Typography>
        <Typography variant="caption" color="background.paper">
            {value}
        </Typography>
    </Box>
);

const FlashSales = () => (
    <Box className="svg" p={6}>
        <Grid container columnSpacing={6}>
            <Grid item xs={3}>
                <Typography variant="h2" color="HighlightText" gutterBottom>
                    Flash Sales <FlashOnIcon sx={{ verticalAlign: 'middle', color: 'warning.main' }} />
                </Typography>
                <Typography variant="body1" color="background.paper" gutterBottom>
                    {lorem.sentences()}
                </Typography>
                <Box mt={3} p={1} sx={{ border: 1, borderRadius: 1, display: 'flex', justifyContent: 'space-around' }} width={200}>
                    <LabelKeyComponent label="05" value="Hours" />
                    <LabelKeyComponent label="42" value="Minutes" />
                    <LabelKeyComponent label="19" value="Second" />
                </Box>
            </Grid>
            <Grid item xs={9}>
                <SlickCarousel setting={CarouselSettings}>
                    {Booklist.map((el) => (
                        <CardTemplate {...el} key={el.title} />
                    ))}
                </SlickCarousel>
            </Grid>
        </Grid>
    </Box>
);

export default FlashSales;
