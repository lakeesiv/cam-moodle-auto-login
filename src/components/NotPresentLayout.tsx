import { VStack, Text, Code, Box } from "@chakra-ui/react";
import React from "react";
import LoginDetailsDrawer from "./LoginDetailsDrawer";

interface NotPresentLayoutProps {
  buttonCounter: number;
  setButtonCounter: React.Dispatch<React.SetStateAction<number>>;
}

const NotPresentLayout: React.FC<NotPresentLayoutProps> = ({
  buttonCounter,
  setButtonCounter,
}) => {
  return (
    <VStack pt={4} spacing={4} alignItems="flex-start">
      <Text fontSize={14}>
        Hi, this is most likely the first time that you are using this
        extension.
      </Text>
      <Text fontSize={14}>
        Currently there are no login details present in localStorage (
        <Code>chrome.storage.local</Code>). Please click the button below, to
        add details.
      </Text>
      <Box alignSelf="center">
        <LoginDetailsDrawer
          UpdateOrSet="Set"
          buttonCounter={buttonCounter}
          setButtonCounter={setButtonCounter}
        />
      </Box>
    </VStack>
  );
};

export default NotPresentLayout;
