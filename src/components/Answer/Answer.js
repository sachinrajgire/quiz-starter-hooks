import React from 'react';
import './Answer.css' ;

const Answer = ({answers,recordAnswers,currentQuestion,handleRecordAnswer}) => {

  function handleSelectedAnswer (id) {

    let className=`answer`

    const isAnswerSelected =recordAnswers.find((i)=>{
      return i[0] ==currentQuestion
    })

    if(!isAnswerSelected) {
     className='answer'
    }
    else if (isAnswerSelected[1] === id) {
      className=`answer-selected`
    }
    else {
      className='answer'
    }

  return className

  }


    return (
        <div>
       <ul >
      {answers.map((item) =>
        <li key={item.id} 
        className={handleSelectedAnswer(item.id)} 
        onClick={()=>handleRecordAnswer(item.id)} > {item.answer} </li> ) }
      </ul>      
        </div>
    );
      }
export default Answer;