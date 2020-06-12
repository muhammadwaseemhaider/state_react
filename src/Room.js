import React, { useState } from 'react';
import './App.css';

const Room = () => 
    {
    const [isLit, setLit] = useState(false);
    return (
    <div className= {`room ${isLit ? "lit" : "dark" }`}>
        
        The room is {isLit ? "lit" : "dark"}
        <br />
        <button  onClick={() => setLit(true)}>
            On
        </button>
        <button  onClick={() => setLit(false)}>
            Off
        </button>
        <Temperature />
     </div>
    );
    }

    const Temperature = () => 
    {
    let [temp, setTemp] = useState(22);

    return (
    <div>
  
        The room temperature is {temp}
        <br />
        <button  onClick={() => setTemp(++temp)}>
            +
        </button>
        <button  onClick={() => setTemp(--temp)}>
            -
        </button>
        <br />
    </div>
    );
    }


export default Room;
