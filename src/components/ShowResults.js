import React from 'react';

function ShowResults({recordAnswers,qList}) {

function calculatedAnswer () {

let tally = 0 
recordAnswers.forEach(i=>{
  const correctAnswer= qList.find(j =>j.questionID == i[0]).correctAnswerID
  if(correctAnswer == i[1]){
    tally ++
  }
   console.log(correctAnswer,'correctAnswer');

})
console.log(tally,'tally');
return `You scored ${tally} out of ${qList.length} correctly`

}
    return (
    <div className="App">
      {calculatedAnswer()}
    </div>
  );
}

export default ShowResults;
