import React from "react";
import HeaderButton from "./headerButton/HeaderButton";
import StyledHeader from "./Header.style";
import IHeader from "./Header.interface";

const Header: React.FC<IHeader> = () => {
  return (
    <StyledHeader className="bg-slate-600 flex">
      <HeaderButton />
    </StyledHeader>
  );
};

export default Header;
