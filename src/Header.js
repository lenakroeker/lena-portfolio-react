import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";
import style from "./styleConstants.js";
import Sig from "./assets/header/sig.png";
import Insta from "./assets/header/insta.png";
import Linkedin from "./assets/header/linkedin.png";
import Codepen from "./assets/header/codepen.png";
import GitHub from "./assets/header/github.png";

export const Header = () => {
  //dropdown for mobile
  const [dropOpen, setDropOpen] = useState(false);

  const dropHandle = () => {
    setDropOpen(!dropOpen);
  };

  return (
    <Wrapper>
      <Menu>
        <ImgLink exact to="/">
          <Img src={Sig} />
        </ImgLink>
        <Social>
          <a href="https://www.instagram.com/lenakatrinak/" target="_blank">
            <SocialImg src={Insta} />
          </a>
          <a href="https://codepen.io/LenaKK" target="_blank">
            <SocialImg src={Codepen} />
          </a>
          <a href="https://www.linkedin.com/in/lena-kroeker/" target="_blank">
            <SocialImg src={Linkedin} />
          </a>
          <a href="https://github.com/lenakroeker" target="_blank">
            <SocialImg src={GitHub} />
          </a>
        </Social>
        <MenuList>
          <MenuItemB exact to="/shop">
            Shop
          </MenuItemB>
          <MenuItem exact to="/paint">
            Paint
          </MenuItem>
          <MenuItem exact to="/textile">
            Textile
          </MenuItem>
          <MenuItem exact to="/music">
            Music
          </MenuItem>
          <MenuItem exact to="/garment">
            Garment
          </MenuItem>
          <MenuItem exact to="/misc">
            Misc
          </MenuItem>
          <MenuItem exact to="/earlywork">
            Early Work
          </MenuItem>
          <MenuItem exact to="/about">
            About
          </MenuItem>
          <MenuItem exact to="/contact">
            Contact
          </MenuItem>
        </MenuList>
      </Menu>
      <MenuDrop>
        <ImgLink exact to="/">
          <Img src={Sig} />
        </ImgLink>
        <DropBtn onClick={() => dropHandle()}>Menu</DropBtn>
        {dropOpen && (
          <DropdownContent onClick={() => dropHandle()}>
            <DropItem exact to="/">
              Home
            </DropItem>
            <DropItemB exact to="/shop">
              Shop
            </DropItemB>
            <DropItem exact to="/paint">
              Paint
            </DropItem>
            <DropItem exact to="/textile">
              Textile
            </DropItem>
            <DropItem exact to="/garment">
              Garment
            </DropItem>
            <DropItem exact to="/music">
              Music
            </DropItem>
            <DropItem exact to="/misc">
              Misc
            </DropItem>
            <DropItem exact to="/earlywork">
              Early Work
            </DropItem>
            <DropItem exact to="/about">
              About
            </DropItem>
            <DropItem exact to="/contact">
              Contact
            </DropItem>
          </DropdownContent>
        )}
      </MenuDrop>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 10px;
  background-color: transparent;
  color: ${style.black};
  width: 100vw;
  height: 150px;
  text-align: center;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    height: 80px;
  }
`;

const Img = styled.img`
  width: 100%;
  margin-left: 20px;
  grid-area: sig;
  @media (max-width: 768px) {
    width: 90px;
    margin-left: 0px;
  }
`;

const ImgLink = styled(NavLink)`
  display: block;
`;
const MenuItem = styled(NavLink)`
  color: ${style.black};
  padding: 10px 10px;
  min-width: 80px;
  border-radius: 20px;

  &:hover {
    background-color: ${style.black};
    color: ${style.white};
  }
`;

const MenuItemB = styled(NavLink)`
  background-color: ${style.black};
  color: white;
  border-radius: 20px;
  padding: 10px 0;
  min-width: 80px;
  &:hover {
    background-color: darkgreen;
    color: ${style.white};
  }
`;

const Menu = styled.div`
  display: grid;
  height: 200px;

  grid-template-columns: 20% 80%;
  grid-template-rows: 65px 95px;
  grid-template-areas:
    "sig social"
    "menu menu";
  @media (max-width: 768px) {
    display: none;
  }
`;

const Social = styled.div`
  grid-area: social;
  text-align: right;
  margin: 10px 20px 10px 0px;
`;

const SocialImg = styled.img`
  width: 25px;
  margin: 12px 12px;
`;

const MenuList = styled.div`
  margin: 20px 20px 50px 23%;
  display: flex;
  font-size: 14px;
  flex-wrap: wrap;
  grid-area: menu;
`;

const MenuDrop = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

const DropBtn = styled.button`
  border: 6px solid ${style.black};
  background: ${style.black};
  color: ${style.white};
  border-radius: 16px;
  cursor: pointer;
  margin: 10px auto;
  font-size: 18px;
  padding: 5px 8px;
  width: 50vw;
  &:hover {
    background-color: ${style.white};
    color: ${style.black};
    font-weight: bold;
  }
`;

const DropdownContent = styled.ul`
  margin-top: -5px;
  position: absolute;
  box-sizing: border-box;
  text-align: center;
  left: 0;
  opacity: 0.9;
  background: transparent;
  width: 100vw;
  padding: 0 10vw;
  z-index: 5;
`;

const drop = keyframes`
  0% {
    margin: -1px 0;
  }
  100% {
    margin: 0.5px 0;
  }
`;

const DropItem = styled(NavLink)`
  display: inline-block;
  box-sizing: border-box;
  text-align: center;
  width: 53vw;
  background: ${style.black};
  border: 6px solid ${style.white};
  border-radius: 20px;
  color: white;
  padding: 10px 10px;
  margin: 0.5px 0;
  animation: 0.5s ${drop} ease-in-out;
  &:hover {
    background: ${style.black};
  }
`;
const DropItemB = styled(NavLink)`
  display: inline-block;
  box-sizing: border-box;
  text-align: center;
  width: 53vw;
  background: ${style.white};
  border: 6px solid ${style.black};
  border-radius: 20px;
  color: black;
  font-weight: bold;
  padding: 10px 10px;
  margin: 0.5px 0;
  animation: 0.5s ${drop} ease-in-out;
  &:hover {
    background: darkgreen;
  }
`;

export default Header;
