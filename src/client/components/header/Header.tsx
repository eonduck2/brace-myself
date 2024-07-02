import React from "react";
import HeaderButton from "./headerButton/HeaderButton";
import StyledHeader from "./Header.style";
import IHeader from "./Header.interface";
import {
  BasicContainer,
  FlexContainer,
  GridContainer,
} from "../container/Container";

const Header: React.FC<IHeader> = () => {
  return (
    <StyledHeader className="bg-black w-full h-1/6">
      <FlexContainer>
        <HeaderButton />
      </FlexContainer>
    </StyledHeader>
  );
};

export default Header;
