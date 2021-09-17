import { Box, Divider, HStack, Link } from "@chakra-ui/layout";
import React from "react";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <Box mt="auto">
      <Divider py={4} />
      <HStack spacing="auto" pt={4}>
        <Box borderRadius="sm" borderColor="gray.800">
          <img src="icon128.png" alt="king crismon" width={16} height={16} />
        </Box>
        <HStack spacing={1}>
          <AiFillGithub size={15} />
          <a
            href="https://github.com/LakeeSiv/cam-moodle-auto-login"
            target="_blank"
          >
            <Link>LakeeSiv/cam-moodle-auto-login</Link>
          </a>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Footer;
