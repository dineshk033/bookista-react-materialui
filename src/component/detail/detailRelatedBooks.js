import React, { useEffect, useState } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import CardDetailsTemplate from '../card/cardDetailsTemplate';
import { BooklistData } from 'mock/data';

const DetailRelatedBooks = () => {
    const [fullData, setFullData] = useState([]);

    useEffect(() => {
        const temp = BooklistData(0);
        temp.length = 3;
        setFullData(temp);
    }, []);

    return (
        <Box>
        <Typography variant="h2" component="div" ml={1}>
            Related Books
            </Typography>
            {fullData.map((el) => (
                <Box key={el.title} >
                    <CardDetailsTemplate {...el} />
                </Box>
            ))}
        
        </Box>
    );
};
export default DetailRelatedBooks;
