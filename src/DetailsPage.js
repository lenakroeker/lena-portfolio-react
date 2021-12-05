import styled from "styled-components";
import { useParams, Link } from "react-router-dom";

export const DetailsPage = ({ data }) => {
  const { title } = useParams();
  console.log(title);
  return (
    <Wrapper>
      <Main>
        <Info>
          {data
            .filter((list) => list.title === title)
            .map((list) => (
              <div key={list.id}>
                <Box key={list.name}>
                  <Img
                    src={process.env.PUBLIC_URL + `${list.images[0]}`}
                    height="100%"
                  />
                  <Info>
                    <Title>'{list.title}'</Title>
                    <Date>{list.date}</Date>
                    <Dimens>{list.dimensions}</Dimens>
                    <Materials>{list.materials}</Materials>
                    <About>{list.about}</About>
                  </Info>
                </Box>
              </div>
            ))}
        </Info>
      </Main>
      <Footer></Footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: auto;
  width: 100%;
  padding: 20px 0;
  @media (max-width: 768px) {
    padding: 20px 0;
    margin: 0px;
    width: 90%;
  }
`;

const Main = styled.div`
  padding: 0;
`;

const Box = styled.div`
  width: 100%;
  height: 80vh;
  margin: 0px 50px;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    display: block;
    margin: 0px;
  }
`;

const Img = styled.img`
  width: 80%;
  @media (max-width: 768px) {
    height: auto;
    margin: 0;
  }
`;

const Info = styled.div`
  margin: 0px 0 20px 50px;
  text-align: center;
  line-height: 2em;
  width: 80%;
  @media (max-width: 768px) {
    width: 90%;
    margin: 0;
  }
`;

const Title = styled.h2``;

const Date = styled.div`
  margin-top: -20px;
`;
const Materials = styled.div`
  font-style: italic;
`;
const Dimens = styled.div``;
const About = styled.div`
  line-height: 1.3em;
  margin: 30px 0;
  text-align: left;
`;
const Sold = styled.div``;
const Price = styled.div`
  line-height: 1.5em;
`;
const PriceInfo = styled.div`
  color: grey;
  margin-bottom: 30px;
`;

const Contact = styled(Link)`
  margin: 20px 20px;
  background-color: black;
  color: white;
  padding: 10px 20px;
  border-radius: 20px;
  &:hover {
    background-color: darkgreen;
  }
  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;
const A = styled.a`
  color: blue;
  &:hover {
    background-color: green;
  }
`;

const Footer = styled.div`
  @media (max-width: 768px) {
    height: 90px;
    width: 100%;
  }
`;

export default DetailsPage;
