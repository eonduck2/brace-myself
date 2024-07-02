import React from "react";
import StyledHeaderButton from "./HeaderButton.style";

const HeaderButton: React.FC = () => {
  return (
    <header>
      <StyledHeaderButton className="bg-orange-500">테스트</StyledHeaderButton>
    </header>
  );
};

export default HeaderButton;
