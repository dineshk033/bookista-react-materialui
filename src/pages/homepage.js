import { Typography, Box } from '@mui/material';
import React from 'react';
import './homepage.scss';

export default () => {
    console.log('hompage');
    return (
        <div style={{ height: '65vh' }} className="svg">
            <Box height="4rem" borderRadius="8px" bgcolor="background.paper" p={1} alignItems="center" display="flex" flexDirection="row">
                <Typography variant="h6">Bookista</Typography>
            </Box>
        </div>
    );
};
