import React from "react";
import StyledHeaderButton from "./HeaderButton.style";
import IHeaderButton from "./HeaderButton.interface";
import StyledHeaderButtonContainer from "./HeaderButtonContainer.style";

const HeaderButton: React.FC<IHeaderButton> = () => {
  return (
    <StyledHeaderButtonContainer className="bg-white">
      <StyledHeaderButton>테스트</StyledHeaderButton>
    </StyledHeaderButtonContainer>
  );
};

export default HeaderButton;
