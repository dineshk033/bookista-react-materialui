import React from 'react'
import {
    Grid ,
    Stack,
    Typography
} from '@mui/material';

const ShoppingSummary = () => (
    <Grid container m={4} mt={6} sx={{backgroundColor: '#3b2f4a' , color : 'white'}}>
        <Grid item xs={6}>
        <Stack direction="column" spacing={4} p={4}>
                        <Typography gutterBottom variant="h5" component="h5">
                            Shopping Summary
                        </Typography>
                        <Typography gutterBottom variant="body2" component="p">
                        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h5">
                            Have a coupon code?
                        </Typography>
                        
                        </Stack>
        </Grid>
        <Grid item xs={6}>
          right
        </Grid>
    </Grid>
  )


export default ShoppingSummary