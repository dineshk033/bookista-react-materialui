import { Box } from '@mui/material';
import Navbar from 'component/homepage/navbar';
import React from 'react';
import { Outlet } from 'react-router-dom';

const DashboardComponent = () => (
    <>
        <Box p={2} bgcolor="primary.main">
            <Navbar />
        </Box>
        <Outlet />
    </>
);

export default DashboardComponent;
