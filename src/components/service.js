import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";

let Service =(props)=>{
    const [school_id,setSchool_id]=useState("0")
    const [token,setToken]=useState('')
    useEffect(( ) => {

        const urlSearchString = window.location.search;
       
        const params = new URLSearchParams(urlSearchString);
       
        setSchool_id(params.get('id'));

        setToken(window.localStorage.getItem('token'));
        console.log('my token is '+token)

         }, []);

         return(
       <div>  
              <h1>token{token}</h1>
              <div className="BtnContainer">
              <Link className="nextbtn" to={`/plane?id=${school_id}`}>discovery fly</Link>
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

 
<Link className="nextbtn" to="/auth">Sign In</Link>

<Link className="nextbtn" to="/signup">Register</Link>
        </div>
        </div>

         );
}
export default Service;