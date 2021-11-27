import styled from "styled-components";

export const Music = () => {
  return (
    <Wrapper>
      <Title>Music</Title>
      <Iframe
        style={{ border: 0, width: "400px", height: "307px" }}
        src="https://bandcamp.com/EmbeddedPlayer/album=991139674/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/"
        seamless
      >
        <a href="https://lenakatrina.bandcamp.com/album/night-sugar-ep">
          night sugar EP by lenakatrina
        </a>
      </Iframe>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 20px 30px;
  text-align: center;
  padding: 20px;
  @media (max-width: 768px) {
    margin: 40px 0px;
    padding: 20px 0;
  }
`;

const Title = styled.h2``;
const Iframe = styled.iframe`
  border: 0;
  width: 400px;
  height: 307px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default Music;
