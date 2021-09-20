import React from "react";
import LoginDetailsDrawer from "./LoginDetailsDrawer";

interface NotPresentLayoutProps {
  buttonCounter: number;
  setButtonCounter: React.Dispatch<React.SetStateAction<number>>;
}

const NotPresentLayout: React.FC<NotPresentLayoutProps> = ({
  buttonCounter,
  setButtonCounter,
}) => {
  return (
    <div>
      <LoginDetailsDrawer
        UpdateOrSet="Set"
        buttonCounter={buttonCounter}
        setButtonCounter={setButtonCounter}
      />
    </div>
  );
};

export default NotPresentLayout;
