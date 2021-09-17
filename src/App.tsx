import { Box, Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { sendEncryptedPassword } from "./utils";

const App = () => {
  const [password, setPassword] = useState<string>("");
  return (
    <div className="App">
      <Box w="xl" h="xl" bgColor="gray.900" p={4}>
        <Input
          p={2}
          bgColor="gray.800"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
        <Button onClick={() => sendEncryptedPassword(password)}>
          Set Password
        </Button>
      </Box>
    </div>
  );
};

export default App;
