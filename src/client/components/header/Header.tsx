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
    <StyledHeader className="bg-slate-600 justify-center items-center">
      <FlexContainer className="w-80">
        <HeaderButton />
      </FlexContainer>
    </StyledHeader>
  );
};

export default Header;
