// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Typography, Box, Button } from '@mui/material';
import SelectDropDown from './selectDropDown';
import { FILTERSMOCK } from 'mock/data';

export default (params) => (
    <Box px={2} pt={2} ml={5} sx={{ bgcolor: 'grey.100', borderRadius: '16px' }}>
        <Typography variant="h4" component="h3" gutterBottom>
            Filters
        </Typography>
        {FILTERSMOCK.map((el) => (
            <SelectDropDown key={el.label} {...el} />
        ))}
        <Button variant="contained" color="secondary" fullWidth>
            Refine Search
        </Button>
        <Button variant="text" sx={{ my: 1 }} fullWidth>
            Reset Filter
        </Button>
    </Box>
);
