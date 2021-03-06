import React from 'react';
import { Grid, Box, Typography, Button, ToggleButtonGroup, ToggleButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CustomFilter from 'component/catalogue/customFilter';
import GridViewIcon from '@mui/icons-material/GridView';
import ViewListIcon from '@mui/icons-material/ViewList';
import BookGrid from 'component/catalogue/bookGrid';

export default () => (
    <Grid sx={{ pt: 3 }} container spacing={{ md: 5 }}>
        <Grid item xs={12} sm={12} md={3}>
            <CustomFilter />
        </Grid>
        <Grid sx={{ pr: 10 }} item xs={12} sm={12} md={9}>
            <Box mb={2} display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
                <Box>
                    <Typography variant="h4" gutterBottom>
                        Books
                    </Typography>
                    <Typography variant="caption" gutterBottom>
                        Over 475+ books available here, find it now
                    </Typography>
                </Box>
                <Box mr={3} display="flex" alignItems="center">
                    <Button variant="outlined" size="small" endIcon={<KeyboardArrowDownIcon />} color="secondary">
                        Newest
                    </Button>
                    <ToggleButtonGroup sx={{ ml: 2 }} size="small" value="List" color="secondary" exclusive>
                        <ToggleButton value="Grid" aria-label="Grid">
                            <GridViewIcon sx={{ fontSize: '1.2rem' }} />
                        </ToggleButton>
                        <ToggleButton value="List" aria-label="List">
                            <ViewListIcon sx={{ fontSize: '1.2rem' }} />
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Box>
            </Box>
            <BookGrid />
        </Grid>
    </Grid>
);
