// InputField.js

import { formValues } from '@/pages/login'
import React, { FC,ChangeEvent} from 'react'
import { RegisterOptions, UseFormRegister } from 'react-hook-form'

interface props {
    register: UseFormRegister<formValues>
    label: string
    type: string
    name: 'username' | 'password' |'email' |'cpassword'
    placeholder: string
    option?: RegisterOptions<formValues>
    error?: string
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void

    
}

const Inputfields: FC<props> = ({ name, label, register, type, placeholder, option, error,onChange }) => {

    return (
        <div className="pt-4 pl-4 w-80  text-sm font-semibold">
            <label className="text-black text-sm">{label}</label>
            <input {...register(name,  { ...option })}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
    

                className="bg-white  py-2  px-3  w-full mb-2 mt-2  text-sm border rounded border-gray-200  text-black  "
            />
            <div className='text-red-600'>{error}</div>
        </div>
    )
}




export default Inputfields