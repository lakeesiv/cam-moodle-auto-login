import { FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Stack } from "@chakra-ui/layout";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/modal";
import { Button, useDisclosure, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { Toast } from "../types";
import { sendEncryptedLoginDetails } from "../utils";

const handleSubmit = (username: string, password: string, toast: Toast) => {
  if (password && username) {
    sendEncryptedLoginDetails({ username, password });
    toast({
      title: "Sucess",
      description:
        "Login details have been encrypted and stored in local storage",
      status: "success",
      duration: 3000,
      position: "top-right",
      isClosable: true,
    });
  } else {
    toast({
      title: "Fail",
      description: "Make sure fields are not empty",
      status: "error",
      duration: 3000,
      position: "top-right",
      isClosable: true,
    });
  }
};

interface LoginDetailsDrawerProps {
  buttonCounter: number;
  setButtonCounter: React.Dispatch<React.SetStateAction<number>>;
  UpdateOrSet: "Update" | "Set";
}

const LoginDetailsDrawer: React.FC<LoginDetailsDrawerProps> = ({
  buttonCounter,
  setButtonCounter,
  UpdateOrSet = "Set",
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const toast = useToast();

  return (
    <>
      <Button colorScheme="teal" onClick={onOpen}>
        {UpdateOrSet} Login Details
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            {UpdateOrSet} Login Details
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <FormLabel htmlFor="password">CRSid</FormLabel>
                <Input
                  p={2}
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
                ></Input>
              </Box>
              <Box>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  p={2}
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                ></Input>
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button
              mr={3}
              onClick={() => {
                handleSubmit(username, password, toast);
                setButtonCounter(buttonCounter + 1);
              }}
            >
              {UpdateOrSet} Login Details
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default LoginDetailsDrawer;
