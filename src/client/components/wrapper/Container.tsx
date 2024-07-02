import IContainer from "./Container.interface";
import React from "react";
import { StyledFlex, StyledGrid } from "./Container.style";

const FlexContainer: React.FC<IContainer> = () => {
  return <StyledFlex />;
};

const GridContainer: React.FC<IContainer> = () => {
  return <StyledGrid />;
};

export { FlexContainer, GridContainer };
