import React from "react"
import { Link } from "react-router-dom";
const BuildingStart = (props) => {
    const urlSearchString = window.location.search;    
    const params = new URLSearchParams(urlSearchString);
    const token = params.get('token').slice(0,params.get('token').length-2)
    const schoolid = 1
    return(
        <div className="timebuid_container">
        <h1> {token}</h1>
        <Link to={`/buildingplanechoose?id=1&token=${token}&plan1`}>
        <div className="card">
            <h1>Plan 1</h1>
            <ul>
                <li>5 hours</li>
                <li>1000 insurance</li>
                <li>tax included</li>
            </ul>
        <h2>Price:500$</h2>
       
        </div>
        </Link>
        <Link to={`/buildingplanechoose?id=1&token=${token}&plan1`}>
        <div className="card">
            <h1>Plan 1</h1>
            <ul>
                <li>5 hours</li>
                <li>1000 insurance</li>
                <li>tax included</li>
            </ul>
        <h2>Price:500$</h2>
       
        </div>
        </Link>
        <Link to={`/buildingplanechoose?id=1&token=${token}&plan1`}>
        <div className="card">
            <h1>Plan 1</h1>
            <ul>
                <li>5 hours</li>
                <li>1000 insurance</li>
                <li>tax included</li>
            </ul>
        <h2>Price:500$</h2>
       
        </div>
        </Link>
        </div>
    );
}
export default BuildingStart