import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Background grid decoration */}
      <div className="hero__grid" aria-hidden="true" />

      {/* Floating decorative sticky notes */}
      <div className="hero__stickies" aria-hidden="true">
        <div className="hero__sticky hero__sticky--1">
          <span className="hero__sticky-text">Sprint Planning</span>
          <span className="hero__sticky-check">&#10003;</span>
        </div>
        <div className="hero__sticky hero__sticky--2">
          <span className="hero__sticky-text">Q2 Goals</span>
          <div className="hero__sticky-lines">
            <span /><span /><span />
          </div>
        </div>
        <div className="hero__sticky hero__sticky--3">
          <span className="hero__sticky-text">AI Review</span>
          <span className="hero__sticky-priority">HIGH</span>
        </div>
        <div className="hero__sticky hero__sticky--4">
          <span className="hero__sticky-text">Stakeholder</span>
          <span className="hero__sticky-text">Meeting</span>
          <span className="hero__sticky-time">10:00</span>
        </div>
        <div className="hero__sticky hero__sticky--5">
          <span className="hero__sticky-text">Deploy v2.1</span>
          <span className="hero__sticky-check">&#10003;</span>
        </div>
        {/* Floating paper clip */}
        <div className="hero__paperclip hero__paperclip--1" />
        <div className="hero__paperclip hero__paperclip--2" />
      </div>

      <div className="hero__content container">
        <div className="hero__badge reveal">
          <span className="hero__badge-dot" />
          Available for new projects
        </div>

        <h1 className="hero__name reveal reveal-delay-1">
          Tom&#225;&#353; <span className="hero__name-accent">Dole&#382;al</span>
        </h1>

        <p className="hero__title reveal reveal-delay-2">
          Project Manager <span className="hero__sep">&middot;</span> AI Consultant
        </p>

        {/* PLACEHOLDER: Replace with your real tagline */}
        <p className="hero__tagline reveal reveal-delay-3">
          I help teams ship complex projects on time — from digital
          transformations to AI-powered workflow automation.
        </p>

        <div className="hero__actions reveal reveal-delay-4">
          <a href="#projects" className="hero__btn hero__btn--primary">
            View Projects
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#contact" className="hero__btn hero__btn--ghost">
            Get in Touch
          </a>
        </div>

        {/* Stat bar — styled as sticky notes */}
        <div className="hero__stats reveal reveal-delay-4">
          <div className="hero__stat hero__stat--yellow">
            <span className="hero__stat-num">3+</span>
            <span className="hero__stat-label">Years Experience</span>
          </div>
          <div className="hero__stat hero__stat--blue">
            <span className="hero__stat-num">15+</span>
            <span className="hero__stat-label">Projects Delivered</span>
          </div>
          <div className="hero__stat hero__stat--pink">
            <span className="hero__stat-num">8+</span>
            <span className="hero__stat-label">AI Initiatives</span>
          </div>
        </div>
      </div>

      <div className="hero__scroll-hint" aria-hidden="true">
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
