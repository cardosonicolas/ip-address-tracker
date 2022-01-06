import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const Map = ({ lat, lng }) => {
  return <GoogleMap defaultZoom={10} center={{ lat: lat, lng: lng }} />;
};

export default withScriptjs(withGoogleMap(Map));
