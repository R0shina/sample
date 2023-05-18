// InputField.js

import React from 'react'

const Button = (props:any) => {
    return (
      
        <div className="pl-5 flex justify-center w-80 pt-4">
        <button
            className="bg-orangee text-white font-bold py-2 px-4 w-80 rounded focus:outline-none focus:shadow-outline"
            type="submit"> {props.buttonname }
        </button>
    </div>
    )
}

export default Button