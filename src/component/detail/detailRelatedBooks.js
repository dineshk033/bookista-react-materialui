import React, { useEffect, useState } from 'react';
import { Grid, Box, Typography ,Button } from '@mui/material';
import CardDetailsTemplate from '../card/cardDetailsTemplate';
import { BooklistData } from 'mock/data';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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
                <Box key={el.title}>
                    <CardDetailsTemplate {...el} />
                </Box>
            ))}
            <Box textAlign='center' mt={2}>
                <Button variant="contained" sx={{ textTransform : 'none'}} color="primary" endIcon={<ArrowForwardIcon />}>
                    View more
                </Button>
            </Box>
        </Box>
    );
};
export default DetailRelatedBooks;
