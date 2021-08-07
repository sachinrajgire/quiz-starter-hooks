import './App.css';
import questionMenu from './api/multipleChoice.json';
import React , {useState} from 'react';
import Answer from './components/Answer/Answer';
import ShowResults from './components/ShowResults';
import Button from '@material-ui/core/Button';


function App() {
const [currentQuestion, setCurrentQuestion] =useState(1)
const [recordAnswers, setRecordAnswers] =useState([])
const [qList, setQList] = useState(questionMenu.options)
const [showResults, setShowResults] = useState(false)

console.log(recordAnswers,'recordAnswers');

const cqDetails=qList.find(i=>i.questionID===currentQuestion)

function handleNext () {
  if(currentQuestion === qList.length){
  return setShowResults(true)
  }
  setCurrentQuestion(currentQuestion + 1)
}

function handleRecordAnswer (chosenAnswerId) {
let copyCurrentAnswers = [...recordAnswers]
const doesEntryExist = copyCurrentAnswers.find(i=>i[0]==currentQuestion)
console.log(doesEntryExist,'doesEntryExist');
if(!doesEntryExist) {
  copyCurrentAnswers.push([currentQuestion,chosenAnswerId])
  return setRecordAnswers(copyCurrentAnswers) ;
  
}
let extractOtherValues = copyCurrentAnswers
.filter(j=>j[0] !==currentQuestion)
extractOtherValues.push([currentQuestion,chosenAnswerId])
console.log(extractOtherValues,'extractOtherValues');
setRecordAnswers(extractOtherValues)
}

  return (
    <div className="App">
     <div className="topDiv" > Welcome Sachin Rajgire  </div>
     {!showResults && 
     <div>
     <h3>{`${currentQuestion} of ${qList.length}`}</h3>
     <h3>{cqDetails.question}</h3>
     <h4>{cqDetails.subQuestion}</h4>
      <Answer
      answers={cqDetails.answers}
      handleRecordAnswer={handleRecordAnswer}
      currentQuestion={currentQuestion}
      recordAnswers={recordAnswers}
      />
      
      <Button disable={currentQuestion === qList.length} onClick={()=>setCurrentQuestion(currentQuestion-1)}>Previous</Button>
      <Button disable={currentQuestion === qList.length} onClick={()=>handleNext()}>Next</Button>
      </div>
     }
      {showResults && <ShowResults
      recordAnswers={recordAnswers}
      qList={qList}
      />}
    </div>
  );
}

export default App;
