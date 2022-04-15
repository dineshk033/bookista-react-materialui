// eslint-disable-next-line no-unused-vars
import React from 'react';
import { ListItemIcon, Paper, InputBase, Button, Grid, Typography, Divider, IconButton, List, ListItem, ListItemText } from '@mui/material';
import logo from 'asset/images/logo.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const ABOUT = ['About us', 'Contact us', 'Product', 'Login', 'Sign up'];
const CUSTOMER = ['My Account', 'Orders', 'Tracking List', 'Terms', 'Privacy Policy', 'FAQ'];
const ICONS = [
    <FacebookIcon color="secondary" fontSize="small" />,
    <YouTubeIcon color="secondary" fontSize="small" />,
    <TwitterIcon color="secondary" fontSize="small" />,
    <LinkedInIcon color="secondary" fontSize="small" />,
    <InstagramIcon color="secondary" fontSize="small" />
];

const ICONSTYLE = {
    border: '1px solid lightgrey',
    mr: 1.5,
    '&.MuiIconButton-root': {
        '&:hover': {
            '&>*': {
                color: '#ffffff'
            },
            backgroundColor: 'secondary.main'
        }
    }
};

const CONTACT = [
    {
        icon: <LocationOnIcon color="secondary" fontSize="small" />,
        label: '832, Bandra Curla Complex, Mumbai, Maharashtra - 400 001, India.'
    },
    { icon: <PhoneIcon color="secondary" fontSize="small" />, label: '+91 9874561230' },
    { icon: <MailOutlineIcon color="secondary" fontSize="small" />, label: 'bookistaContact@gmail.com' }
];

const Footer = () => (
    <Grid container>
        <Grid className="svg1" sx={{ height: '30vh', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }} item xs={12}>
            <Grid container item xs={4}>
                <Typography variant="h2" color="background.paper">
                    Subscribe to our newsletter for newest books updates
                </Typography>
            </Grid>
            <Grid container item xs={4}>
                <Paper
                    component="div"
                    sx={{ display: 'flex', alignItems: 'center', border: '1px solid white', width: '100%', bgcolor: 'transparent' }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1, color: '#ffffff' }}
                        placeholder="Enter your email-id"
                        inputProps={{ 'aria-label': 'Enter your email-id' }}
                    />
                    <Divider sx={{ height: 28, m: 0.5, bgcolor: '#ffff' }} orientation="vertical" />
                    <Button color="warning">Subscribe</Button>
                </Paper>
            </Grid>
        </Grid>
        <Grid container item xs={12} justifyContent="space-between" m={10}>
            <Grid item xs={12} md={3} lg={4}>
                <img src={logo} alt="logo" />
                <Typography variant="caption" color="text.primary" component="p" mt={1} mb={3}>
                    We offer huge collection of books in diverse category of Fiction, Non-fiction, Biographies, History, Religions, Self
                    -Help, Children.
                </Typography>
                <Typography variant="h6" my={1}>
                    Follow us
                </Typography>
                {ICONS.map((el, _) => (
                    <IconButton sx={ICONSTYLE} key={_.toString()} aria-label="Facebook">
                        {el}
                    </IconButton>
                ))}
            </Grid>
            <Grid item xs={12} md={3} lg={2}>
                <Typography variant="h6" gutterBottom>
                    Quick Links
                </Typography>
                <List dense>
                    {ABOUT.map((el) => (
                        <ListItem disablePadding key={el}>
                            <ListItemText primary={el} />
                        </ListItem>
                    ))}
                </List>
            </Grid>
            <Grid item xs={12} md={3} lg={2}>
                <Typography variant="h6" gutterBottom>
                    Customer Area
                </Typography>
                <List dense>
                    {CUSTOMER.map((el) => (
                        <ListItem disablePadding key={el}>
                            <ListItemText primary={el} />
                        </ListItem>
                    ))}
                </List>
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
                <Typography variant="h6" gutterBottom>
                    Customer Area
                </Typography>
                <List>
                    {CONTACT.map(({ label, icon }) => (
                        <ListItem disablePadding sx={{ mb: 1 }} key={label}>
                            <ListItemIcon
                                sx={{
                                    '&.MuiListItemIcon-root': {
                                        minWidth: '40px'
                                    }
                                }}
                            >
                                {icon}
                            </ListItemIcon>
                            <ListItemText primary={label} />
                        </ListItem>
                    ))}
                </List>
            </Grid>
        </Grid>
    </Grid>
);

export default Footer;
