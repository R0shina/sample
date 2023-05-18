import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";
import 'tailwindcss/tailwind.css';
import InputFields from "./components/Inputfields";
import Button from "./components/Button";
import Header from "./components/Header";


export default function log() {


    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();


    const onSubmit = (data: any) => {
        console.log(data);
    };

    const handleClick = (event: any) => {

    }

    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    // const [userError, SetUserError] = useState("");
    // const [PasswordError, setPasswordError] = useState("");
    // const [passwordType, setPasswordType] = useState("password");



    // const handleSubmit = (event: any) => {
    //     event.preventDefault();
    //     if (username == "") {
    //         setUsername("* This field should not be empty");
    //     }

    //     if (password == "") {
    //         setPasswordError("*This field should not be empty");
    //     }
    // }


    return (
        <div className="h-screen w-screen" style={{
            backgroundImage: `url("/image 1.png")`
        }}>
            {/* <div className="h-4/5 w-96 justify-center items-center"> */}
            <div onClick={handleSubmit} className="  pt-10 pr-30 flex justify-center">
                <form className=" bg-white p-5 p w-96 shadow-md rounded   ">

                    <div className="flex justify-center p-10 pr-16 pt-10 pb-4 py-9 ">
                        <Image className="flex-wrap" alt="" style={{ flexDirection: 'column', justifyContent: 'center' }}
                            src="/Logo.jpg"
                            width={150}
                            height={40}
                        // style={{ alignSelf: 'center' }}
                        />

                    </div>
                    <Header headername="Sign in to your account" />

                    <div onClick={handleClick} >
                        <InputFields label="Username" type="text"
                            {...register("username", { required: "* This field should not be empty" })}
                            error={errors.username && errors.username.message}
                        />
                    </div>

                    <div onClick={handleClick} >
                        <InputFields label="Password" type="password"

                            {...register("password", { required: "* This field should not be empty" })}
                            error={errors.password && errors.password.message}
                        />
                    </div>


                    <div >
                        <div className="text-black">
                            <div>
                                <input type="checkbox" className=" pl-20 " />
                                <label className="text-sm pl-2  text-gray-500">Remember me</label>

                                <label className="pl-20 pt-5 text-sm pb-9 font-semibold"><Link href="forget">Forgot Password?</Link></label>
                            </div>

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
                        <Image src="/fb.png " width={20} height={20} />
                        <Image src="/Google.jpg " width={20} height={20} />
                    </div>
                </form>
            </div>
        </div>
        // </div>
    );

}

