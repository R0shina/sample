import { useState } from "react";
import './app.css';

function App(){
    const [count,setCount] =useState(0);
    return(
    <h1 className="te text-3xl fontbold text-red-400">Hello world</h1>
    )
}
export default App