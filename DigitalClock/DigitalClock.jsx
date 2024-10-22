import React, { useEffect, useState } from 'react'

const DigitalClock = () => {
    let [timedate , settimeDate] = useState({})
   useEffect(()=>{
    setInterval(()=>{
        let dateObj = new Date();
       settimeDate({
        date : dateObj.toLocaleDateString(),
        time : dateObj.toLocaleTimeString()
    })
    },1000)
   },[timedate])
   let {date,time} = timedate
  return (
    <>
      <div className="digital-clock">
        <div className="header"><h1>Digital Clock</h1></div>
            <div className="container">
                <div>
                    Date : <span>{date}</span>
                </div>
                <div>
                   Time : <span>{time}</span>
                </div>
                <div>Day : </div>
            </div>
      </div>
    </>
  )
}

export default DigitalClock
