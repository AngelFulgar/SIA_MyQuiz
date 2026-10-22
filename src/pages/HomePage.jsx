import { Link } from 'react-router-dom';

function HomePage({ onStartQuiz }) {
  return (
    <main className="home-page">
      <nav className="site-nav page-shell" aria-label="Main navigation">
        <Link className="brand" to="/">React Quiz App</Link>
      </nav>

      <section className="hero" aria-labelledby="home-title">
        <h1 id="home-title">Ready to begin?</h1>
        <p>
          Answer 10 multiple-choice questions about React and see your score at the end.
        </p>
        <p className="hero__details">10 questions · 4 choices each</p>
        <Link className="button button--primary" to="/quiz" onClick={onStartQuiz}>
          Start Quiz
        </Link>
      </section>
    </main>
  );
}

export default HomePage;
