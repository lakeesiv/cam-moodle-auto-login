import React from "react";
import RemoveDataButton from "./RemoveDataButton";
import LoginDetailsDrawer from "./LoginDetailsDrawer";

interface PresentLayoutProps {
  buttonCounter: number;
  setButtonCounter: React.Dispatch<React.SetStateAction<number>>;
}

const PresentLayout: React.FC<PresentLayoutProps> = ({
  buttonCounter,
  setButtonCounter,
}) => {
  return (
    <div>
      <LoginDetailsDrawer
        UpdateOrSet="Update"
        buttonCounter={buttonCounter}
        setButtonCounter={setButtonCounter}
      />
      <RemoveDataButton
        buttonCounter={buttonCounter}
        setButtonCounter={setButtonCounter}
      />
    </div>
  );
};

export default PresentLayout;
