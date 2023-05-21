/* eslint-disable react-hooks/rules-of-hooks */
import Image from "next/image";
import Link from "next/link";
// import { useState } from "react";
import { useForm } from "react-hook-form";
import 'tailwindcss/tailwind.css';
import Inputfields from "@/components/Inputfields";
import Button from "../components/Button";
import Header from "../components/Header";
import { formValues } from "./login";


export default function log() {
    
     const { register, handleSubmit, formState: { errors }, 
    // watch
    } = useForm<formValues>({ mode: 'all' });


    const onSubmit = (data: formValues) => {
        console.log(data);
    };


    return (
        <div className="h-screen w-screen" style={{
            backgroundImage: `url("/image 1.png")`
        }}>
            <div className=" pt-10 pr-30 flex justify-center">
                <form onSubmit={handleSubmit(onSubmit)}className=" bg-white pl-5  w-96 shadow-md  rounded ">

                    <div className="flex justify-center p-10 pr-16 pt-10 pb-4 py-9 ">
                        <Image alt="" className="flex-wrap" style={{ flexDirection: 'column', justifyContent: 'center' }}
                            src="/Logo.jpg"
                            width={150}
                            height={40}
                        // style={{ alignSelf: 'center' }}
                        />

                    </div>


                    <Header headername="Create New Account" />

                    <div >

                        <Inputfields label="Username" type="text" name={"username"} placeholder="Enter Username"
                            register={register}
                            option={{ required: { value: true, message: "* This field should not be empty" } }}
                            error={errors.username?.message}
                        />
                    </div>

                    <div>
                    <Inputfields label="Email" type="email" name={"email"} placeholder="Enter Email"
                            register={register}
                            option={{ pattern: {value:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,   message: "* This field should not be empty"  }}}
                            error={errors.email?.message}
                        />
                    </div>

                   
                    <div >
                        <Inputfields label="Password" type="password" name="password" placeholder="Enter Password"
                            register={register}
                            option={{ required: { value: true, message: "* This field should not be empty" } }}
                            error={errors.password?.message}
                        />
                    </div>


                    <div className=" pl-0 pr-4  pb-2 flex pt-3">
                        <div className="text-orangee pl-2" >*</div>
                        <div className="pl-4 text-xs text italic text-gray-500 ">
                            Password must contain atleast 8 characters with one small  letter, one capital letter and a symbol.

                        </div>
                    </div>

                    <div >
                        <Button buttonname="Create New Account" />
                    </div>


                    <div className="pt-3 pb-3 pl-20">
                        <label className="text-gray-500 font-semibold text-sm " id="dh">Have an account?</label>
                        <label className="text-orangee text-sm underline pl-1 font-semibold" id="dh"><Link href="/login/">Sign In</Link></label>
                    </div>


                    {/* 

          <div>
            <label>Continue with</label>
          </div> */}




                </form>
            </div>
        </div>
    );

}




