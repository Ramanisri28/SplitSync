import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PagePlaceholder from '../components/PagePlaceholder'

function Login() {
  const [formdata, setFormdata] = useState({
    username: " ",
    password: " "
  })
  const navigate = useNavigate();
  function handlechange(e){
    e.preventDefault();
    setFormdata({
      ...formdata,
      [e.target.name]:e.target.value
    })
  }
  const formsubmit = (e) => {
    e.preventDefault();
    alert("Login succesful");
    navigate("/dashboard",{
      state:formdata 
    })
    console.log(formdata);
  }
  return ( 
    <>
    <PagePlaceholder title="Login" />
    <form onSubmit={formsubmit}>
      <input type="text" placeholder="Enter your username" required name="username" onChange={handlechange}/>
      <input type="email" placeholder="Enter your email" required name="email" onChange={handlechange}/>
      <input type="password" placeholder="Enter your password" required name="password" onChange={handlechange}/>
      <button type="submit">Submit</button> 
    </form>
    </>
   );
}

export default Login
