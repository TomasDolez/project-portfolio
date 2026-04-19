import { useState } from 'react'
import { projects } from '../data/projects'
import './Projects.css'

const rotations = ['-0.6deg', '0.5deg', '-0.4deg', '0.6deg', '-0.5deg', '0.4deg', '-0.5deg', '0.6deg']

export default function Projects() {
  const [expanded, setExpanded] = useState<string | null>(null)

  const toggle = (id: string) => {
    setExpanded(prev => prev === id ? null : id)
  }

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="reveal">
          <span className="section-label">Projects</span>
          <h2 className="section-title">Selected work</h2>
          <p className="projects__subtitle">
            A curated selection of projects that showcase my approach to delivering results.
          </p>
        </div>

        <div className="timeline">
          {projects.map((p, i) => {
            const isOpen = expanded === p.id
            const isOngoing = p.status === 'Ongoing'

            return (
              <div
                key={p.title}
                className={`timeline__item timeline__item--${i % 2 === 0 ? 'left' : 'right'} reveal reveal-delay-${(i % 4) + 1}`}
              >
                <div className="timeline__node">
                  <div className={`timeline__dot ${isOngoing ? 'timeline__dot--ongoing' : ''}`} />
                </div>

                <article
                  className={`project-doc ${isOngoing ? 'project-doc--ongoing' : ''} ${isOpen ? 'project-doc--expanded' : ''}`}
                  style={{ '--rotate': isOpen ? '0deg' : rotations[i] } as React.CSSProperties}
                  onClick={() => toggle(p.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), toggle(p.id))}
                  aria-expanded={isOpen}
                >
                  <div className="project-doc__pin" />

                  <div className="project-doc__file-header">
                    <div className="project-doc__header-left">
                      <span className="project-doc__file-id">{p.id}</span>
                      <span className="project-doc__period">{p.period}</span>
                    </div>
                    <div className="project-doc__header-right">
                      {isOngoing && p.phase && (
                        <span className="project-doc__phase">{p.phase}</span>
                      )}
                      <span className={`project-doc__stamp project-doc__stamp--${p.status.toLowerCase()}`}>
                        {isOngoing && <span className="project-doc__stamp-dot" />}
                        {p.status}
                      </span>
                    </div>
                  </div>

                  <div className="project-doc__ruled" aria-hidden="true">
                    <span /><span /><span />
                  </div>

                  <h3 className="project-doc__title">
                    {p.title}
                    <svg
                      className={`project-doc__chevron ${isOpen ? 'project-doc__chevron--open' : ''}`}
                      width="16" height="16" viewBox="0 0 16 16" fill="none"
                    >
                      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </h3>
                  <p className="project-doc__role">{p.role}</p>
                  <p className="project-doc__desc">{p.description}</p>

                  {/* Tags always visible */}
                  <div className="project-doc__tags">
                    {p.tags.map((t) => (
                      <span key={t} className="project-doc__tag">{t}</span>
                    ))}
                  </div>

                  {/* Expanded content — details + outcomes only */}
                  <div className={`project-doc__expand ${isOpen ? 'project-doc__expand--open' : ''}`}>
                    <div className="project-doc__expand-inner">
                      {p.details && (
                        <div className="project-doc__details">
                          <span className="project-doc__details-label">Details</span>
                          <p>{p.details}</p>
                        </div>
                      )}

                      <ul className="project-doc__outcomes">
                        <li className="project-doc__outcomes-header">
                          {isOngoing ? 'Target Outcomes' : 'Key Outcomes'}
                        </li>
                        {p.outcomes.map((o) => (
                          <li key={o}>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                              <path d="M3 7l3 3 5-5" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            {o}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="project-doc__fold" />
                </article>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
