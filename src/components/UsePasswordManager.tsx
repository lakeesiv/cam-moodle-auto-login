import {
  VStack,
  Text,
  Code,
  Box,
  Link,
  Divider,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import SetUsePasswordManager from "./SetUsePasswordManager";
interface Props {
  buttonCounter: number;
  setButtonCounter: React.Dispatch<React.SetStateAction<number>>;
}

const UsePasswordManager: React.FC<Props> = ({
  buttonCounter,
  setButtonCounter,
}) => {
  return (
    <VStack pt={4} spacing={4} alignItems="flex-start">
      <Divider></Divider>
      <Text fontSize={14}>
        Alternatively if you have a password manager that autofills (eg.
        Bitwarden), then you can use that to autofill the login details. And we
        will click the login button for you. If you want to use this feature,
        press the button below.
      </Text>
      <HStack>
        <SetUsePasswordManager
          buttonCounter={buttonCounter}
          setButtonCounter={setButtonCounter}
          setToTrue={true}
        />
        <SetUsePasswordManager
          buttonCounter={buttonCounter}
          setButtonCounter={setButtonCounter}
          setToTrue={false}
        />
      </HStack>
    </VStack>
  );
};

export default UsePasswordManager;
