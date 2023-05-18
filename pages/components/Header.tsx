// InputField.js

import React from 'react'

const Header = (props:any) => {
    return (
      
        <div className="p-0 flex w-80 pt-4">
        <div
            className="pt-0  font-bold text-black text-xl text-bold px-4"> {props.headername }
        </div>
    </div>
    )
}

export default Header