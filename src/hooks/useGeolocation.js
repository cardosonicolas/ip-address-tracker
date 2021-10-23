import { useEffect, useState } from "react";
import { useDefaultIP } from "./index";
import axios from "axios";

const API_URL = "https://geo.ipify.org/api/v2/";
const KEY = "at_l8Ke8FC408dN1ZMwHf7IfumydFT6E";
const URL = `${API_URL}country,city?apiKey=${KEY}&ipAddress=`;

export function useGeolocation() {
  const [geolocation, setGeolocation] = useState([]);
  const [query, setQuery] = useState(useDefaultIP);

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
