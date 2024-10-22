import React, { useRef, useState } from 'react'
import './qrcode.css'
const QrcodeGenarator = () => {
    let inputFeild = useRef();
   let [qrCode , setQrCode] =  useState('')
   let [val, setVal] = useState();
   let [msz,setMsz] = useState('')
    let handleSubmit = (e)=>{
      let inputVal = inputFeild.current.value
      if(inputVal === "" || inputVal === null)
      {
        alert('Enter Something')
      }else{
        e.preventDefault()
        setQrCode(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputVal}`) 
        setMsz(`Scan this QR code `+"⬇️")
        setVal('')
      }
    }
  return (
    <>
    <h1 style={{textAlign:'center',padding:10,backgroundColor:'orange',}}>QR Code Genarator</h1>
      <div className="qrcode">
        <div className="formContainer">
            <form action="" onSubmit={handleSubmit}>
            <div className="in"><input type="text" ref={inputFeild} placeholder='Enter Something....!' value={val} /></div>
            <div className="in"><button>Genarate QR code</button></div>
            </form>
        </div>
        <div className="image">
            <h1>{msz}</h1>
            <img src={qrCode} alt="" />
        </div>
      </div>
    </>
  )
}

export default QrcodeGenarator
