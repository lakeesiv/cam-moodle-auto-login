import { Button, ButtonProps } from "@chakra-ui/button";
import React from "react";
import { RemoveData } from "../types";
import { AiOutlineDelete } from "react-icons/ai";

const RemoveDataButton: React.FC<ButtonProps> = ({ ...rest }) => {
  const handleClick = () => {
    chrome.runtime.sendMessage({ type: "RemoveData" } as RemoveData);
  };
  return (
    <Button
      {...rest}
      bgColor="red.700"
      leftIcon={<AiOutlineDelete />}
      onClick={() => handleClick()}
    >
      Remove Stored Data
    </Button>
  );
};

export default RemoveDataButton;
