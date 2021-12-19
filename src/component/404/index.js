// eslint-disable-next-line no-unused-vars
import React from 'react';
import image from 'asset/images/3819740.jpg';
import { Box } from '@mui/material';

const PageNotFound = () => (
    <Box sx={{ textAlign: 'center', my: 3 }}>
        <img src={image} height="400" alt="404" />
    </Box>
);

export default PageNotFound;
