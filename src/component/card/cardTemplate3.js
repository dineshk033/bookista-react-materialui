import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CardMedia, LinearProgress, Rating, Stack, Typography, Box, IconButton } from '@mui/material';
import _lodash from 'lodash';
import { name } from 'faker';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const CardTemplate3 = ({ title, imageUrl, writtenBy, description, price, offerPrice }) => (
    <Card
        sx={{
            display: 'flex',
            ':hover': {
                boxShadow: '0 2px 14px 0 rgb(32 40 45 / 8%)'
            },
            borderRadius: '12px',
            minWidth: 250,
            mx: 1,
            // maxWidth: 320,
            boxShadow: 'none'
        }}
    >
        <CardMedia
            component="img"
            sx={{ width: 120, height: 150, borderRadius: '4px', objectFit: 'fill', margin: 1 }}
            image={imageUrl}
            alt={title}
        />
        <CardContent sx={{ flex: '1 1 0', padding: '0.7em !important' }}>
            <Stack direction="row" alignItems="center" spacing={1}>
                <Typography component="div" variant="caption">
                    Fiction
                </Typography>
                <Rating name="read-only" value={_lodash.random(1, 5)} readOnly size="small" />
                <Typography variant="caption" component="div">
                    ({_lodash.random(200, 999)})
                </Typography>
            </Stack>
            <Typography mt={1} gutterBottom sx={{ width: '85%' }} component="div" noWrap variant="h5">
                {title}
            </Typography>
            <Typography mb={2} gutterBottom variant="subtitle2" component="div">
                {writtenBy}
            </Typography>
            <Stack direction="row" alignItems="baseline" mt={1} spacing={1}>
                <Typography gutterBottom variant="h4" component="div">
                    ${offerPrice}
                </Typography>
                <Typography gutterBottom variant="offerPrice" component="div">
                    ${price}
                </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2}>
                <Box component="div" sx={{ flex: 1 }} mt={1}>
                    <LinearProgress variant="determinate" value={_lodash.random(50, 80)} />
                    <Typography gutterBottom variant="subtitle2" component="div">
                        {_lodash.random(11, 33)} book left
                    </Typography>
                </Box>
                <IconButton
                    sx={{ backgroundColor: 'secondary.main', color: '#fafafafa', marginTop: '-12px !important' }}
                    size="medium"
                    aria-label="upload picture"
                >
                    <AddShoppingCartIcon sx={{ width: '0.75em', height: '0.75em' }} />
                </IconButton>
            </Stack>
        </CardContent>
    </Card>
);

CardTemplate3.propTypes = {
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    writtenBy: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    offerPrice: PropTypes.number
};

export default CardTemplate3;
