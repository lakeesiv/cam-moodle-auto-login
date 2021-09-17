import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";

import App from "./App";

var mountNode = document.getElementById("popup");
ReactDOM.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  mountNode
);
