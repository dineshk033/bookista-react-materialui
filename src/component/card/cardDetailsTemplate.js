import React from 'react';
import { Avatar, Card, CardContent, CardMedia, Link, Stack, Typography, Grid, Box, 
    Button } from '@mui/material';
import { image, lorem, name, random } from 'faker';
import { truncate } from 'lodash';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const CardDetailsTemplate = ({ title, imageUrl, price, offerPrice }) => (
    <Card
        sx={{
            // border: border ? '1px solid' : 'none',
            // borderColor: theme.palette.primary[200] + 75,
            ':hover': {
                boxShadow: '0 2px 14px 0 rgb(32 40 45 / 8%)'
            },
            borderRadius: '12px',
            mx: 1.5,
            boxShadow: 'none'
        }}
    >
        <Grid container m={2}>
            <Grid item xs={4}>
                <CardMedia
                    component="img"
                    sx={{ borderRadius: '12px' }}
                    height="100%"
                    image={imageUrl}
                    // image="https://1.bp.blogspot.com/-H0VVJFPjuY8/XwsfuKnIzAI/AAAAAAAACcQ/YfWPaY06tas6btdgiQrasQy52VnlEsLIQCLcBGAsYHQ/s499/51pX7aVZILL._SX322_BO1%252C204%252C203%252C200_.jpg"
                    alt="green iguana"
                />
            </Grid>
            <Grid item xs={8}>
                <CardContent sx={{ padding: ' !important' }}>
                    <Stack direction="column" spacing={4} >
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                            <Typography variant="h6" component="div">
                                $ {price} <span style={{ textDecoration: 'line-through' }}>$ {offerPrice} </span>
                            </Typography>
                            
                        <Stack direction="row" spacing={1}>
                            <Button variant="outlined" color='error' startIcon={<ShoppingCartIcon />}>
                                Add to cart
                            </Button>
                            <Button variant="outlined" color='error' startIcon={<FavoriteBorderIcon />}>
                                {' '}
                            </Button>
                        </Stack>
                    </Stack>
                </CardContent>
            </Grid>
        </Grid>
    </Card>
);

export default CardDetailsTemplate;
