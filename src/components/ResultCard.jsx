function ResultCard({ total, correct, incorrect, percentage, onRetakeQuiz, onReturnHome }) {
  return (
    <section className="result-card" aria-labelledby="result-title">
      <h1 id="result-title">Quiz complete!</h1>
      <p className="result-card__score">{percentage}%</p>
      <p className="result-card__message">
        You answered {correct} out of {total} questions correctly.
      </p>

      <dl className="result-stats" aria-label="Answer summary">
        <div className="result-stat">
          <dt>Correct</dt>
          <dd>{correct}</dd>
        </div>
        <div className="result-stat">
          <dt>Incorrect</dt>
          <dd>{incorrect}</dd>
        </div>
        <div className="result-stat">
          <dt>Total</dt>
          <dd>{total}</dd>
        </div>
      </dl>

      <div className="result-card__actions">
        <button className="button button--primary" type="button" onClick={onRetakeQuiz}>
          Retake Quiz
        </button>
        <button className="button button--secondary" type="button" onClick={onReturnHome}>
          Return Home
        </button>
      </div>
    </section>
  );
}

export default ResultCard;
