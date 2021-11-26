import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Navbar from 'component/homepage/navbar';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import GroupsIcon from '@mui/icons-material/Groups';
import React from 'react';
import './homepage.scss';
import FeatureCard from 'component/homepage/featureCard';

const FEATUREARR = [
    {
        icon: 'delivery',
        label: 'Quick Delivery',
        detail: 'Quia ducimus quibusdam numquam suscipit dolores eum saepe ullam occaecati. Recusandae qui quia tempora nam at quia sunt sequi blanditiis.'
    },
    {
        icon: 'payment',
        label: 'Secure Payment',
        detail: 'Quia ducimus quibusdam numquam suscipit dolores eum saepe ullam occaecati. Recusandae qui quia tempora nam at quia sunt sequi blanditiis.'
    },
    {
        icon: 'quality',
        label: 'Best Quality',
        detail: 'Quia ducimus quibusdam numquam suscipit dolores eum saepe ullam occaecati. Recusandae qui quia tempora nam at quia sunt sequi blanditiis.'
    },
    {
        icon: 'guarantee',
        label: 'Retuern Guarantee',
        detail: 'Quia ducimus quibusdam numquam suscipit dolores eum saepe ullam occaecati. Recusandae qui quia tempora nam at quia sunt sequi blanditiis.'
    }
];

export default () => (
    <div>
        <Grid container sx={{ height: '55vh' }} className="svg" spacing={{ xs: 2, md: 3 }}>
            {/* <Grid item xs={12}>
                    <Navbar />
                </Grid> */}
            <Grid item xs={6}>
                <Box
                    ml={4}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-evenly',
                        alignItems: 'flex-start',
                        height: '100%'
                    }}
                >
                    <Box component="div">
                        <Typography variant="h1" component="h1">
                            Welcome to <b>Bookista</b>
                        </Typography>
                        <Typography variant="h1" component="h1" gutterBottom>
                            Online Book Store
                        </Typography>
                        <Typography variant="caption" color="grey.300" component="h1" gutterBottom>
                            Quia ducimus quibusdam numquam suscipit dolores eum saepe ullam occaecati. Recusandae qui quia tempora nam at
                            quia sunt sequi blanditiis.
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <div style={{ marginRight: '26px' }}>
                            <Typography
                                mt={2}
                                variant="subtitle1"
                                sx={{ letterSpacing: '2px' }}
                                component="h6"
                                color="background.paper"
                                gutterBottom
                            >
                                <LibraryBooksIcon sx={{ verticalAlign: 'middle' }} /> 59+k
                            </Typography>
                            <Typography variant="subtitle2" color="grey.300" component="h6" gutterBottom>
                                Book Collection
                            </Typography>
                        </div>
                        <div>
                            <Typography
                                mt={2}
                                variant="subtitle1"
                                sx={{ letterSpacing: '2px' }}
                                component="h6"
                                color="background.paper"
                                gutterBottom
                            >
                                <GroupsIcon sx={{ verticalAlign: 'middle' }} /> 19,634
                            </Typography>
                            <Typography variant="subtitle2" color="grey.300" component="h6" gutterBottom>
                                Customers
                            </Typography>
                        </div>
                    </Box>
                    <Button sx={{ mt: 2 }} color="secondary" endIcon={<ArrowForwardIcon />} variant="contained">
                        Go to Collections
                    </Button>
                </Box>
            </Grid>

            <Grid item xs={6}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', height: '100%' }}>
                    <img
                        src="https://images-na.ssl-images-amazon.com/images/I/81Lb75rUhLL.jpg"
                        style={{ marginRight: '20px' }}
                        alt="Money Book"
                        width="25%"
                    />
                    <img
                        src="https://images-na.ssl-images-amazon.com/images/I/71tbalAHYCL.jpg"
                        style={{ marginRight: '20px' }}
                        alt="Money Book"
                        width="23%"
                    />
                    <img
                        src="http://georgerrmartin.com/gallery/coverart/GOThcEng.jpg"
                        style={{ marginRight: '20px' }}
                        alt="Money Book"
                        width="20%"
                    />
                </Box>
            </Grid>
        </Grid>
        <Grid container>
            {FEATUREARR.map((el) => (
                <Grid ke={el.icon} item xs={3}>
                    <FeatureCard {...el} />
                </Grid>
            ))}
        </Grid>
    </div>
);
