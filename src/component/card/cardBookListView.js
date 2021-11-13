import React from 'react';
import { Box, Button, Card, CardContent, CardMedia, IconButton, Rating, Stack, Typography } from '@mui/material';
import { lorem, name } from 'faker';
import _lodash from 'lodash';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

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

export default () => (
    <Card
        sx={{
            display: 'flex',
            ':hover': {
                boxShadow: '0 2px 14px 0 rgb(32 40 45 / 8%)'
            },
            borderRadius: '12px',
            minWidth: 250,
            maxWidth: 620,
            boxShadow: 'none'
        }}
    >
        <CardMedia
            component="img"
            sx={{ width: 120, height: 190, borderRadius: '4px', objectFit: 'fill', margin: 1 }}
            image="https://1.bp.blogspot.com/-H0VVJFPjuY8/XwsfuKnIzAI/AAAAAAAACcQ/YfWPaY06tas6btdgiQrasQy52VnlEsLIQCLcBGAsYHQ/s499/51pX7aVZILL._SX322_BO1%252C204%252C203%252C200_.jpg"
            alt="Live from space album cover"
        />
        <CardContent sx={{ flex: '1 1 0' }}>
            <Typography component="div" variant="h6" color="text.secondary">
                Fiction
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <Stack direction="row" alignItems="flex-start" spacing={1}>
                    <Box>
                        <Typography gutterBottom component="div" variant="subtitle1">
                            {name.title()}
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
                            {lorem.sentences()}
                        </Typography>
                    </Box>
                    <Box sx={{ textAlign: 'center' }}>
                        <Rating name="read-only" value={_lodash.random(1, 5)} readOnly size="small" />
                        <Typography variant="caption" component="div">
                            ({_lodash.random(200, 999)} reviews)
                        </Typography>
                    </Box>
                </Stack>
                <Stack direction="row" alignItems="baseline" spacing={1}>
                    <Typography gutterBottom variant="h4" component="div">
                        $499
                    </Typography>
                    <Typography gutterBottom variant="offerPrice" component="div">
                        $649
                    </Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                    <Stack direction="row" spacing={3}>
                        <LabelCaption label="Written by" name={name.findName()} />
                        <LabelCaption label="Publisher" name={name.jobType()} />
                        <LabelCaption label="Year" name={_lodash.random(1986, 2020)} />
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
