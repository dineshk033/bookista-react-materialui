import React from 'react';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Stack, StyledEngineProvider } from '@mui/material';
import themes from 'themes';
import CardTemplate1 from 'component/card/cardTemplate1';

const App = () => (
    <StyledEngineProvider injectFirst>
        <div style={{ margin: '2rem', backgroundColor: 'aliceblue', padding: '1rem' }}>
            <ThemeProvider theme={themes()}>
                <CssBaseline />
                <Stack direction="row" spacing={2}>
                    <CardTemplate1 />
                    <CardTemplate1 />
                    <CardTemplate1 />
                    <CardTemplate1 />
                </Stack>
            </ThemeProvider>
        </div>
    </StyledEngineProvider>
);

export default App;
