import type { AppProps } from 'next/app';
import React from 'react';
import GlobalStyling from 'shared/styles/globalStyling';
import theme from 'shared/styles/theme';
import { ThemeProvider } from 'styled-components';

const App = ({ Component, pageProps }: AppProps): React.ReactNode => (
  <ThemeProvider theme={theme}>
    <GlobalStyling />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
