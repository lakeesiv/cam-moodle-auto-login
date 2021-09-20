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
import { Button, Textarea, useDisclosure, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { Toast } from "../types";
import { sendEncryptedPassword } from "../utils";

const handleSubmit = (password: string, toast: Toast) => {
  if (password) {
    sendEncryptedPassword(password);
    toast({
      title: "Sucess",
      description: "Password has been encrypted and stored in local storage",
      status: "success",
      duration: 3000,
      position: "top-right",
      isClosable: true,
    });
  } else {
    toast({
      title: "Fail",
      description: "Make sure password field is not empty",
      status: "error",
      duration: 3000,
      position: "top-right",
      isClosable: true,
    });
  }
};

const PasswordDrawer: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [password, setPassword] = useState<string>("");
  const toast = useToast();

  return (
    <>
      <Button colorScheme="teal" onClick={onOpen}>
        Updated Password
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Update Password</DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <FormLabel htmlFor="desc">Description</FormLabel>
                <Textarea id="desc" />
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
            <Button mr={3} onClick={() => handleSubmit(password, toast)}>
              Set Password
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default PasswordDrawer;
