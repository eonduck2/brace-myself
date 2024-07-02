import React from "react";
import StyledHeaderButton from "./HeaderButton.style";
import IHeaderButton from "./HeaderButton.interface";

const HeaderButton: React.FC<IHeaderButton> = () => {
  return (
    <>
      <StyledHeaderButton className="bg-orange-500">테스트</StyledHeaderButton>
    </>
  );
};

export default HeaderButton;
