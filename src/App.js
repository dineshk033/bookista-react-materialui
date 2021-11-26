import React from 'react';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Stack, StyledEngineProvider } from '@mui/material';
import themes from 'themes';
// import CardTemplate4 from 'component/card/cardBookListView';
import Catalogue from 'pages/catalogue';
// eslint-disable-next-line import/no-cycle
import NavigationRoutes from 'routes';
import { BrowserRouter } from 'react-router-dom';

const App = () => (
    <StyledEngineProvider injectFirst>
        {/* <div style={{ margin: '2rem', backgroundColor: 'aliceblue', padding: '1rem' }}> */}
        <ThemeProvider theme={themes()}>
            <CssBaseline />
            <BrowserRouter>
                <NavigationRoutes />
            </BrowserRouter>
        </ThemeProvider>
        {/* </div> */}
    </StyledEngineProvider>
);

export default App;
