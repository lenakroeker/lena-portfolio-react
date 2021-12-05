import styled, { keyframes } from "styled-components";
import ListComponent from "../ListComponent";

export const Vips = () => {
  return (
    <Wrapper>
      <Title>Under Construction</Title>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 20px 20px;
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

export default Vips;
