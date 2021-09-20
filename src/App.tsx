import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import PasswordDrawer from "./components/PasswordDrawer";
import { Get } from "./types";

const App = () => {
  const [loginDetailsPresent, setLoginDetailsPresent] =
    useState<boolean>(false);

  // this state is used to trigger the useEffect below, when login details is set
  const [buttonCounter, setButtonCounter] = useState<number>(0);

  useEffect(() => {
    chrome.runtime.sendMessage(
      { type: "GetLoginDetailsPresent" } as Get,
      (res) => {
        setLoginDetailsPresent(res as boolean);
      }
    );
  }, [buttonCounter]);

  return (
    <div className="App">
      <Box w="xl" h="xl" bgColor="gray.900" p={4}>
        <Flex direction="column" h="full" w="full">
          <PasswordDrawer
            buttonCounter={buttonCounter}
            setButtonCounter={setButtonCounter}
          />
          {loginDetailsPresent ? <p>Meh</p> : <p>Rej</p>}
          <Footer />
        </Flex>
      </Box>
    </div>
  );
};

export default App;
