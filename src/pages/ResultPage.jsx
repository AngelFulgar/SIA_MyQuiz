import { Link, useNavigate } from 'react-router-dom';
import ResultCard from '../components/ResultCard.jsx';
import { questions } from '../data/questions.js';

function ResultPage({ answers, onRetakeQuiz }) {
  const navigate = useNavigate();
  const total = questions.length;
  const correct = questions.reduce(
    (score, question, index) => score + (answers[index] === question.correctAnswer ? 1 : 0),
    0,
  );
  const incorrect = total - correct;
  const percentage = Math.round((correct / total) * 100);

  return (
    <main className="result-page page-shell">
      <Link className="brand" to="/">React Quiz App</Link>
      <ResultCard
        total={total}
        correct={correct}
        incorrect={incorrect}
        percentage={percentage}
        onRetakeQuiz={onRetakeQuiz}
        onReturnHome={() => navigate('/')}
      />
    </main>
  );
}

export default ResultPage;
