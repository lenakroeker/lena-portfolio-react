import styled, { keyframes } from "styled-components";
import ListComponent from "./ListComponent";

import Data from "./data/paintingsData";

export const EarlyWork = () => {
  return (
    <Wrapper>
      <Title>Under Construction</Title>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 20px 30px;
  text-align: center;
  padding: 20px;
`;

const Title = styled.h2``;

const Gallery = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default EarlyWork;
