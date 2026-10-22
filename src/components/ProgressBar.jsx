function ProgressBar({ currentQuestion, totalQuestions }) {
  const progress = Math.round((currentQuestion / totalQuestions) * 100);

  return (
    <div className="progress-section">
      <div className="progress-section__labels">
        <span>Your progress</span>
        <span>{progress}%</span>
      </div>
      <div
        className="progress-track"
        role="progressbar"
        aria-label="Quiz progress"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={progress}
      >
        <div className="progress-track__fill" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}

export default ProgressBar;
