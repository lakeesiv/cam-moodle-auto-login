import { FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Stack, Box } from "@chakra-ui/layout";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from "@chakra-ui/modal";
import { Button, Select, Textarea, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import { sendEncryptedPassword } from "../utils";

const PasswordDrawer: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [password, setPassword] = useState<string>("");

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
            <Button mr={3} onClick={() => sendEncryptedPassword(password)}>
              Set Password
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default PasswordDrawer;
