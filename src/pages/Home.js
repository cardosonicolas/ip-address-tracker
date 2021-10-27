import Card from "../components/Card";
import { useGeolocation } from "../hooks";
import styled from "styled-components";
import img from "../images/pattern-bg.png";

const Arrow = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
      <path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6" />
    </svg>
  );
};

const Home = () => {
  const [value, handleChange] = useGeolocation();
  const { ip, isp, location } = value;

  return (
    <Container>
      <Title>IP address Tracker</Title>
      <SearchBar>
        <Search
          type="number"
          onChange={handleChange}
          placeholder={"Search for any IP address or domain"}
        />
        <SearchIconWrapper>
          <Arrow />
        </SearchIconWrapper>
      </SearchBar>
      <Card
        ip={ip}
        isp={isp}
        region={location?.region}
        timezone={location?.timezone}
      />
    </Container>
  );
};

const Title = styled.h1`
  font-size: 1.5em;
  color: hsl(0, 0%, 100%);
  margin-bottom: 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${img});
  height: 15em;
  backgound-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 1024px) {
    justify-content: space-between;
  }
`;

const SearchIconWrapper = styled.div`
  position: absolute;
  margin: 0 -1em;
  width: 2em;
  height: 3em;
  border-radius: 0 15px 15px 0;
  background-size: contain;
  background-color: hsl(0, 0%, 0%);
`;

const SearchBar = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: end;

  @media (min-width: 1024px) {
    width: 40%;
    margin-top: 2em;
  }
`;

const Search = styled.input`
  height: 4em;
  width: 100%;
  margin-top: 0;
  margin-right: 1.5em;
  padding: 0 2.5em;
  border: none;
  border-radius: 15px 0 0 15px;
  outline: 0;
`;

export default Home;
