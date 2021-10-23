import { useEffect, useState } from "react";
import axios from "axios";

const API = "https://geo.ipify.org/api/v2/";
const KEY = "at_l8Ke8FC408dN1ZMwHf7IfumydFT6E";
const URL = `${API}country,city?apiKey=${KEY}&ipAddress=`;

export function useGeolocation() {
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
}
