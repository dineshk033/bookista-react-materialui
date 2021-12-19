import { Typography, Paper, Box, Stack, Button } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

const TWO_LINES_TRUNCATE = {
    display: '-webkit-box',
    maxWidth: ' 100%',
    ' -webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden'
};

const CardTemplate5 = ({ title, imageUrl, writtenBy, description, price, offerPrice }) => (
    <Paper sx={{ p: 2, bgcolor: 'primary.main', color: 'background.paper', display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex' }}>
            <img width="80" height="100" src={imageUrl} alt={title} />
            <Box sx={{ ml: 1.5 }}>
                <Typography variant="subtitle1" color="background.paper">
                    {title}
                </Typography>
                <Typography variant="caption" color="background.paper">
                    By {writtenBy}
                </Typography>
                <Typography
                    variant="subtitle2"
                    sx={{ WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', display: '-webkit-box' }}
                    color="background.paper"
                    mt={2}
                    gutterBottom
                >
                    {description}
                </Typography>
            </Box>
        </Box>
        <Box
            sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'space-between', ml: 1, width: '150px' }}
        >
            <Stack direction="row" alignItems="baseline" mt={1} spacing={1.5}>
                <Typography gutterBottom variant="h4" color="background.paper" component="div">
                    ${offerPrice}
                </Typography>
                <Typography gutterBottom variant="offerPrice" color="secondary.main" component="div">
                    ${price}
                </Typography>
            </Stack>

            <Button variant="contained" sx={{ marginBottom: 1 }} color="warning">
                Buy
            </Button>
        </Box>
    </Paper>
);

CardTemplate5.propTypes = {
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    writtenBy: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    offerPrice: PropTypes.number
};

export default CardTemplate5;
