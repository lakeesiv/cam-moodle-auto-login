import { Box, Flex, Link } from "@chakra-ui/react";
import React from "react";
import PasswordDrawer from "./components/PasswordDrawer";

const App = () => {
  return (
    <div className="App">
      <Box w="xl" h="xl" bgColor="gray.900" p={4}>
        <Flex direction="column" h="full" w="full">
          <PasswordDrawer />
          <Box mt="auto">
            <a
              href="https://github.com/LakeeSiv/cam-moodle-auto-login"
              target="_blank"
            >
              <Link>LakeeSiv/cam-moodle-auto-login</Link>
            </a>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default App;
