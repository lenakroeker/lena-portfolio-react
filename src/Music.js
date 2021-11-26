import styled from "styled-components";

export const Music = () => {
  return (
    <Wrapper>
      <Title>Music</Title>
      <iframe
        style={{ border: 0, width: "400px", height: "307px" }}
        src="https://bandcamp.com/EmbeddedPlayer/album=991139674/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/"
        seamless
      >
        <a href="https://lenakatrina.bandcamp.com/album/night-sugar-ep">
          night sugar EP by lenakatrina
        </a>
      </iframe>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 20px 30px;
  text-align: center;
  padding: 20px;
`;

const Title = styled.h2``;

export default Music;
