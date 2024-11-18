import "./quizComponent.css";


const QuizComponent = ({ questions, answerClick }) => {

    return (
        <div className="questions">
            <h2>{questions?.Question}</h2>
            <ul className="options">
                {
                    questions.answerOptions?.map((option) => (
                        <li key={option.text} className="list">
                            <button onClick={() => answerClick(option.isCorrect)}>
                                {option.text}
                            </button>
                        </li>
                    ))
                }
            </ul>

        </div>
    )
}

export default QuizComponent