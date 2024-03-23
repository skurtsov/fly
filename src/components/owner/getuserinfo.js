import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

let GetUserInfo = (props) => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const [r_token, setR_token] = useState('');
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const tokenParam = params.get('usertok');
            if (tokenParam) {
                setR_token(tokenParam);
                setLoading(true);
                try {
                    const response = await fetch(`http://localhost/test/owner/getuserbytoken.php?usertok=${tokenParam}`);
                    console.log((`http://localhost/test/owner/getuserbytoken.php?usertok=${tokenParam}`))
                    console.log(response)
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const data = await response.json();
                    setResult(data);
                } catch (error) {
                    console.error('Error fetching data:', error);
                    setError(error.toString());
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchData();
    }, []); // Re-run the effect if the query string changes

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {result && result.objs.map((user, index) => (
                <div key={index} style={{ marginBottom: "20px" }}>
                    <p>ID: {user.id}</p>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    <p>First Name: {user.first_name}</p>
                    <p>Last Name: {user.last_name}</p>
                    <p>Phone Number: {user.phone_number}</p>
                    <p>Licence: {user.license_path}</p>
                    <img src={"http://localhost/test/"+user.license_path}/>
                    <p>Medical cert: {user.medical_certificate_path}</p>
                    <img src={"http://localhost/test/"+user.medical_certificate_path}/>


                </div>
            ))}
        </div>
    );
}

export default GetUserInfo;
