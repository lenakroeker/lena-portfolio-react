import styled from "styled-components";
import { useParams, Link } from "react-router-dom";

export const DetailsPage = ({ shopdata }) => {
  const { title } = useParams();
  console.log(title);
  return (
    <Wrapper>
      <Main>
        <Info>
          {shopdata
            .filter((list) => list.title === title)
            .map((list) => (
              <div key={list.id}>
                <Box>
                  <img
                    src={process.env.PUBLIC_URL + `${list.images}`}
                    height="100%"
                  />
                  <Info>
                    <Title>'{list.title}'</Title>
                    <Date>{list.date}</Date>
                    <Dimens>{list.dimensions}</Dimens>
                    <Materials>{list.materials}</Materials>
                    <About>
                      {list.about}
                      <br /> 30% of proceeds will be donated to{" "}
                      <A href="https://banquesalimentaires.org/en/">
                        Food Banks of Quebec
                      </A>{" "}
                      <br />
                      Happy Holidays!
                    </About>

                    {list.sold ? (
                      <Sold>Sold</Sold>
                    ) : (
                      <>
                        <Price>${list.price}</Price>
                        <Contact exact to={`/contact/${list.title}`}>
                          Contact to Purchase
                        </Contact>
                      </>
                    )}
                  </Info>
                </Box>
              </div>
            ))}
        </Info>
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: auto;
  width: 80%;
`;

const Main = styled.div``;

const Box = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
`;

const Img = styled.img`
  width: 100%;
  grid-area: Image;
`;

const Info = styled.div`
  grid-area: Info;
  margin: 20px 0 20px 50px;
  text-align: center;
  line-height: 3em; ;
`;

const Title = styled.h2``;

const Date = styled.div``;
const Materials = styled.div``;
const Dimens = styled.div``;
const About = styled.div`
  line-height: 1.3em;
  margin: 30px 0;
  text-align: left;
`;
const Sold = styled.div``;
const Price = styled.div``;
const Contact = styled(Link)`
  background-color: black;
  color: white;
  padding: 10px 20px;
  border-radius: 20px;
  &:hover {
    background-color: darkgreen;
  }
`;
const A = styled.a`
  color: blue;
`;

export default DetailsPage;
