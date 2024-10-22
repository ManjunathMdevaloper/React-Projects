import React from 'react'
import HTMLQuestionsToggle from './HTMLQuestionsToggle'
import { htmlQuestions } from './htmlquestionsdata'
import './htmlquestions.css'
const HTMLQuestions = () => {
  return (
    <>
      <div className="block">
        {
            htmlQuestions.map((ele,index)=>{
                let {question,answer} = ele
                return(
                    <HTMLQuestionsToggle id={index+1} question={question} answer={answer}/>
                )
            })
        }
      </div>
    </>
  )
}

export default HTMLQuestions
