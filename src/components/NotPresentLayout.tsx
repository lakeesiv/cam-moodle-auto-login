import { VStack, Text, Code, Box, Link } from "@chakra-ui/react";
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
      <Text fontSize={14}>
        If you want to learn more about how this extension works and how it uses
        your data please have a read of the, {""}
        <Code>README</Code> on Github (
        <a
          href="https://github.com/LakeeSiv/cam-moodle-auto-login#readme"
          target="_blank"
        >
          <Link>link</Link>
        </a>
        ).
      </Text>
    </VStack>
  );
};

export default NotPresentLayout;
