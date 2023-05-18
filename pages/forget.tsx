import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import 'tailwindcss/tailwind.css';
import InputFields from "./components/Inputfields";
import Button from "./components/Button";
import Header from "./components/Header";

export default function res() {

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const handleSubmit = (event: any) => {
        event.preventDefault();
    }


    return (

        <div className="h-screen" style={{
            backgroundImage: `url("/image 1.png")`

        }}>
            <div className=" pt-10 pr-30 flex justify-center">
                <form className="p-5 p w-96 bg-white shadow-md rounded ">

                    <div className="flex justify-center p-10 pr-16 pt-10 pb-4 py-9 ">
                        <Image className="flex-wrap" style={{ flexDirection: 'column', justifyContent: 'center' }}
                            src="/Logo.jpg"
                            width={150}
                            height={40}
                        // style={{ alignSelf: 'center' }}

                        /> <Link href="/login/"></Link>
                    </div>

                    <div className="pt-5 flex flex-row justify-content align-middle">
                        <a href="/login/">
                            <Image alt="" src="/Arrow 2.jpg" width={20} height={40} />
                        </a>

                         <Header headername="Forget Password" />
                    </div>

                     <div onClick={handleSubmit} >
                        <InputFields label="Email" type="email" />
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