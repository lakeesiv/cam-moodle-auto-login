import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import NotPresentLayout from "./components/NotPresentLayout";
import PresentLayout from "./components/PresentLayout";
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
      <Box w="xl" h="lg" bgColor="gray.900" p={4}>
        <Flex direction="column" h="full" w="full">
          {loginDetailsPresent ? (
            <PresentLayout
              buttonCounter={buttonCounter}
              setButtonCounter={setButtonCounter}
            />
          ) : (
            <NotPresentLayout
              buttonCounter={buttonCounter}
              setButtonCounter={setButtonCounter}
            />
          )}

          <Footer />
        </Flex>
      </Box>
    </div>
  );
};

export default App;
