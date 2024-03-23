import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import ReservationDetails from "./ReservationDetails"; // Убедитесь, что путь к компоненту верный
import DeleteReservation from "./owner/deletereservation";

let Reservation = (props) => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const [r_token, setR_token] = useState('');
    const [result, setResult] = useState(null); // Будет хранить объект, а не строку
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const nameParam = params.get('tok');
            if (nameParam) {
                setR_token(nameParam);
                setLoading(true);
                try {
                    const response = await fetch(`http://localhost/test/owner/getreservationbytoken.php?tok=${nameParam}`);
                    
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const reservations = await response.json(); // Получаем и сохраняем объект JSON
                    setResult(reservations);
                    setLoading(false);
                } catch (error) {
                    console.error('Error fetching data:', error);
                    setError(error.toString());
                    setLoading(false);
                }
            }
        };
  
        fetchData();
    }, [params]); // Зависимость от params для перезапуска при их изменении

    return <div>
        {r_token && <p>Token: {r_token}</p>}
        {result && <ReservationDetails reservationData={result} />} {/* Передаем объект данных напрямую */}
        <DeleteReservation tok={r_token}/>


    </div>;
}

export default Reservation;
