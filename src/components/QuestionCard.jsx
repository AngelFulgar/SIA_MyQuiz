import AnswerOption from './AnswerOption.jsx';

function QuestionCard({ question, selectedAnswer, onSelectAnswer }) {
  return (
    <section className="question-card" aria-labelledby={`question-${question.id}`}>
      <h2 className="question-card__title" id={`question-${question.id}`}>
        {question.question}
      </h2>
      <div className="answer-list" role="group" aria-label="Answer choices">
        {question.options.map((option, index) => (
          <AnswerOption
            key={option}
            option={option}
            index={index}
            isSelected={selectedAnswer === option}
            onSelect={onSelectAnswer}
          />
        ))}
      </div>
    </section>
  );
}

export default QuestionCard;
