import { Link } from 'react-router-dom';

function QuizHeader({ currentQuestion, totalQuestions }) {
  return (
    <header className="quiz-header">
      <Link className="brand" to="/">React Quiz App</Link>
      <p aria-live="polite">
        Question {currentQuestion} of {totalQuestions}
      </p>
    </header>
  );
}

export default QuizHeader;
