import { Box, Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { sendEncryptedPassword } from "./utils";

const App = () => {
  const [password, setPassword] = useState<string>("");
  return (
    <div className="App">
      <Box>
        <Input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
        <Button onClick={() => sendEncryptedPassword(password)}></Button>
      </Box>
    </div>
  );
};

export default App;
