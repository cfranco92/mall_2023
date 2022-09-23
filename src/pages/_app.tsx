import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "../../styles/globals.css";

import * as React from "react";

import { CacheProvider, EmotionCache } from "@emotion/react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

import type { AppProps } from "next/app";
import createEmotionCache from "../../utils/createEmotionCache";
// ./pages/_app.js
import initAuth from "../../utils/initAuth"; // the module you created above
import lightThemeOptions from "../../styles/theme/lightThemeOptions";

initAuth();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const lightTheme = createTheme(lightThemeOptions);

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
