import React from 'react';
import { Avatar, Card, CardContent, CardMedia, Link, Stack, Typography } from '@mui/material';
import { image, lorem, name, random } from 'faker';
import { truncate } from 'lodash';
import { Box } from '@mui/system';

export default () => (
    <Card
        sx={{
            // border: border ? '1px solid' : 'none',
            // borderColor: theme.palette.primary[200] + 75,
            ':hover': {
                boxShadow: '0 2px 14px 0 rgb(32 40 45 / 8%)'
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
            height="150"
            // image={random.image()}
            image="https://1.bp.blogspot.com/-H0VVJFPjuY8/XwsfuKnIzAI/AAAAAAAACcQ/YfWPaY06tas6btdgiQrasQy52VnlEsLIQCLcBGAsYHQ/s499/51pX7aVZILL._SX322_BO1%252C204%252C203%252C200_.jpg"
            alt="green iguana"
        />
        <CardContent sx={{ padding: '16px !important' }}>
            <Typography gutterBottom variant="h5" component="div">
                {name.title()}
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
                {truncate(lorem.sentences(), {
                    length: 90
                })}
                <Link color="#D9176C" href="#" underline="hover">
                    Continue Reading
                </Link>
            </Typography>
            <Stack direction="row" spacing={{ xs: 1, sm: 2 }}>
                <Avatar alt="Cindy Baker" src={image.avatar()} />
                <Box>
                    <Typography variant="h6">{name.findName()}</Typography>
                    <Typography variant="caption">12 May, 2018</Typography>
                </Box>
            </Stack>
        </CardContent>
    </Card>
);
