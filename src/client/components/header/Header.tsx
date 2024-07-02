import React from "react";
import HeaderButton from "./headerButton/HeaderButton";
import StyledHeader from "./Header.style";
import IHeader from "./Header.interface";

const Header: React.FC<IHeader> = () => {
  const buttonArray = [1, 2, 3, 4, 5];
  return (
    <StyledHeader className="bg-black">
      {buttonArray.map((index) => (
        <HeaderButton key={index} />
      ))}
    </StyledHeader>
  );
};

export default Header;
