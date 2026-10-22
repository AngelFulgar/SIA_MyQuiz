function AnswerOption({ option, index, isSelected, onSelect }) {
  const letter = String.fromCharCode(65 + index);

  return (
    <button
      className={`answer-option${isSelected ? ' answer-option--selected' : ''}`}
      type="button"
      aria-pressed={isSelected}
      onClick={() => onSelect(option)}
    >
      <span className="answer-option__letter" aria-hidden="true">{letter}</span>
      <span className="answer-option__text">{option}</span>
      <span className="answer-option__indicator" aria-hidden="true">
        {isSelected ? '✓' : ''}
      </span>
    </button>
  );
}

export default AnswerOption;
