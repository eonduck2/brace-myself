import React from "react";
import HeaderButton from "./headerButton/HeaderButton";
import StyledHeader from "./Header.style";
import IHeader from "./Header.interface";

const Header: React.FC<IHeader> = () => {
  return (
    <StyledHeader className="bg-black">
      <HeaderButton />
    </StyledHeader>
  );
};

export default Header;
