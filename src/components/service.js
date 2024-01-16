import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";

let Service =(props)=>{
    const [schoold_id,setSchool_id]=useState("0")
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

            <Link className="nextbtn" to="/plane">discovery fly</Link>
            <Link
  className="timebuildingbtn"
  to={{
    pathname: token === 'default' ? '/auth' : '/timebuilding',
    state: { testvalue: "hello" },
  }}
>
  Time Building
</Link>            </div>
         );
}
export default Service;