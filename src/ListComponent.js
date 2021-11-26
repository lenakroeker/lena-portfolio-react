import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const ListComponent = (props) => {
  const { title, images } = props;

  return (
    <Wrapper>
      <LinkBox exact to={`details/${title}`}>
        <img src={process.env.PUBLIC_URL + `${images}`} height="250" />
        <Main>
          <div>Details</div>
        </Main>
      </LinkBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 20px 20px;
  text-align: center;
  height: 250px;
  width: 250px;
  position: relative;
`;
const LinkBox = styled(Link)``;

const Main = styled.div`
  opacity: 0;
  position: absolute;
  width: 100px;
  top: 100px;
  background-color: black;
  color: white;
  text-align: center;
  border-radius: 20px;
  padding: 20px;
  left: calc(125px - 50px);
  transition: 1s ease-in-out;
  &:hover {
    opacity: 0.7;
  }
`;

export default ListComponent;
