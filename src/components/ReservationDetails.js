import React from "react";
import { Link } from "react-router-dom";

// Assuming `reservationData` is your JSON object with data
const ReservationDetails = ({ reservationData }) => {
  return (
    <div>
      {reservationData.objs.map((reservation, index) => (
        <div key={index} style={{ marginBottom: "20px", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
          <h3>Service: {reservation.service}</h3>
          <p>Reservation ID: {reservation.reservationId}</p>
          <p>Start Time: {reservation.starttime}</p>
          <p>End Time: {reservation.endtime}</p>
          <p>Date: {reservation.flydate}</p>
          <p>Duration: {reservation.duration} minutes</p>
          <p>Plane: {reservation.plain}</p>
          <p>School ID: {reservation.schoolId}</p>
          <p>Client Name: {reservation.clientName}</p>
          <p>Email: {reservation.email}</p>
          <p>Telephone: {reservation.tel}</p>
          <p>User Token: {reservation.user_token || "N/A"}</p>
          <p>Reservation Token: {reservation.reservation_token}</p>
          {/* Move the Link inside the map to access the current reservation's user_token */}
          <Link className="details_button" to={`/userdetails?usertok=${reservation.user_token}`}>User details</Link>
        </div>
      ))}
    </div>
  );
};

export default ReservationDetails;
