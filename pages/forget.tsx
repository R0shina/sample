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

export default function res() {
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
                <form onSubmit={handleSubmit(onSubmit)}  className="p-5 p w-96 bg-white shadow-md rounded ">

                    <div className="flex justify-center p-10 pr-16 pt-10 pb-4 py-9 ">
                        <Image alt="" className="flex-wrap" style={{ flexDirection: 'column', justifyContent: 'center' }}
                            src="/Logo.jpg"
                            width={150}
                            height={40}
                        // style={{ alignSelf: 'center' }}

                        /> <Link href="/login/"></Link>
                    </div>

                    <div className="pt-5 flex flex-row justify-content align-middle">
                        <div className="flex flex-row items-center">
                            <Link href="/login/"><Image alt="" src="/Arrow 2.jpg" width={20} height={20} /></Link>
                            <Header headername="Forget Password" />
                        </div>
                    </div>

                    <div>
                        <Inputfields label="Email" type="email" name={"email"} placeholder="Enter Email"
                            register={register}
                            option={{ pattern: { value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, message: "* Invalid email pattern" } }}
                            error={errors.email?.message}
                        />
                    </div>


                    <div >
                        <Button buttonname="Reset Link" />
                    </div>


                    <div className="pt-3 pb-40 pl-20 ">
                        <label className="text-gray-500 font-semibold  text-sm" id="dh">Remembered it?</label>
                        <label className="text-orangee font-semibold text-sm underline pl-1" id="dh" ><Link href="/login/">Sign In</Link></label>
                    </div>





                </form>
            </div>
        </div>
    );

}