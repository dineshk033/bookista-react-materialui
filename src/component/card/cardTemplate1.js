import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CardMedia, Chip, Stack, Typography, Button } from '@mui/material';
import { styled } from '@mui/styles';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import faker from 'faker';
// import thinkGrowRich from 'asset/images/thinkGrowRich.jpeg';

const CustomChip = styled(Chip)({
    height: '24px',
    borderRadius: '5px',
    '& .MuiChip-label': {
        fontSize: '0.7rem',
        fontWeight: 600,
        textTransform: 'uppercase'
    }
});

const CardTemplate1 = ({ boxShadow = true, shadow = null }) => (
    <Card
        sx={{
            // border: border ? '1px solid' : 'none',
            // borderColor: theme.palette.primary[200] + 75,
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
            height="175"
            image="https://1.bp.blogspot.com/-H0VVJFPjuY8/XwsfuKnIzAI/AAAAAAAACcQ/YfWPaY06tas6btdgiQrasQy52VnlEsLIQCLcBGAsYHQ/s499/51pX7aVZILL._SX322_BO1%252C204%252C203%252C200_.jpg"
            alt="green iguana"
        />
        <CardContent sx={{ padding: '16px !important' }}>
            <Typography gutterBottom variant="h5" component="div">
                {faker.name.title()}
            </Typography>
            <Stack direction="row" mb={1} spacing={1}>
                <CustomChip label="Fiction" />
                <CustomChip label="BIOGRAPHY" />
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
            <Typography gutterBottom variant="h6" mb={1} component="div">
                {faker.name.findName()}
            </Typography>
            <Stack direction="row" flexWrap="wrap" alignItems="center" justifyContent="space-between" spacing={1}>
                <Button variant="contained" sx={{ marginBottom: 1 }} color="warning" startIcon={<AddShoppingCartIcon />}>
                    Add to Cart
                </Button>
                <Stack direction="row" alignItems="baseline" spacing={1}>
                    <Typography gutterBottom variant="h4" component="div">
                        $499
                    </Typography>
                    <Typography gutterBottom variant="offerPrice" component="div">
                        $649
                    </Typography>
                </Stack>
            </Stack>
        </CardContent>
    </Card>
);
CardTemplate1.propTypes = {
    boxShadow: PropTypes.bool,
    shadow: PropTypes.bool
};
export default CardTemplate1;
