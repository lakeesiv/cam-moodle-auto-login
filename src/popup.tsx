import React from "react";
import ReactDOM from "react-dom";
import {
  ChakraProvider,
  extendTheme,
  ThemeConfig,
  ColorModeScript,
} from "@chakra-ui/react";

import App from "./App";
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};
const theme = extendTheme({ config });

var mountNode = document.getElementById("popup");
ReactDOM.render(
  <ChakraProvider>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </ChakraProvider>,
  mountNode
);
