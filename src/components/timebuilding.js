import { useLocation } from "react-router-dom";

let TimeBuilding = (props) => {
  const location = useLocation();
  const testvalue = location.state?.testvalue || "default";

  return (
    <h1>Timebuilding {testvalue}</h1>
  );
}

export default TimeBuilding;