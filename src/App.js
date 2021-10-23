import Card from "./components/Card";
import { useGeolocation } from "./hooks";

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
