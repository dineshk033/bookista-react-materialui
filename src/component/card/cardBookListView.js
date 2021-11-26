import React from 'react';
import { Box, Button, Card, CardContent, CardMedia, IconButton, Rating, Stack, Typography } from '@mui/material';
import { lorem, name } from 'faker';
import _lodash from 'lodash';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PropTypes from 'prop-types';

const LabelCaption = ({ label, name }) => (
    <Box>
        <Typography component="div" variant="caption">
            {label}
        </Typography>
        <Typography component="div" variant="h6">
            {name}
        </Typography>
    </Box>
);

const CardDetailView = ({ categories, imageUrl, title, description, price, offerPrice, writtenBy, publisher, rating, reviews, year }) => (
    <Card
        sx={{
            display: 'flex',
            ':hover': {
                boxShadow: '0 2px 14px 0 rgb(32 40 45 / 8%)'
            },
            borderRadius: '12px',
            minWidth: 250,
            boxShadow: 'none',
            mb: 3
        }}
    >
        <CardMedia
            component="img"
            sx={{ width: 120, height: 190, borderRadius: '4px', objectFit: 'fill', margin: 1 }}
            image={imageUrl}
            alt={title}
        />
        <CardContent sx={{ flex: '1 1 0', m: 2, p: 0 }}>
            <Typography component="div" variant="h6" color="text.secondary">
                {categories.filter((_, idx) => idx < 3).join(', ')}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={1}>
                    <Box>
                        <Typography gutterBottom component="div" variant="subtitle1">
                            {title}
                        </Typography>
                        <Typography
                            gutterBottom
                            variant="body1"
                            sx={{
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: 3,
                                overflow: 'hidden',
                                textOverflow: 'ellipsis'
                            }}
                            component="div"
                        >
                            {description}
                        </Typography>
                    </Box>
                    <Box sx={{ textAlign: 'center' }}>
                        <Rating name="read-only" value={rating} readOnly size="small" />
                        <Typography variant="caption" component="div">
                            ({reviews} reviews)
                        </Typography>
                    </Box>
                </Stack>
                <Stack direction="row" alignItems="baseline" spacing={1}>
                    <Typography gutterBottom variant="h4" component="div">
                        ${price}
                    </Typography>
                    <Typography gutterBottom variant="offerPrice" component="div">
                        ${offerPrice}
                    </Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                    <Stack direction="row" spacing={3}>
                        <LabelCaption label="Written by" name={writtenBy} />
                        <LabelCaption label="Publisher" name={publisher} />
                        <LabelCaption label="Year" name={year} />
                    </Stack>
                    <Box>
                        <Button variant="contained" color="primary" startIcon={<AddShoppingCartIcon />}>
                            Add to cart
                        </Button>
                        <IconButton
                            sx={{
                                marginLeft: '0.7em',
                                padding: '6px',
                                borderRadius: '8px',
                                border: '1px solid'
                            }}
                            color="secondary"
                            aria-label="add an alarm"
                        >
                            <FavoriteBorderIcon
                                sx={{
                                    fontSize: '1.2rem'
                                }}
                            />
                        </IconButton>
                    </Box>
                </Stack>
            </Box>
        </CardContent>
    </Card>
);

CardDetailView.propTypes = {
    categories: PropTypes.array,
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    offerPrice: PropTypes.number,
    writtenBy: PropTypes.string,
    publisher: PropTypes.string,
    rating: PropTypes.number,
    reviews: PropTypes.number,
    year: PropTypes.number
};

export default CardDetailView;
