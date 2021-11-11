import styled from "styled-components";

const Information = ({ ip, isp, region, timezone }) => {
  return (
    <Content>
      <Wrapper>
        <PropertyName>IP ADDRESS</PropertyName>
        <Property>{ip}</Property>
      </Wrapper>
      <VerticalLine size={"50"} width={"1"} />
      <Wrapper>
        <PropertyName>LOCATION</PropertyName>
        <Property>{region}</Property>
      </Wrapper>
      <VerticalLine size={"50"} width={"1"} />
      <Wrapper>
        <PropertyName>TIME ZONE</PropertyName>
        <Property>{timezone}</Property>
      </Wrapper>
      <VerticalLine size={"50"} width={"1"} />
      <Wrapper>
        <PropertyName>ISP</PropertyName>
        <Property>{isp}</Property>
      </Wrapper>
    </Content>
  );
};

const VerticalLine = styled.hr`
  display: none;

  @media (min-width: 1024px) {
    display: inline-block;
  }
`;

const Content = styled.div`
  padding: 0 3.5em 1em 3.5em;
  display: flex;
  position: absolute;
  z-index: 2;
  top: 7em;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 15px;
  background-color: hsl(0, 0%, 100%);

  @media (min-width: 1024px) {
    margin-top: 3em;
    width: 80%;
    padding: 2em;
    flex-direction: row;
    justify-content: space-around;
    box-shadow: 0px 0px 10px 0px rgb(59 59 59 / 50%);
    -webkit-box-shadow: 0px 0px 10px 0px rgb(59 59 59 / 50%);
    -moz-box-shadow: 0px 0px 10px 0px rgb(59 59 59 / 50%);

    & > * {
      margin-top: 0;
    }
  } ;
`;

const Wrapper = styled.div`
  margin-top: 1em;
  @media (min-width: 1024px) {
    margin-top: 0;
  }
`;

const PropertyName = styled.div`
  color: hsl(0, 0%, 59%);
  font-size: 0.6em;
  font-weight: 700;
  padding: 0.5em 1em;
`;

const Property = styled.span`
  color: hsl(0, 0%, 17%);
  font-weight: 700;
`;

export default Information;
