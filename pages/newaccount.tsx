import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import 'tailwindcss/tailwind.css';
import InputFields from "./components/Inputfields";
import Button from "./components/Button";
import Header from "./components/Header";



export default function log() {
        const [username, setUsername] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [userError,SetUserError] = useState("");
        const [PasswordError,setPasswordError] = useState("");
        const [emailError, setEmailError] = useState("");
        const handleClick=(event:any) =>{

        }

        const handleSubmit = (event:any) =>{
            event.preventDefault();
        }
    //     const name = (username:string) => {
    //         if(username==""){
    //             setUsername("* This field should not be empty");
  
        
return (
        <div className="h-screen w-screen" style={{ 
            backgroundImage: `url("/image 1.png")` 
          }}>
        <div className=" pt-10 pr-30 flex justify-center">
        <form className=" bg-white pl-5  w-96 shadow-md  rounded ">
          
                <div className="flex justify-center p-10 pr-16 pt-10 pb-4 py-9 ">
                    <Image alt="" className="flex-wrap" style={{flexDirection:'column' ,justifyContent :'center'}}
                        src="/Logo.jpg"
                        width={150}
                        height={40}
                        // style={{ alignSelf: 'center' }}
                    />

                </div>
                {/* <div onClick={handleSubmit} className="pt-5 pl-4 w-80 text-sm font-semibold">
                    <label className="text-black text-sm  "  id="username">Username
                    </label>
                    <input onClick={handleClick} type="text" name="username" className="bg-white  py-2  px-3  w-full mb-2 mt-2  text-sm border rounded border-gray-200  text-black  "
                    
                     onChange={(event) =>{ setUsername(event.target.value)
                    SetUserError('');
                }}
                        placeholder="Enter your username" required />
                          {username.length > 0 ? "" : <p className="text-red-600 text-xs" >*Please enter the User Name</p>}      

                </div> */}

                        <Header headername="Create New Account" />

                    <div onClick={handleSubmit} >
                        <InputFields label="Username" type="text" />
                    </div>

                    <div onClick={handleSubmit} >
                        <InputFields label="Email" type="email" />
                    </div>

                    <div onClick={handleClick}>
                        <InputFields label="Password" type="password" />
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
                  <label className="text-gray-500 font-semibold text-sm " id= "dh">Have an account?</label> 
                  <label className="text-orangee text-sm underline pl-1 font-semibold" id= "dh"><Link href="/login/">Sign In</Link></label> 
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
        

    

