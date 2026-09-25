// src/pages/LandingPage.jsx

import { Link } from "react-router-dom";
import "./landingPage.css";

function LandingPage() {
  return (
    <main className="landing-page">

      {/* Hero */}
      <section className="landing-hero">
        <div className="hero-content">
          <p className="hero-kicker">
            A PERSONAL FILM ENCYCLOPEDIA
          </p>

          <h1>
            Cinema,<br />
            scene by scene.
          </h1>

          <p className="hero-description">
            Explore films, filmmakers, performers and the words
            that have become part of cinematic history.
          </p>

          <Link to="/movies" className="hero-button">
            Explore the films
          </Link>

        </div>

      </section>


      {/* Introduction */}

      <section className="landing-introduction">

        <p className="section-label">
          ABOUT THE SITE
        </p>
        <h2>
          A place to explore cinema
        </h2>
        <p>
          This website is an interactive encyclopedia dedicated to
          the history and language of film. Explore individual films,
          discover the people behind them, revisit memorable scenes,
          and collect the lines that have stayed with us.
        </p>
      </section>

      {/* Sections */}
      <section className="landing-sections">

        <p className="section-label">
          EXPLORE
        </p>
        <div className="section-grid">
          <Link to="/movies" className="landing-card">
            <span className="card-number">01</span>
            <h3>Movies</h3>
            <p>
              Explore individual films through their stories,
              casts, memorable scenes and selected screenplay
              excerpts.
            </p>
            <span className="card-link">
              Explore movies →
            </span>
          </Link>


          <Link to="/directors" className="landing-card">
            <span className="card-number">02</span>
            <h3>Directors</h3>
            <p>
              Discover filmmakers, their careers, recurring themes,
              visual styles and the films that define their work.
            </p>

            <span className="card-link">
              Explore directors →
            </span>
          </Link>

          <Link to="/actors" className="landing-card">
            <span className="card-number">03</span>
            <h3>Actors / Actresses</h3>
            <p>
              Explore performers and the characters, performances
              and films that shaped their careers.
            </p>

            <span className="card-link">
              Explore performers →
            </span>
          </Link>


          <Link to="/quotes" className="landing-card">
            <span className="card-number">04</span>

            <h3>Quotes</h3>
            <p>
              Browse memorable lines from films and discover the
              scenes and characters behind them.
            </p>
            <span className="card-link">
              Explore quotes →
            </span>
          </Link>
        </div>
      </section>

      {/* Closing */}
      <section className="landing-closing">
        <p>
          "I treated myself to a taxi. I rode home through the city streets. There wasn't a street, there wasn't a building, that wasn't connected to some memory in my mind. There, I was buying a suit with my father. There, I was having an ice cream soda after school. When I finally came in, Debbie was home from work, and I told her everything about my dinner with Andre"
        </p>

        <span>
          — Wallace Shawn
        </span>

        <p> <br /></p>
        
        <p>
          "Questa è la mia storia. Questo è il sacrificio che mio padre ha fatto. Questo è stato il suo regalo per me"
        </p>
        <span>
          — Giosuè Orefice
        </span>
      </section>

    </main>
  );
}

export default LandingPage;