import QrReader from 'react-qr-reader';

import React from 'react'

import { useState } from 'react';
export default function FirstPost() {

    // const [result,setResult] = useState("")
    // const [showResult,setShowResult] = useState(false)
    const webError = (error)=>{
        if(error){
            console.log(error);
        }
    }
    const webScan = (result) =>{
    if(result){
        
        alert("Successfuly Scanned! Go ahead and fill your details")
        // setShowResult(true)
        // setResult(result);
    }
}
    return (

        <>
        
        <section className="Scanner bg-dark ">
   
    {/* <input type="file" onChange={(e) => readCode(e)} /> */}
    <div className=" m-3 pt-5">
       <QrReader
       
       delay={300}
       onError={webError}
       onScan={webScan}
    //    legacyMode={"user"}
       /> 
    </div>

    </section>
        </>
    );
  }




