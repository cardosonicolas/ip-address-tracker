import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const Map = () => {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: -31.73271, lng: -60.52897 }}
    />
  );
};

export default withScriptjs(withGoogleMap(Map));
