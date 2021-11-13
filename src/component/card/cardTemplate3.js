import React from 'react';
import { Card, CardContent, CardMedia, LinearProgress, Rating, Stack, Typography, Box, IconButton } from '@mui/material';
import _lodash from 'lodash';
import { name } from 'faker';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default () => (
    <Card
        sx={{
            display: 'flex',
            ':hover': {
                boxShadow: '0 2px 14px 0 rgb(32 40 45 / 8%)'
            },
            borderRadius: '12px',
            minWidth: 250,
            // maxWidth: 320,
            boxShadow: 'none'
        }}
    >
        <CardMedia
            component="img"
            sx={{ width: 120, height: 150, borderRadius: '4px', objectFit: 'fill', margin: 1 }}
            image="https://1.bp.blogspot.com/-H0VVJFPjuY8/XwsfuKnIzAI/AAAAAAAACcQ/YfWPaY06tas6btdgiQrasQy52VnlEsLIQCLcBGAsYHQ/s499/51pX7aVZILL._SX322_BO1%252C204%252C203%252C200_.jpg"
            alt="Live from space album cover"
        />
        <CardContent sx={{ flex: '1 1 0', padding: '0.7em !important' }}>
            <Stack direction="row" alignItems="center" spacing={1}>
                <Typography component="div" variant="caption">
                    Fiction
                </Typography>
                <Rating name="read-only" value={_lodash.random(1, 5)} readOnly size="small" />
                <Typography variant="caption" component="div">
                    ({_lodash.random(200, 999)})
                </Typography>
            </Stack>
            <Typography my={1} component="div" variant="h5">
                {/* Sapeins: A Brief history of humankind */}
                {name.title()}
            </Typography>
            <Typography gutterBottom variant="subtitle2" component="div">
                {name.findName()}
            </Typography>
            <Stack direction="row" alignItems="baseline" mt={1} spacing={1}>
                <Typography gutterBottom variant="h4" component="div">
                    ${_lodash.random(400, 700)}
                </Typography>
                <Typography gutterBottom variant="offerPrice" component="div">
                    ${_lodash.random(700, 999)}
                </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2}>
                <Box component="div" sx={{ flex: 1 }} mt={1}>
                    <LinearProgress variant="determinate" value={_lodash.random(50, 80)} />
                    <Typography gutterBottom variant="subtitle2" component="div">
                        {_lodash.random(11, 33)} book left
                    </Typography>
                </Box>
                <IconButton
                    sx={{ backgroundColor: '#D9176C', color: '#fafafafa', marginTop: '-12px !important' }}
                    size="medium"
                    aria-label="upload picture"
                >
                    <AddShoppingCartIcon sx={{ width: '0.75em', height: '0.75em' }} />
                </IconButton>
            </Stack>
        </CardContent>
    </Card>
);
