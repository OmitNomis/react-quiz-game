import React, {useState} from "react";
import './App.css';


function App() {
  const questions = [
    {
      questionText: 'How many soccer players should each team have on the field at the start of each match?',
      answerOptions: [
        { answerText: '7 York', isCorrect: false },
        { answerText: '12', isCorrect: false },
        { answerText: '11', isCorrect: true },
        { answerText: '21', isCorrect: false },
      ],
    },
    {
      questionText: 'Who is CEO of Tesla?',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Elon Musk', isCorrect: true },
        { answerText: 'Bill Gates', isCorrect: false },
        { answerText: 'Tony Stark', isCorrect: false },
      ],
    },
    {
      questionText: 'In what year was the first-ever Wimbledon Championship held?',
      answerOptions: [
        { answerText: '1877', isCorrect: true },
        { answerText: '1899', isCorrect: false },
        { answerText: '1999', isCorrect: false },
        { answerText: '1750', isCorrect: false },
      ],
    },
    {
      questionText: 'How many Harry Potter books are there?',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: '7', isCorrect: true },
      ],
    },
    {
      questionText: 'What year was the very first model of the iPhone released?',
      answerOptions: [
        { answerText: '2010', isCorrect: false },
        { answerText: '2006', isCorrect: false },
        { answerText: '1990', isCorrect: false },
        { answerText: '2007', isCorrect: true },
      ],
    },
  ];

  const [questionNo, setQuestionNo] = useState(0); 
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);


  const buttonClicked =(isCorrect) => {

      if (isCorrect ===true){
        setScore(score+1);
      }
      const nextQuestion  = questionNo +1; 
      
    if(nextQuestion < questions.length){
      setQuestionNo(nextQuestion);
    }else{
      setShowScore(true);
    }
  }
  
  const playAgain = () =>{
    setQuestionNo(0);
    setShowScore(false);
    setScore(0);
  }

  return (
    <div className="container">
      { showScore ? (
        <div className="scoreBoard">
          <h1>You Scored {score} out of {questions.length}</h1>
          <button className="replayButton" onClick={playAgain}>Play Again?</button>
        </div>

      ) : (
        <>
        <div className="questionBoard">
          <div className="questionNumber">Question no.{questionNo+1}</div>
          <div className="question">{questions[questionNo].questionText}</div>
        </div>
        <div className="answerBoard">
          {questions[questionNo].answerOptions.map((option) => (<button onClick = {() =>buttonClicked(option.isCorrect)}>{option.answerText}</button> ))}
        </div>
        </>
      )}
    </div>

  );
}

export default App;
