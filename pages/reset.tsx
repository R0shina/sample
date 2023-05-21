/* eslint-disable react-hooks/rules-of-hooks */
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";
import 'tailwindcss/tailwind.css';
import Button from "../components/Button";
import Header from "../components/Header";
import Inputfields from "@/components/Inputfields";
import { formValues } from "./login";



export default function log() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
  
    const handleClick = (event: any) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setPasswordError('Passwords do not match');
            setConfirmPasswordError('Passwords do not match');
        } else {
            // submit form
        }

    };


    const { register, handleSubmit, formState: { errors }, 
    // watch
    } = useForm<formValues>({ mode: 'all' });


    const onSubmit = (data: formValues) => {
        console.log(data);
    };


    return (
        <div className="h-screen" style={{
            backgroundImage: `url("/image 1.png")`
        }}>
            <div className=" pt-10 pr-30 flex justify-center">
                <form  onSubmit={handleSubmit(onSubmit)}  className="pl-5 p w-96 bg-white shadow-md rounded ">

                    <div className="flex justify-center p-10 pr-16 pt-10 pb-4 py-9 ">
                        <Image className="flex-wrap" alt="" style={{ flexDirection: 'column', justifyContent: 'center' }}
                            src="/Logo.jpg"
                            width={150}
                            height={40}
                        // style={{ alignSelf: 'center' }}
                        />

                    </div>

                    
                    <Header headername="Reset Password" />
                    {/* <div className=" font-semibold text-black text-xl text-bold pl-4 pt-5 ">Reset Password </div> */}

                
                    <div onClick={handleClick}>
                        <Inputfields label="Password" type="password" name="password" placeholder="Enter Password"
                            register={register}
                            option={{ required: { value: true, message: "* This field should not be empty" } }}
                            error={errors.password?.message || passwordError }
                            onChange={(event:any) => {
                                setPassword(event.target.value)
                                setPasswordError('');
                            }}
                        />
                    </div>
                

                  
                    <div onClick={handleClick}>

                        <Inputfields label="Re-enter Password" type="password" name="cpassword" placeholder="Enter Password"
                            register={register}
                            option={{ required: { value: true, message: "* Reenter the password" } }}
                            error={errors.cpassword?.message || confirmPasswordError}
                            onChange={(event:any) => {
                                setConfirmPassword(event.target.value)
                                setConfirmPasswordError('');
                            }}
                        />
                    </div>
                    {/* <div onClick={handleClick} className="pt-5 pl-4 w-80 text-sm font-semibold">

                        <label className="text-black  text-sm " id="un">Password
                        </label>
                        <input type={showHide ? "text" : "password"} name="password" className="bg-white text-sm   py-2 px-3  w-full mb-2 mt-2 border rounded border-gray-200  text-black  "
                            onChange={(event) => {
                                setPassword(event.target.value)
                                setPasswordError('');
                            }}
                            placeholder="Enter your new password" required />
                        <p className="cursor-pointer pl-64   " onClick={handleShow}>{!showHide ? "Show" : "hide"}</p>
                        <div className="text-red-600"></div>
                        {password.length > 0 ? "" : <p className="text-red-600 text-xs" >*Password must be greater than 5</p>}

                    </div> */}

                    {/* <div className="pt-5 pl-4 w-80 text-sm font-semibold">
                        <label className="text-black text-sm" id="pwwd">Re-enter Password
                        </label>
                        <input type={!showHide2 ? "password" : "text"} name="password" className="bg-white text-sm pb-2 py-2 px-3   w-full mb-2 mt-2 border rounded border-gray-200  text-black  "
                            onChange={(event) => setConfirmPassword(event.target.value)}
                            placeholder="Re-enter your Password" required />
                        <small className="cursor-pointer" onClick={handleShow2}>{!showHide2 ? "Show" : "hide"}</small>
                    </div> */}
                    {/* {confirmPasswordError && <p className="text-red-600" >{confirmPasswordError}</p>} */}
                    {/* {confirmPassword.length > 0 ? "" : <p className="text-red-600 text-xs font-semibold pl-4 " >*Password must be greater than 5</p>} */}




                    <div >
                        <Button buttonname="Reset Password" />
                    </div>

                    <div className=" pl-1 pt-2   flex pb-24">
                        <div className="text-orangee pl-1" >*</div>
                        <div className=" text-xs text italic text-gray-500 pl-5">
                            Password must contain atleast 8 characters with one small  letter, one capital letter and a symbol.

                        </div>
                    </div>






                </form>
            </div>
        </div>
    );

}

