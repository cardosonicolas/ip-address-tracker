import { useEffect, useState } from "react";
import { defaultIP } from "../api/defaultIP";
import axios from "axios";
const API_URL = "https://geo.ipify.org/api/v2/";
const KEY = `${process.env.REACT_APP_API_KEY_GEOLOCATION}`;
const URL = `${API_URL}country,city?apiKey=${KEY}&ipAddress=`;

export function useGeolocation() {
  const [geolocation, setGeolocation] = useState([]);
  const [query, setQuery] = useState(defaultIP);

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
