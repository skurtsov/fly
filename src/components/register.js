import { useEffect,useState } from 'react';
import { Navigate } from 'react-router-dom';
function SignUp(props) {
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
   
   
  },[result])
  const fetchData = async (username,pass) => {
    try {
      const response = await fetch("http://localhost/test/register.php?username=test&email=test@example.com&first_name=John&last_name=Doe&phone_number=123456789&password=securepassword");
      console.log("http://localhost/test/register.php?username=test&email=test@example.com&first_name=John&last_name=Doe&phone_number=123456789&password=securepassword")
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

export default SignUp;
