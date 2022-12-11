import { Button, ButtonProps } from "@chakra-ui/button";
import React from "react";
import { SetUsePasswordManagerAutofill, Toast } from "../types";
import { AiOutlineDelete } from "react-icons/ai";
import { useToast } from "@chakra-ui/toast";
import { Tooltip } from "@chakra-ui/react";

const handleClick = (toast: Toast, setToTrue: boolean) => {
  chrome.runtime.sendMessage({
    type: "SetUsePasswordManagerAutofill",
    usePasswordManagerAutofill: setToTrue,
  } as SetUsePasswordManagerAutofill);
  toast({
    title: "Sucess",
    description: setToTrue
      ? "We will now use your password manager to autofill the login details"
      : "We will no longer use your password manager to autofill the login details",
    status: "success",
    duration: 3000,
    position: "top-right",
    isClosable: true,
  });
};

interface RemoveDataButtonDrawerProps extends ButtonProps {
  buttonCounter: number;
  setButtonCounter: React.Dispatch<React.SetStateAction<number>>;
  setToTrue: boolean;
}

const RemoveDataButton: React.FC<RemoveDataButtonDrawerProps> = ({
  buttonCounter,
  setButtonCounter,
  setToTrue,
  ...rest
}) => {
  const toast = useToast();
  return (
    <Tooltip
      label={setToTrue ? "Turn on autoclick" : "Turn off autoclick"}
      hasArrow
    >
      <Button
        {...rest}
        bgColor={setToTrue ? "green.700" : "red.700"}
        py={4}
        my={8}
        onClick={() => {
          handleClick(toast, setToTrue);
          setButtonCounter(buttonCounter + 1);
        }}
      >
        {setToTrue ? "Turn on autoclick" : "Turn off autoclick"}
      </Button>
    </Tooltip>
  );
};

export default RemoveDataButton;
