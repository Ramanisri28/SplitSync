
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { registerschema } from "../components/FormSchema/registerschema";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
    const{register, handleSubmit, formState:{errors}} = useForm({
        resolver: zodResolver(registerschema)
    })
    function onSubmit(data){
        console.log(data)
        alert("Registration successful")
        navigate("/login")
    }
   
      return (
          <div className="min-h-screen bg-slate-50 flex justify-center items-center p-6">
            
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md" >
            <h1 className="text-3xl font-bold text-indigo-600 text-center mb-6">SplitSync</h1>
            <h2 className="text-2xl font-semibold text-slate-800 text-center mb-2">Create Account</h2>
            <p className="text-slate-500 text-sm text-center mb-8">Start sharing expenses with your friends.</p>
            <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
            <input type="text" placeholder="Enter your name:" {...register("name")}
              className="w-full border border-slate-300 p-3 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"/>
            <p className="text-red-500 text-sm mt-1">{errors.name?.message}</p>
            <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
            <input type="email" placeholder="Enter your email:" {...register("email")}
              className="w-full border border-slate-300 p-3 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"/>
            <p className="text-red-500 text-sm mt-1">{errors.email?.message}</p>
            <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
            <input type="password" placeholder="Enter your password:" {...register("password")}
              className="w-full border border-slate-300 p-3 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"/>
            <p className="text-red-500 text-sm mt-1">{errors.password?.message}</p>
            <button type="submit" className="w-full bg-indigo-600 text-white p-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200">
              Create Account</button>
            <p className="text-sm text-slate-500 text-center mt-6">Already have an account? <Link to="/login" className="text-indigo-600 font-semibold hover:underline">
              Login</Link></p>
            </form>
          </div>
        );
       
}

export default Register
