import React from "react";

interface NotPresentLayoutProps {
  buttonCounter: number;
  setButtonCounter: React.Dispatch<React.SetStateAction<number>>;
}

const NotPresentLayout: React.FC<NotPresentLayoutProps> = ({}) => {
  return <div></div>;
};

export default NotPresentLayout;
