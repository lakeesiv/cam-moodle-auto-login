import React from "react";
import RemoveDataButton from "./RemoveDataButton";
import LoginDetailsDrawer from "./LoginDetailsDrawer";
import { Code, Flex, Link, VStack, Text, Box } from "@chakra-ui/react";

interface PresentLayoutProps {
  buttonCounter: number;
  setButtonCounter: React.Dispatch<React.SetStateAction<number>>;
}

const PresentLayout: React.FC<PresentLayoutProps> = ({
  buttonCounter,
  setButtonCounter,
}) => {
  return (
    <VStack spacing={8} pt={20} w="full" h="full">
      <Flex w="full" h="full" direction="row" justifyContent="space-evenly">
        <LoginDetailsDrawer
          UpdateOrSet="Update"
          buttonCounter={buttonCounter}
          setButtonCounter={setButtonCounter}
        />
        <RemoveDataButton
          buttonCounter={buttonCounter}
          setButtonCounter={setButtonCounter}
        />
      </Flex>
    </VStack>
  );
};

export default PresentLayout;
