import axios from "axios";
const URL = "https://api.ipify.org/?format=json";

export function defaultIP() {
  let defaultIP = "";
  axios.get(URL).then(({ data }) => {
    defaultIP = data;
  });

  return defaultIP;
}
