import React from 'react';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Stack, StyledEngineProvider } from '@mui/material';
import themes from 'themes';
// import CardTemplate4 from 'component/card/cardBookListView';
import Catalogue from 'pages/catalogue';
// eslint-disable-next-line import/no-cycle
import NavigationRoutes from 'routes';
import Footer from './component/Footer';
import { BrowserRouter } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => (
    <StyledEngineProvider injectFirst>
        {/* <div style={{ margin: '2rem', backgroundColor: 'aliceblue', padding: '1rem' }}> */}
        <ThemeProvider theme={themes()}>
            <CssBaseline />
            <BrowserRouter>
                <NavigationRoutes />
            </BrowserRouter>
            <Footer />
        </ThemeProvider>
        {/* </div> */}
    </StyledEngineProvider>
);

export default App;
