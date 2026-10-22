import { useNavigate } from 'react-router-dom';
import ProgressBar from '../components/ProgressBar.jsx';
import QuestionCard from '../components/QuestionCard.jsx';
import QuizHeader from '../components/QuizHeader.jsx';
import { questions } from '../data/questions.js';

function QuizPage({
  currentQuestionIndex,
  answers,
  onSelectAnswer,
  onNextQuestion,
  onComplete,
}) {
  const navigate = useNavigate();
  const question = questions[currentQuestionIndex];
  const selectedAnswer = answers[currentQuestionIndex] ?? '';
  const currentQuestion = currentQuestionIndex + 1;
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  function handleContinue() {
    if (!selectedAnswer) return;

    if (isLastQuestion) {
      onComplete();
      navigate('/result');
      return;
    }

    onNextQuestion();
  }

  return (
    <main className="quiz-page">
      <div className="quiz-shell">
        <QuizHeader currentQuestion={currentQuestion} totalQuestions={questions.length} />
        <div className="quiz-content">
          <ProgressBar currentQuestion={currentQuestion} totalQuestions={questions.length} />
          <QuestionCard
            question={question}
            selectedAnswer={selectedAnswer}
            onSelectAnswer={(answer) => onSelectAnswer(currentQuestionIndex, answer)}
          />
          <div className="quiz-controls">
            <span className="quiz-controls__hint" aria-live="polite">
              {selectedAnswer ? 'Answer selected' : 'Choose an answer to continue'}
            </span>
            <button
              className="button button--primary"
              type="button"
              onClick={handleContinue}
              disabled={!selectedAnswer}
            >
              {isLastQuestion ? 'Submit Quiz' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default QuizPage;
