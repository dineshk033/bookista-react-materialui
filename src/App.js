import React from 'react';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Stack, StyledEngineProvider } from '@mui/material';
import themes from 'themes';
// import CardTemplate4 from 'component/card/cardBookListView';
import Catalogue from 'pages/catalogue';

const App = () => (
    <StyledEngineProvider injectFirst>
        {/* <div style={{ margin: '2rem', backgroundColor: 'aliceblue', padding: '1rem' }}> */}
        <ThemeProvider theme={themes()}>
            <CssBaseline />
            <Catalogue />
            <Stack direction="column" spacing={2}>
                {/* <CardTemplate1 />
                    <CardTemplate2 /> */}
                {/* <CardTemplate4 /> */}
            </Stack>
        </ThemeProvider>
        {/* </div> */}
    </StyledEngineProvider>
);

export default App;
