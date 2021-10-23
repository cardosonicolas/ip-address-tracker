import { useEffect, useState } from "react";
import axios from "axios";

const API = "https://geo.ipify.org/api/v2/";
const KEY = "at_l8Ke8FC408dN1ZMwHf7IfumydFT6E";
const URL = `${API}country,city?apiKey=${KEY}&ipAddress=`;

const useGeolocation = () => {
  let myIP = "";
  axios.get("https://api.ipify.org/?format=json").then(({ data }) => {
    myIP = data;
  });

  const [geolocation, setGeolocation] = useState([]);
  const [query, setQuery] = useState(myIP);

  useEffect(() => {
    axios
      .get(URL + query)
      .then(({ data }) => {
        const location = data;
        setGeolocation(location);
      })
      .catch((error) => {});
  }, [query]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return [geolocation, handleChange];
};

const Card = ({ ip, isp, region, timezone }) => {
  return (
    <div>
      <div>
        <h2>IP ADDRESS</h2>
        <span>{ip}</span>
      </div>
      <div>
        <h2>LOCATION</h2>
        <span>{region}</span>
      </div>
      <div>
        <h2>TIME ZONE</h2>
        <span>{timezone}</span>
      </div>
      <div>
        <h2>ISP</h2>
        <span>{isp}</span>
      </div>
    </div>
  );
};

function App() {
  const [value, handleChange] = useGeolocation();
  const { ip, isp, location } = value;

  return (
    <div>
      <h1>IP address Tracker</h1>
      <input type="text" onChange={handleChange} />
      <Card
        ip={ip}
        isp={isp}
        region={location?.region}
        timezone={location?.timezone}
      />
    </div>
  );
}

export default App;
