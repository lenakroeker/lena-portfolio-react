import styled, { keyframes } from "styled-components";
import MeLil from "./assets/about/melil.jpg";
import MeBig from "./assets/about/mebig.jpg";

export const Home = () => {
  return (
    <Wrapper>
      <Title>About</Title>
      <InfoArea>
        <Img src={MeLil} />
        <Info>
          Lena Kroeker is an artist from Nova Scotia Currently living in Mile
          End, Montreal.
          <br /> Right now she is hard at work coding her portfolio site.
        </Info>
        <Img src={MeBig} />
      </InfoArea>
    </Wrapper>
  );
};

const fadeIn = keyframes`
  0% {
  margin: 30px 30px;
  }
  100% {
   margin: 20px 30px;
  }
`;

const Wrapper = styled.div`
  margin: 20px 30px;
  padding: 20px;
  @media (max-width: 768px) {
    margin: 10px 10px;
    padding: 10px;
  }
`;
const Title = styled.h2``;
const InfoArea = styled.div`
  display: flex;
  justify-content: center;
`;

const Img = styled.img`
  width: 200px;
  margin: 0 30px;
  @media (max-width: 768px) {
    width: 40%;
    display: inline;
    margin: 0px 10px;
  }
`;
const Info = styled.div`
  width: 200px;
`;

export default Home;
