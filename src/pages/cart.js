import React, { useEffect, useState } from 'react';
import CardTemplate6 from '../component/card/cardTemplate6';
import { BooklistData, Booklist } from 'mock/data';
import { Box, Stack, Grid, Typography} from '@mui/material';
import ShoppingSummary from '../component/card/shoppingSummary';

const Cart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const temp = BooklistData(0);
        temp.length = 3;
        setData(temp);
    }, []);

    return (
        <Box p={10} >
            <Grid container ml={5} spacing={1} sx={{    backgroundColor: 'lightcyan' ,     padding: '1rem'}}>
            <Grid item xs={6}>
            <Typography gutterBottom variant="h5" component="h5">
                            Items(5)
                        </Typography>
                        </Grid>
                        <Grid item xs={1}>
                        <Typography gutterBottom variant="h5" component="h5">
                            Quantity
                        </Typography>
                        </Grid>
                        <Grid item xs={2} textAlign='center'>
                        <Typography gutterBottom variant="h5" component="h5">
                           Price
                        </Typography>
                        </Grid>
                        <Grid item xs={1}>
                        <Typography gutterBottom variant="h5" component="h5">
                            Total Price
                        </Typography>
                        </Grid>
                        <Grid item xs={1}>
                            {' '}
                        </Grid>
                
                </Grid>
            {data.map((item) => (
                <CardTemplate6 {...item}/>
            ))}
            
            <Box m={4} textAlign='right' >
            <Typography gutterBottom variant="h5" component="h5" mr={20}>
                            Subtotal (5 books) :  2493
                        </Typography>
            </Box>
            <ShoppingSummary/>
        </Box>
    );
};

export default Cart;
