import styled, { keyframes } from "styled-components";
import ListComponent from "./ListComponent";
import Data from "./data/paintingsData";
import { NavLink } from "react-router-dom";

export const Paintings = () => {
  console.log(Data[0]);
  return (
    <Wrapper>
      <Link exact to="/paint/deconfinement">
        Deconfinement (2022)
      </Link>
      <Link exact to="/paint/instances-of-peacefulness">
        Instances of Peacefulness (2021)
      </Link>
      <Link exact to="/paint/vips">
        Vips (2017-2020)
      </Link>
      <Link exact to="/paint/ovenside">
        Ovenside (2012)
      </Link>
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

const Link = styled(NavLink)`
  display: block;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  margin: 20px 30px;
  &:hover {
    color: grey;
  }
`;

export default Paintings;
