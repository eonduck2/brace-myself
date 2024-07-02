import styled from "styled-components";
import { StyledGrid } from "../container/Container.style";

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  place-items: center;
  width: 100%;
  height: 10%;
`;

export default StyledHeader;
