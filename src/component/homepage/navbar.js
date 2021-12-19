import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Link from '@mui/material/Link';
import { Typography, Box, Stack, Button, Breadcrumbs } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import GridViewIcon from '@mui/icons-material/GridView';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import logo from 'asset/images/logo.png';
import { image, internet, name } from 'faker';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
        color: theme.palette.background.paper,
        fontSize: '0.55rem'
    }
}));

const breadcrumbNameMap = {
    books: 'Books',
    home: 'Home'
};

const LinkRouter = (props) => <Link {...props} component={RouterLink} />;

export default () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);
    console.log(location, pathnames);
    return (
        <>
            <Box
                borderRadius="8px"
                bgcolor="background.paper"
                p={1}
                justifyContent="space-around"
                alignItems="center"
                display="flex"
                flexDirection="row"
            >
                <RouterLink to="books/">
                    <img src={logo} alt="logo" />
                </RouterLink>
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
            {pathnames.length > 1 && (
                <Breadcrumbs sx={{ mt: 1, ml: 10 }} aria-label="breadcrumb">
                    {pathnames.map((value, index) => {
                        const last = index === pathnames.length - 1;
                        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                        return last ? (
                            <Typography color="grey.300" key={to}>
                                {breadcrumbNameMap[value]}
                            </Typography>
                        ) : (
                            <LinkRouter underline="hover" color="background.paper" to={to} key={to}>
                                {breadcrumbNameMap[value]}
                            </LinkRouter>
                        );
                    })}
                </Breadcrumbs>
            )}
        </>
    );
};
