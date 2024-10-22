import React, { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const HTMLQuestionsToggle = ({id,question,answer}) => {
   let [bool, setBool] = useState(true)
   let hndlBtn = () =>{
    setBool(!bool)
   }
  return (
    <>
      <button onClick={hndlBtn}>{id} . {question} {bool ? <ArrowDropDownIcon/> : <ArrowDropUpIcon/> }
      <p style={{fontSize:15}}>{bool ? "" : answer}</p>

      </button>
    </>
  )
}

export default HTMLQuestionsToggle
