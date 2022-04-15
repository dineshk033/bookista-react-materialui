import React, { useEffect, useState } from 'react';
import {
    Card,
    CardContent,
    CardMedia,
    Chip,
    Stack,
    Typography,
    Rating,
    Box,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    Grid
} from '@mui/material';
import faker from 'faker';
import CommentIcon from '@mui/icons-material/Comment';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailIcon from '@mui/icons-material/Mail';
import BoltIcon from '@mui/icons-material/Bolt';
import DoneIcon from '@mui/icons-material/Done';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { BooklistData } from 'mock/data';
import BookGrid from 'component/catalogue/bookGrid';
import DetailRelatedBooks from './detailRelatedBooks';

const DetailView = ({ boxShadow = true, shadow = null, ...data }) => {
    const [bookDetails, setBookDetails] = useState([]);

    const detailsData = {
        Categories: ['UX', 'Design'],
        Title: "Don't Make Me Think, Revisited",
        WrittenBy: 'Steve Krug',
        Publisher: 'New Riders',
        Rating: 4,
        Reviews: 225
    };

    useEffect(() => {
        setBookDetails(detailsData);
    }, []);

    const DetailsTable = () => (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ borderBottom: '3px solid orange' }}>Product Details</TableCell>
                        <TableCell align="right">Customer Reviews</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Object.keys(bookDetails).map((row , i) => (
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key={i}>
                            <TableCell component="th" scope="row">
                                <b>{row}</b>
                            </TableCell>
                            <TableCell align="right">{bookDetails[row]}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );

    return (
        <Box m={5} p={10}>
            <Stack direction="row" spacing={2} sx={{ height: 300 }}>
                <Card
                    sx={{
                        ':hover': {
                            boxShadow: boxShadow ? shadow || '0 2px 14px 0 rgb(32 40 45 / 8%)' : 'inherit'
                        },
                        borderRadius: '12px',
                        minWidth: 250,
                        maxWidth: 300,
                        boxShadow: 'none'
                    }}
                >
                    <CardMedia
                        component="img"
                        sx={{ borderRadius: '12px' }}
                        height="100%"
                        image={faker.random.image()}
                        // image="https://1.bp.blogspot.com/-H0VVJFPjuY8/XwsfuKnIzAI/AAAAAAAACcQ/YfWPaY06tas6btdgiQrasQy52VnlEsLIQCLcBGAsYHQ/s499/51pX7aVZILL._SX322_BO1%252C204%252C203%252C200_.jpg"
                        alt="green iguana"
                    />
                </Card>
                <Box>
                    <Card
                        sx={{
                            ':hover': {
                                boxShadow: boxShadow ? shadow || '0 2px 14px 0 rgb(32 40 45 / 8%)' : 'inherit'
                            },
                            borderRadius: '12px',
                            minWidth: '950px',
                            maxWidth: 300,
                            boxShadow: 'none'
                        }}
                    >
                        <CardContent sx={{ padding: '16px !important' }}>
                            <Typography gutterBottom variant="h5" component="div">
                                {faker.name.title()}
                            </Typography>
                            <Stack direction="row" spacing={2} m={2}>
                                <Rating name="read-only" value={2} readOnly sx={{ flexGrow: 1 }} />
                                <CommentIcon /> 235 Reviews
                                <ThumbUpAltIcon /> 456 Likes
                                <FacebookIcon />
                                <TwitterIcon />
                                <WhatsAppIcon />
                                <MailIcon />
                            </Stack>
                            <Stack direction="row" spacing={2} m={2}>
                                <Box sx={{ flexGrow: 1 }}>
                                    <Avatar alt="Author" src={faker.random.image()} variant="square" />
                                    <span>
                                        Written by : <b> Steve Krug </b>
                                    </span>
                                    <span>
                                        Pubisher : <b>New Riders </b>
                                    </span>
                                    <span>
                                        Year <b>2014</b>
                                    </span>
                                </Box>
                                <Stack direction="row" spacing={2} m={2} height='2rem'>
                                    <Button variant="outlined" startIcon={<BoltIcon />}>
                                        Free shipping
                                    </Button>
                                    <Button variant="outlined" color='error' startIcon={<DoneIcon />}>
                                        In stock
                                    </Button>
                                </Stack>
                            </Stack>
                            <Typography
                                variant="body2"
                                sx={{
                                    display: '-webkit-box',
                                    WebkitBoxOrient: 'vertical',
                                    WebkitLineClamp: 3,
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis'
                                }}
                                paragraph
                                color="text.secondary"
                            >
                                {faker.lorem.sentences()}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    display: '-webkit-box',
                                    WebkitBoxOrient: 'vertical',
                                    WebkitLineClamp: 3,
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis'
                                }}
                                paragraph
                                color="text.secondary"
                            >
                                {faker.lorem.sentences()}
                            </Typography>
                            <Stack direction="row" spacing={2} m={2}>
                                <Box display="flex" flexGrow="1" justifyContent="space-around">
                                    <Typography variant="h2" component="div">
                                        $ 800{' '}
                                    </Typography>
                                    <span style={{ textDecoration: 'line-through' }}>$ 899 </span>
                                </Box>
                                <Stack direction="row" spacing={2}>
                                    <Button variant="outlined">1</Button>
                                    <Button variant="contained" color="error" startIcon={<ShoppingCartIcon />}>
                                        Add to cart
                                    </Button>
                                    <Button variant="outlined" color="error" startIcon={<FavoriteBorderIcon />}>
                                        {' '}
                                    </Button>
                                </Stack>
                            </Stack>
                        </CardContent>
                    </Card>
                </Box>
            </Stack>
            <Grid container mt={4} spacing={1}>
                <Grid item xs={8}>
                    <DetailsTable />
                </Grid>
                <Grid item xs={4}>
                    <DetailRelatedBooks />
                </Grid>
            </Grid>
        </Box>
    );
};

export default DetailView;
