import { useEffect,useState } from 'react';
import { Navigate } from 'react-router-dom';
function Auth(props) {
  const [result,setResult]=useState('default')
  const [username,setUsername]=useState('')
  const [pass,setPass]=useState('')
  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };
  const handleInputChangePass = (event) => {
    setPass(event.target.value);
  };

    useEffect(()=>{
    if(result!="default" && result!="0 results" || window.localStorage.getItem('token')!="default"){
      window.localStorage.setItem('token', result)
      window.location.href = "/dashboard?name="+username;
    }
   
  },[result])
  const fetchData = async (username,pass) => {
    try {
      const response = await fetch("http://localhost/test/?user="+username+"&pass="+pass);
      console.log("http://localhost/test/?user="+username+"&pass="+pass)
      const users = await response.text();
      console.log(users);
      setResult(users)
      
 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return(
    <div class="loginform">
      <input type='text' value={username} onChange={handleInputChange} />
      <input type='text' value={pass} onChange={handleInputChangePass} />
    <div onClick={()=>fetchData(username,pass)}>LOGIN</div>
      {username}
      {pass}
    {result}
    </div>
  );
}

export default Auth;
