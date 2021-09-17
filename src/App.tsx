import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Footer from "./components/Footer";
import PasswordDrawer from "./components/PasswordDrawer";

const App = () => {
  return (
    <div className="App">
      <Box w="xl" h="xl" bgColor="gray.900" p={4}>
        <Flex direction="column" h="full" w="full">
          <PasswordDrawer />
          <Footer />
        </Flex>
      </Box>
    </div>
  );
};

export default App;
