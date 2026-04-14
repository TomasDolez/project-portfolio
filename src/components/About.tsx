import './About.css'

const highlights = [
  {
    icon: '📋',
    title: 'Project Delivery',
    desc: 'End-to-end management of complex digital projects across cross-functional teams.',
    color: 'yellow' as const,
  },
  {
    icon: '🤖',
    title: 'AI Consulting',
    desc: 'Helping organizations identify and implement high-impact AI use cases.',
    color: 'blue' as const,
  },
  {
    icon: '🔄',
    title: 'Process Optimization',
    desc: 'Streamlining workflows with Agile methodologies and modern tooling.',
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
            {/* PLACEHOLDER: Replace with your real bio */}
            <p>
              I'm a project manager with 3+ years of experience delivering digital
              products and leading AI initiatives. I thrive at the intersection of
              technology and business — translating complex requirements into
              actionable plans and measurable outcomes.
            </p>
            <p>
              My background spans e-commerce, SaaS, and enterprise platforms. I've
              managed cross-functional teams of up to 20 people and delivered
              projects ranging from CRM implementations to AI-powered automation
              pipelines.
            </p>
            <p>
              When I'm not managing projects, I consult on AI adoption strategies —
              helping teams find the right use cases and navigate the hype with
              pragmatic, results-driven approaches.
            </p>
          </div>

          <div className="about__highlights">
            {highlights.map((h, i) => (
              <div
                key={h.title}
                className={`about__card about__card--${h.color} reveal reveal-delay-${i + 1}`}
                style={{ transform: `rotate(${rotations[i]})` }}
              >
                {/* Pin decoration */}
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
