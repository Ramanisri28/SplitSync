import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [formdata, setFormdata] = useState({
    email: " ",
    password: " "
  })
  const navigate = useNavigate();
  function handlechange(e){
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
    <div className="min-h-screen bg-slate-50 flex justify-center items-center p-6">
    <form onSubmit={formsubmit} className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
    <h1 className="text-3xl font-bold text-indigo-600 text-center mb-6">SplitSync</h1>
    <h2 className="text-2xl font-semibold text-slate-800 text-center mb-2">Welcome Back!</h2>
    <p className="text-slate-500 text-sm text-center mb-8">Login to manage your shared expenses</p>
    
       <label className="block text-sm font-medium text-slate-700 mb-2">
          Email</label>
       <input type="email" placeholder="Enter your email" required name="email" onChange={handlechange} 
        className="w-full border border-slate-300 p-3 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"/>
       <label className="block text-sm font-medium text-slate-700 mb-2">
          Password</label>
       <input type="password" placeholder="Enter your password" required name="password" onChange={handlechange} 
        className="w-full border border-slate-300 p-3 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"/>
      <button type="submit" className="w-full bg-indigo-600 text-white p-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200">
        Login</button> 
      <p className="text-sm text-slate-500 text-center mt-6">Don't have an account?<Link to="/" className="text-indigo-600 font-semibold hover:underline">
        Register</Link></p>
    </form>
    </div>
   );
}

export default Login
