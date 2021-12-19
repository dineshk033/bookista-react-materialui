import { Typography, Paper, Box, Stack, Button } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import { lorem } from 'faker';

const CardTemplate4 = ({ title, imageUrl, writtenBy, description, price, offerPrice }) => (
    <Paper sx={{ p: 5, bgcolor: 'primary.main', color: 'background.paper', display: 'flex', flexDirection: 'row' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', pr: 3 }}>
            <div>
                <Typography variant="subtitle1" color="background.paper">
                    {title}
                </Typography>
                <Typography variant="caption" color="background.paper">
                    By {writtenBy}
                </Typography>
                <Typography variant="subtitle2" color="background.paper" mt={2} gutterBottom>
                    {lorem.paragraph()}
                </Typography>
            </div>
            <Stack direction="row" alignItems="baseline" mt={1} spacing={2}>
                <Typography gutterBottom variant="h4" color="background.paper" component="div">
                    ${offerPrice}
                </Typography>
                <Typography gutterBottom variant="offerPrice" color="secondary.main" component="div">
                    ${price}
                </Typography>
                <Button variant="contained" sx={{ marginBottom: 1 }} color="warning">
                    Buy Now
                </Button>
            </Stack>
        </Box>
        <img width="150" height="200" src={imageUrl} alt={title} />
    </Paper>
);
CardTemplate4.propTypes = {
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    writtenBy: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    offerPrice: PropTypes.number
};
export default CardTemplate4;
