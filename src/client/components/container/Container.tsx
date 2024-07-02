import IContainer from "./Container.interface";
import React from "react";
import { StyledFlex, StyledGrid } from "./Container.style";

const BasicContainer: React.FC<IContainer> = ({ children }) => {
  return <div>{children}</div>;
};

const FlexContainer: React.FC<IContainer> = ({ children }) => {
  return <StyledFlex className="bg-red-700">{children}</StyledFlex>;
};

const GridContainer: React.FC<IContainer> = ({ children }) => {
  return <StyledGrid>{children}</StyledGrid>;
};

export { BasicContainer, FlexContainer, GridContainer };
