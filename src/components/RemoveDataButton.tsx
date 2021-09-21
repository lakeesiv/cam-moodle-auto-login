import { Button, ButtonProps } from "@chakra-ui/button";
import React from "react";
import { RemoveData, Toast } from "../types";
import { AiOutlineDelete } from "react-icons/ai";
import { useToast } from "@chakra-ui/toast";
import { Tooltip } from "@chakra-ui/react";

const handleClick = (toast: Toast) => {
  chrome.runtime.sendMessage({ type: "RemoveData" } as RemoveData);
  toast({
    title: "Sucess",
    description: "All stored details have been deleted",
    status: "success",
    duration: 3000,
    position: "top-right",
    isClosable: true,
  });
};

interface RemoveDataButtonDrawerProps extends ButtonProps {
  buttonCounter: number;
  setButtonCounter: React.Dispatch<React.SetStateAction<number>>;
}

const RemoveDataButton: React.FC<RemoveDataButtonDrawerProps> = ({
  buttonCounter,
  setButtonCounter,
  ...rest
}) => {
  const toast = useToast();
  return (
    <Tooltip label="Removes all chrome.storage.local data" hasArrow>
      <Button
        {...rest}
        bgColor="red.700"
        leftIcon={<AiOutlineDelete />}
        onClick={() => {
          handleClick(toast);
          setButtonCounter(buttonCounter + 1);
        }}
      >
        Remove Stored Data
      </Button>
    </Tooltip>
  );
};

export default RemoveDataButton;
