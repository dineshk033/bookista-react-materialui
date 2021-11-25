import React from 'react';
import { Grid } from '@mui/material';
import CustomFilter from 'component/catalogue/customFilter';

export default () => (
    <Grid container spacing={{ md: 5 }}>
        <Grid item xs={12} sm={12} md={3}>
            <CustomFilter />
        </Grid>
        <Grid item xs={12} sm={12} md={9}>
            <h4> Books</h4>
        </Grid>
    </Grid>
);
