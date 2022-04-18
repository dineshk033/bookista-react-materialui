import React from 'react';
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
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CardTemplate6 = ({ title, imageUrl, price, offerPrice, description , writtenBy , publisher}) => (
    <Card 
        sx={{
            borderBottom: '1px solid lightgrey',
            ':hover': {
                boxShadow: '0 2px 14px 0 rgb(32 40 45 / 8%)'
            },
            m: 1.5,
            boxShadow: 'none'
        }}
    >
        <Grid container m={2} >
            <Grid item xs={2}>
                <CardMedia
                    component="img"
                    sx={{ borderRadius: '12px' }}
                    height="300"
                    image={imageUrl}
                    // image="https://1.bp.blogspot.com/-H0VVJFPjuY8/XwsfuKnIzAI/AAAAAAAACcQ/YfWPaY06tas6btdgiQrasQy52VnlEsLIQCLcBGAsYHQ/s499/51pX7aVZILL._SX322_BO1%252C204%252C203%252C200_.jpg"
                    alt="green iguana"
                />
            </Grid>
            <Grid item xs={10}>
            <CardContent sx={{ padding: ' !important' }}>
            <Grid container display='flex' justifyContent='center' alignItems='center' spacing={3}>
                <Grid item xs={5}>
                    <Stack direction="column" spacing={4} >
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography gutterBottom variant="body1" component="p">
                            {description}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="p">
                            {writtenBy}
                        </Typography>
                        <Typography gutterBottom variant="body1" component="p">
                            Free Delivery
                        </Typography>
                        <Typography gutterBottom variant="body1" component="p">
                            ISBN 55545454545
                        </Typography>
                    </Stack>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography gutterBottom variant="h6" component="p">
                    <Button variant="outlined" startIcon={<RemoveIcon />}  endIcon={<AddIcon/>}>1</Button>
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography gutterBottom variant="h6" component="p">
                            {price}
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography gutterBottom variant="h6" component="p">
                    {price}
                        </Typography>
                    </Grid>
                    <Grid item xs={1}>
                    <Typography gutterBottom variant="h6" component="p">
                            <DeleteIcon color='secondary'/>
                        </Typography>
                    </Grid>
                    </Grid>
                </CardContent>
            </Grid>
        </Grid>
    </Card>
);

export default CardTemplate6;
