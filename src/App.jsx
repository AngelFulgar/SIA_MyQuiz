import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import QuizPage from './pages/QuizPage.jsx';
import ResultPage from './pages/ResultPage.jsx';
import { questions } from './data/questions.js';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [sessionStarted, setSessionStarted] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [retakePending, setRetakePending] = useState(false);

  useEffect(() => {
    if (location.pathname === '/quiz' && retakePending) {
      setRetakePending(false);
    }
  }, [location.pathname, retakePending]);

  function startNewQuiz() {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setIsComplete(false);
    setSessionStarted(true);
  }

  function retakeQuiz() {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setIsComplete(false);
    setSessionStarted(true);
    setRetakePending(true);
    navigate('/quiz', { replace: true });
  }

  function selectAnswer(questionIndex, answer) {
    setAnswers((previousAnswers) => ({
      ...previousAnswers,
      [questionIndex]: answer,
    }));
  }

  function goToNextQuestion() {
    setCurrentQuestionIndex((index) => Math.min(index + 1, questions.length - 1));
  }

  function completeQuiz() {
    setIsComplete(true);
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage onStartQuiz={startNewQuiz} />} />
      <Route
        path="/quiz"
        element={
          !sessionStarted ? (
            <Navigate to="/" replace />
          ) : isComplete && !retakePending ? (
            <Navigate to="/result" replace />
          ) : (
            <QuizPage
              currentQuestionIndex={currentQuestionIndex}
              answers={answers}
              onSelectAnswer={selectAnswer}
              onNextQuestion={goToNextQuestion}
              onComplete={completeQuiz}
            />
          )
        }
      />
      <Route
        path="/result"
        element={
          isComplete ? (
            <ResultPage answers={answers} onRetakeQuiz={retakeQuiz} />
          ) : retakePending ? null : (
            <Navigate to="/" replace />
          )
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
