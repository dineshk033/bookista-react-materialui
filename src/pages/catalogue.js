import { Grid } from '@mui/material';
import CustomFilter from 'component/catalogue/customFilter';
import React from 'react';

export default (params) => (
    <Grid container spacing={{ md: 5 }}>
        <Grid item xs={12} sm={12} md={3}>
            <CustomFilter />
        </Grid>
        <Grid item xs={12} sm={12} md={9}>
            <h4> Books</h4>
        </Grid>
    </Grid>
);
