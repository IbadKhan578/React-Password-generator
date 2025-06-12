import React, { useEffect, useRef, useState } from 'react'

function PasswordGenerator(){

    let [password,setPassword]=useState("")
    let [Length,setLength]=useState(8);
    let [numAllowed,setNumAllowed]=useState(false);
    let [charAllowed,setCharAllowed]=useState(false);
const passwordRef = useRef(null);

   useEffect(()=>{

    let pass=""
    let str=
    "ABCDEFGHIJKLMNOPQESTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numAllowed) str+="1234567890";
    if(charAllowed) str+="!@#$%^&*()_+}{<>?[]/.;";
    for(let i=1; i<=Length;i++){
        let char= Math.floor(Math.random()*str.length)+1;
        pass+=str.charAt(char);


    }
    setPassword(pass);
    console.log(passwordRef);


   },[Length, numAllowed,charAllowed])


   let  copyPassword =()=>{

passwordRef.current.select();
    window.navigator.clipboard.writeText=password;

   }



    let handleLength=(e)=>{
        setLength(e.target.value);
    }

    let handleNumAllowed=()=>{

        setNumAllowed((prev)=>!prev  );
        console.log(numAllowed);
    }

    
    let handleCharAllowed=()=>{

        setCharAllowed((prev)=>!prev);
        console.log(charAllowed);
    }


return (
    <div >
  <div className="pass-gen-container">
    <div className="heading">
      <h1>Password Generator</h1>
    </div>
    <div className="input-cont">
      <input type="text" value={password}   ref={passwordRef} placeholder="Password" readOnly /> 
      <button className="copy-btn" onClick={copyPassword} >Copy</button>
    </div>

<div className="control">
    <input type="range"   onChange={handleLength} max={50}
    value={Length} />
    <p>Length:{Length}</p>
    <div className="boxes">
 <input type="checkbox"  value={numAllowed} onChange={handleNumAllowed}  /> <label>Numbers</label>
 <input type="checkbox"  value={charAllowed} onChange={handleCharAllowed}  /> <label>Character</label>
</div>
</div>

  </div>
  </div>
);

}

export default PasswordGenerator;