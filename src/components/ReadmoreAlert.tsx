import { Box, Code, Link, Text, Divider } from "@chakra-ui/react";
import React from "react";

const ReadmoreAlert = () => (
  <Box pt="4">
    <Divider py="2"></Divider>
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
  </Box>
);

export default ReadmoreAlert;
