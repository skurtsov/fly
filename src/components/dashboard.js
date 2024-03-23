import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Dashboard() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const [uname, setUname] = useState('');
  const [reservations, setReservations] = useState('');
  const token = window.localStorage.getItem('token');

  useEffect(() => {
    const fetchData = async () => {
      const nameParam = params.get('name');
      if (nameParam) {
        setUname(nameParam);
      }
      try {
        const response = await fetch("http://localhost/test/owner/index.php");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const reservations = await response.text();
        const jsonObj = JSON.parse(reservations);

// Convert the array of objects into an array of arrays
const arrayOfArrays = jsonObj.objs.map(obj => Object.values(obj));
const names = arrayOfArrays.map((obj, index) => (
<Link key={index} to={`/reservation?tok=${obj[1]}`}>
  {obj[0]}
</Link>
));
        setReservations(names);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [params]);

  return (
    <div>
      
      <h1>Welcome, {uname}</h1>
      <h1>Token, {token.split(',')[0]}</h1>
      <h1>school, {token.split(',')[1]}</h1>
      <h1>reservations:{reservations}</h1>
      <Link className="nextbtn" to={`/planeowner?id=1`}>Planes manager</Link>
      <Link className="nextbtn" to={`/plane?token=${token.split(',')[0]}`}>discovery fly</Link>
      <Link
  className="timebuildingbtn"
  to={{
    pathname: token === 'default' || token === null ? '/auth' : '/buildingstart',
    search: token && token !== 'default' ? `?token=${encodeURIComponent(token)}` : '',
    state: { testvalue: "hello" },
  }}
>
  Time Building
</Link>

    </div>
  );
}

export default Dashboard;
