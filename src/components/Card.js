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

export default Card;
