import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import LoginDetails from "./components/LoginDetailsDrawer";
import RemoveDataButton from "./components/RemoveDataButton";
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
          <LoginDetails
            UpdateOrSet={loginDetailsPresent ? "Update" : "Set"}
            buttonCounter={buttonCounter}
            setButtonCounter={setButtonCounter}
          />
          {loginDetailsPresent ? (
            <RemoveDataButton
              buttonCounter={buttonCounter}
              setButtonCounter={setButtonCounter}
            />
          ) : (
            <p>meh</p>
          )}

          <Footer />
        </Flex>
      </Box>
    </div>
  );
};

export default App;
