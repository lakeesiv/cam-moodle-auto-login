import { Divider, Heading, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Get } from "../types";
import SetUsePasswordManager from "./SetUsePasswordManager";
interface Props {
  buttonCounter: number;
  setButtonCounter: React.Dispatch<React.SetStateAction<number>>;
}

const UsePasswordManager: React.FC<Props> = ({
  buttonCounter,
  setButtonCounter,
}) => {
  const [usePwdManager, setUsePwdManager] = useState<boolean>(false);

  useEffect(() => {
    chrome.runtime.sendMessage(
      { type: "GetUsePasswordManagerAutofill" } as Get,
      (res) => {
        setUsePwdManager(res as boolean);
      }
    );
  }, [buttonCounter]);

  return (
    <VStack pt={4} spacing={4} alignItems="flex-start">
      <Divider />
      <Heading fontSize="16">
        Alternatively, use your own Password Manager?
      </Heading>
      <Divider />
      {usePwdManager ? (
        <VStack w="full" spacing="2">
          <Text fontSize={14}>
            Alternatively if you have a password manager that autofills (eg.
            Bitwarden), then you can use that to autofill the login details. And
            we will click the login button for you. If you want to use this
            feature, press the button below.
          </Text>
          <SetUsePasswordManager
            buttonCounter={buttonCounter}
            setButtonCounter={setButtonCounter}
            setToTrue={true}
          />
        </VStack>
      ) : (
        <VStack>
          <Text fontSize={14}>
            Want to turn off using your password manager? Press the button below
          </Text>
          <SetUsePasswordManager
            buttonCounter={buttonCounter}
            setButtonCounter={setButtonCounter}
            setToTrue={false}
          />
        </VStack>
      )}
    </VStack>
  );
};

export default UsePasswordManager;
