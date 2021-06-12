import React from 'react';
import './Answer.css' ;

const Answer = ({answers,recordAnswer}) => {
    return (
        <div>
       <ul >
      {answers.map((item) =>
        <li key={item.id} 
        className="answer" 
        onClick={()=>recordAnswer(item.id)} > {item.answer} </li> ) }
      </ul>      
        </div>
    );
};

export default Answer;