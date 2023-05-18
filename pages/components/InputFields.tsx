// InputField.js

import React from 'react'

const Inputfields = (props:any) => {
    return (
        <div className="pt-4 pl-4 w-80  text-sm font-semibold">
            <label className="text-black text-sm">{props.label}</label>
            <input type={props.type} className="bg-white  py-2 px-3  w-full  mt-2 text-sm border rounded border-gray-200  text-black 
            outline-none  "
            />
        </div>
    )
}

export default Inputfields