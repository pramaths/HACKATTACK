import React from 'react'

import { useState } from 'react';
import { Link } from 'react-router-dom';
import QrReader from 'react-qr-reader';

export default function QRScanner() {

    const [result,setResult] = useState("")
    const [showResult,setShowResult] = useState(false)
const webError = (error)=>{
    if(error){
        console.log(error);
    }
}
const webScan = (result) =>{
if(result){
    
    alert("Successfuly Scanned! Go ahead and fill your details")
    setShowResult(true)
    setResult(result);
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

<div className="container text-light text-center">
   { showResult ?( <h4 className='text-success'>Details: {result}</h4>) : (<h5>Please scan QR code to proceed further </h5> )}

</div>
<div className="container d-grid gap-1 col-4 p-4 mx-auto pb-5">
 { showResult ? ( <Link className='btn btn-info btn-lg' to="/hireBook">Next </Link>) : null}
</div>
    </section>
    </>
  )
}