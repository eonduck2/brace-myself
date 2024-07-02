import styled from "styled-components";
import { StyledFlex, StyledGrid } from "../../container/Container.style";

const StyledHeaderButtonContainer = styled(StyledGrid)`
  width: 100%;
  height: 10%;
  grid-template-columns: repeat(5, 1fr);
`;

export default StyledHeaderButtonContainer;
