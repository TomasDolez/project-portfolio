import './About.css'

const highlights = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 3v18M3 9h6M3 15h6M15 8h2M15 12h2M15 16h2" />
      </svg>
    ),
    title: 'Project & Portfolio Management',
    desc: 'Leading cross-functional projects from strategy to delivery — Jira rollouts, process redesigns, and enterprise-wide tooling.',
    color: 'yellow' as const,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z" />
        <path d="M8 14h8l1 8H7l1-8z" />
        <circle cx="9" cy="6.5" r="0.5" fill="currentColor" />
        <circle cx="15" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
    title: 'AI & Automation',
    desc: 'Building AI agents for PM teams, automating pricing and campaign workflows, and driving data-driven decision-making.',
    color: 'blue' as const,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: 'Process & Change Management',
    desc: 'Redesigning work structures, driving tool adoption, and bridging business needs with technical implementation.',
    color: 'green' as const,
  },
]

const rotations = ['-1.5deg', '1deg', '-0.8deg']

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="reveal">
          <span className="section-label">About</span>
          <h2 className="section-title">Turning complexity into clarity</h2>
        </div>

        <div className="about__grid">
          <div className="about__text reveal reveal-delay-1">
            <p>
              I'm a project manager at Notino with 3+ years of experience
              delivering complex digital projects and driving AI adoption.
              I specialize in turning fragmented processes into scalable,
              data-driven systems — from enterprise Jira rollouts to automated
              pricing engines.
            </p>
            <p>
              Currently, I'm leading the centralization of work management
              across the company in Jira, managing a large-scale pricing
              and marketing automation initiative, and building an AI-powered
              assistant for the project management team.
            </p>
            <p>
              My experience spans tool administration (Targetprocess), process
              redesign, cross-functional coordination, and hands-on AI consulting.
              I bridge the gap between business strategy and technical execution —
              always focused on measurable outcomes.
            </p>
          </div>

          <div className="about__highlights">
            {highlights.map((h, i) => (
              <div
                key={h.title}
                className={`about__card about__card--${h.color} reveal reveal-delay-${i + 1}`}
                style={{ transform: `rotate(${rotations[i]})` }}
              >
                <div className="about__card-pin" />
                <span className="about__card-icon">{h.icon}</span>
                <div>
                  <h3 className="about__card-title">{h.title}</h3>
                  <p className="about__card-desc">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
