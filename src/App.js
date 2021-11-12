import React from 'react';

import { ThemeProvider } from '@mui/material/styles';
import { Button, CssBaseline, StyledEngineProvider } from '@mui/material';
import themes from 'themes';

const App = () => (
    <StyledEngineProvider injectFirst>
        <ThemeProvider theme={themes()}>
            <CssBaseline />
            <div>Theme Provider</div>
            <Button variant="contained">Outlined</Button>
        </ThemeProvider>
    </StyledEngineProvider>
);

export default App;
