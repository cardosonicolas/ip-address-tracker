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
  padding: 2em;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const PropertyName = styled.div`
  font-weight: 400;
`;

const Property = styled.span`
  font-weight: 700;
`;

export default Card;
