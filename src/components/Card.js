import styled from "styled-components";

const Card = ({ ip, isp, region, timezone }) => {
  return (
    <Content>
      <div>
        <PropertyName>IP ADDRESS</PropertyName>
        <Property>{ip}</Property>
      </div>
      <div>
        <PropertyName>LOCATION</PropertyName>
        <Property>{region}</Property>
      </div>
      <div>
        <PropertyName>TIME ZONE</PropertyName>
        <Property>{timezone}</Property>
      </div>
      <div>
        <PropertyName>ISP</PropertyName>
        <Property>{isp}</Property>
      </div>
    </Content>
  );
};

const Content = styled.div`
  padding: 1em 3.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 15px;
  background-color: hsl(0, 0%, 100%);

  @media (min-width: 1024px) {
    width: 80%;
    margin-top: 3em;
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

const PropertyName = styled.div`
  color: hsl(0, 0%, 59%);
  font-size: 0.7em;
  font-weight: 400;
  padding: 1em;
`;

const Property = styled.span`
  color: hsl(0, 0%, 17%);
  font-weight: 700;
`;

export default Card;
