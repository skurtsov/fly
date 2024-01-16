import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Dashboard(props) {
  const urlSearchString = window.location.search;
  const params = new URLSearchParams(urlSearchString);
  const [uname, setUname] = useState('');
  const token = window.localStorage.getItem('token');
  useEffect(() => {
    const nameParam = params.get('name');
    if (nameParam) {
      setUname(nameParam);
    }
  }, [params]);

  return (
    <div>
    <h1>Welcome, {uname}</h1>
    <h1>Token, {token}</h1>
    <Link className="nextbtn" to="/plane">discovery fly</Link>
    <Link className="timebuildingbtn" to="/auth">Time Building</Link>
    </div>
  );
}

export default Dashboard;
