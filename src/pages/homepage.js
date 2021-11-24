import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import { Typography, Box, Stack, Button } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import './homepage.scss';
import { styled } from '@mui/material/styles';
import GridViewIcon from '@mui/icons-material/GridView';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import logo from 'asset/images/logo.png';
import { image, internet, name } from 'faker';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
        color: theme.palette.background.paper,
        fontSize: '0.55rem'
    }
}));

export default () => {
    console.log('hompage');
    return (
        <div style={{ height: '65vh' }} className="svg">
            <Box
                borderRadius="8px"
                bgcolor="background.paper"
                p={1}
                justifyContent="space-around"
                alignItems="center"
                display="flex"
                flexDirection="row"
            >
                <img src={logo} alt="logo" />
                <Stack sx={{ padding: 1 }} spacing={4} boxSizing="border-box" alignItems="center" width="75%" direction="row">
                    <Paper
                        component="form"
                        sx={{
                            p: '2px',
                            display: 'flex',
                            alignItems: 'center',
                            boxShadow: 'none',
                            backgroundColor: 'grey.200',
                            width: '100%'
                        }}
                        color="secondary"
                    >
                        <Button
                            id="basic-button"
                            aria-controls="basic-menu"
                            aria-haspopup="true"
                            // aria-expanded={open ? 'true' : undefined}
                            // onClick={handleClick}
                            startIcon={<GridViewIcon color="orange" />}
                            endIcon={<KeyboardArrowDownIcon />}
                        >
                            Menu
                        </Button>
                        <InputBase
                            sx={{ ml: 1, flex: 1, width: '60%' }}
                            placeholder="Search books here"
                            inputProps={{ 'aria-label': 'search Books' }}
                        />
                        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                    <StyledBadge color="secondary" badgeContent="20">
                        <FavoriteBorderIcon />
                    </StyledBadge>
                    <StyledBadge color="secondary" badgeContent="4">
                        <ShoppingCartOutlinedIcon />
                    </StyledBadge>
                    <Stack direction="row" spacing={{ xs: 1 }} alignItems="center">
                        <Avatar alt="Cindy Baker" src={image.people()} variant="rounded" />
                        <Box maxwidth="180px">
                            <Typography variant="h6">{name.firstName()}</Typography>
                            <Typography variant="caption" component="h6" noWrap>
                                {internet.email()}
                            </Typography>
                        </Box>
                        <KeyboardArrowDownIcon />
                    </Stack>
                </Stack>
            </Box>
        </div>
    );
};
