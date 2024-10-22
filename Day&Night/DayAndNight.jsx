import React,{useState} from 'react'
import './dayandnight.css'
const DayAndNight = () => {
    let [val,setval] = useState(true)
    let btn = ()=>{
        setval(!val)
        document.body.style.cssText = `background : ${val?'black':'white'}`
    }
  return (
    <>
      <div className="daynight">
        <div className="header">
            <h1>Day & Night Mode</h1>
        </div>
        <div className="day">
            <button onClick={btn} className={val?'left':'right'}> <h1>{val?'Day' : 'Night'}</h1></button>
        </div>
      </div>
    </>
  )
}

export default DayAndNight
