import styled from "styled-components";
import ListComponent from "../ListComponent";

export const Peacefulness = ({ data }) => {
  console.log(data);
  return (
    <Wrapper>
      <Title>Instances Of Peacefulness</Title>
      <Gallery>
        {data && data.length > 0 ? (
          <>
            {data.map((item) => {
              return (
                <ListComponent
                  postId={item.id}
                  title={item.title}
                  dimensions={item.dimensions}
                  date={item.date}
                  materials={item.materials}
                  about={item.about}
                  images={item.images}
                  isForSale={item.isForSale}
                  sold={item.sold}
                />
              );
            })}
          </>
        ) : (
          <div>Failed to Load</div>
        )}
      </Gallery>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 20px 30px;
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

export default Peacefulness;
