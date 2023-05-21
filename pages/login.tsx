/* eslint-disable react-hooks/rules-of-hooks */
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
// import { useState } from "react";
import 'tailwindcss/tailwind.css';
import Button from "../components/Button";
import Header from "../components/Header";
import Inputfields from "../components/Inputfields";

export interface formValues {
    username: string,
    password: string,
    email: string,
    cpassword:string,
}

export default function log() {

    // console.log("print");


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
            {/* <div className="h-4/5 w-96 justify-center items-center"> */}
            <div className="  pt-10 pr-30 flex justify-center">
                <form onSubmit={handleSubmit(onSubmit)} className=" bg-white p-5 p w-96 shadow-md rounded   ">
                    <div className="flex justify-center p-10 pr-16 pt-10 pb-4 py-9 ">
                        <Image className="flex-wrap" alt="" style={{ flexDirection: 'column', justifyContent: 'center' }}
                            src="/Logo.jpg"
                            width={150}
                            height={40}
                        // style={{ alignSelf: 'center' }}
                        />

                    </div>
                    <Header headername="Sign in to your account" />

                    <div >

                        <Inputfields label="Username" type="text" name={"username"} placeholder="Enter Username"
                            register={register}
                            option={{ required: { value: true, message: "* This field should not be empty" } }}
                            error={errors.username?.message}
                        />
                    </div>

                    <div >
                        <Inputfields label="Password" type="password" name="password" placeholder="Enter Password"
                            register={register}
                            option={{ required: { value: true, message: "* This field should not be empty" } }}
                            error={errors.password?.message}
                        />
                    </div>
                    <div className="text-black">
                        <div>
                            <input type="checkbox" className=" pl-20 " />
                            <label className="text-sm pl-2  text-gray-500">Remember me</label>

                            <label className="pl-20 pt-5 text-sm pb-9 font-semibold"><Link href="forget">Forgot Password?</Link></label>
                        </div>
                    </div>

                    <div >
                        <Button buttonname="Sign me in" />
                    </div>

                    <div className="pt-3 pb-3 pl-20">
                        <label className="text-gray-500 text-sm font-semibold" id="dh">Don't have an account?</label>
                        <label className="text-orangee text-sm underline font-semibold pl-1" id="dh"><Link href="/newaccount/">Sign Up</Link></label>
                    </div>

                    <hr></hr>

                    <div className="flex flex-row items-center space-x-2">
                        <div className="text-gray-500 text-sm pl-20 pt-10 pb-10  ">Continue with</div>
                        <Image src="/fb.png " alt="" width={20} height={20} />
                        <Image src="/Google.jpg " alt="" width={20} height={20} />
                    </div>
                    {/* <pre> {JSON.stringify(watch(), null, 2)}</pre> */}
                </form>
            </div>
        </div>
    );

}

