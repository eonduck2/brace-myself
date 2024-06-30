import React from "react";
import { Button } from "@nextui-org/react";
import { buttonStyle } from "./HeaderButton.css";

const HeaderButton: React.FC = () => {
  return (
    <Button className={buttonStyle} color="primary">
      테스트
    </Button>
  );
};

export default HeaderButton;
