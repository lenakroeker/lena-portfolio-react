import styled, { keyframes } from "styled-components";
import Vip from "../src/assets/about/vip1.jpg";

export const Home = () => {
  return (
    <Wrapper>
      <Img src={Vip} />
    </Wrapper>
  );
};

const fadeIn = keyframes`
  0% {
    opacity:0;
  }
  100% {
    opacity:1;

  }
`;

const Wrapper = styled.div`
  margin: 20px 30px;
  text-align: center;
  padding: 20px;
`;

const Img = styled.img`
  width: 50%;
  margin: auto;
  animation: 0.5s ${fadeIn} ease-in-out;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;

export default Home;
