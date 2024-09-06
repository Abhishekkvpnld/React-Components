import "./quiz.css";
import QuizComponent from "../../components/quizComponent/QuizComponent.jsx";
import { questions } from "../../utils/questions.js";
import { useState } from "react";


const Quiz = () => {

    const [currentQuestion, setCorrentQuestion] = useState(0);
    const [userAnswer, setUserAnswer] = useState([]);

    const handleNextQuestion = (isCorrect) => {
        setCorrentQuestion(currentQuestion + 1);
        setUserAnswer((prev) => [...prev, isCorrect])
    };

    const resetQuiz = () => {
        setCorrentQuestion(0);
        setUserAnswer([]);
    };

    const correctAnswer = userAnswer?.filter((item) => item).length;

    return (
        <div className="quiz-div">
            <h1>Quiz Master</h1>
            {
                currentQuestion < questions.length && (
                    <QuizComponent questions={questions[currentQuestion]} answerClick={handleNextQuestion} />
                )
            }


            {/* Result */}
            {
                currentQuestion === questions.length && (
                    <div className="result">
                        <h2>Results</h2>
                        <p>
                            <span>You Answered {correctAnswer} Out Of {questions.length} Questions </span>
                            <button onClick={resetQuiz}>Retry</button>
                        </p>

                        <div className="question-result">
                            <ul>
                                {
                                    questions?.map((item, index) => (
                                        <li key={index}>
                                            <span className="number">{index+1}</span>{ item.Question}  <span className={userAnswer[index] ? "Correct" : "Incorrect"}>{userAnswer[index] ? "Correct" : "Incorrect"}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                    </div>
                )
            }



        </div >
    )
}

export default Quiz;