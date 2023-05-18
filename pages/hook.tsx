import React from "react";
import { useForm } from "react-hook-form";
import 'tailwindcss/tailwind.css';


export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="pt-5 pl-4 w-80 text-sm font-semibold">
          <label className="text-gray-800">Email</label>
          <input type="email" name="email" {...register("email")}className="bg-white  py-2  px-3  w-full mb-2 mt-2  text-sm border rounded border-gray-200  text-black  " />
        </div>
        <div className="pt-5 pl-4 w-80 text-sm font-semibold">
          <label className="text-gray-800">Password</label>
          <input type="password" name="password" {...register("password")} className= "bg-white  py-2  px-3  w-full mb-2 mt-2  text-sm border rounded border-gray-200  text-black  "/>
        </div>
        <div className="form-control">
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">Login</button>
        </div>
      </form>
    </div>
  );
  

}
