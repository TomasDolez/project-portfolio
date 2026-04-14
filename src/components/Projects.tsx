import './Projects.css'

interface Project {
  title: string
  description: string
  role: string
  outcomes: string[]
  status: 'Completed' | 'Ongoing'
  tags: string[]
  id: string
}

/* PLACEHOLDER: Replace these with your real projects */
const projects: Project[] = [
  {
    id: 'PRJ-001',
    title: 'E-commerce Platform Migration',
    description: 'Led the migration of a legacy e-commerce platform to a modern headless architecture, coordinating 3 development teams across 2 time zones.',
    role: 'Project Manager',
    outcomes: ['Delivered 2 weeks ahead of schedule', '40% improvement in page load times', 'Zero downtime during migration'],
    status: 'Completed',
    tags: ['E-commerce', 'Migration', 'Agile'],
  },
  {
    id: 'PRJ-002',
    title: 'AI Workflow Automation',
    description: 'Designed and implemented an AI-powered document processing pipeline that automated 70% of manual review tasks for a financial services client.',
    role: 'AI Consultant & PM',
    outcomes: ['70% reduction in manual processing', '$200K annual cost savings', 'ROI achieved within 4 months'],
    status: 'Completed',
    tags: ['AI/ML', 'Automation', 'FinTech'],
  },
  {
    id: 'PRJ-003',
    title: 'CRM Implementation',
    description: 'Managed the end-to-end implementation of Salesforce CRM for a mid-size SaaS company, including data migration, customization, and team training.',
    role: 'Project Manager',
    outcomes: ['Onboarded 150+ users', '35% increase in sales pipeline visibility', 'Completed within budget'],
    status: 'Completed',
    tags: ['CRM', 'Salesforce', 'Waterfall'],
  },
  {
    id: 'PRJ-004',
    title: 'AI Customer Service Chatbot',
    description: 'Leading the development of an LLM-powered customer service chatbot to handle Tier 1 support tickets, reducing response times and freeing up human agents.',
    role: 'AI Consultant & PM',
    outcomes: ['Targeting 50% ticket deflection', 'Phase 1 pilot with 3 enterprise clients', 'LLM fine-tuning in progress'],
    status: 'Ongoing',
    tags: ['AI/ML', 'NLP', 'Customer Support'],
  },
]

const rotations = ['-0.8deg', '0.6deg', '-0.4deg', '0.7deg']

export default function Projects() {
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

        <div className="projects__grid">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className={`project-doc reveal reveal-delay-${(i % 4) + 1}`}
              style={{ '--rotate': rotations[i] } as React.CSSProperties}
            >
              {/* Paper pin */}
              <div className="project-doc__pin" />

              {/* Document header — like a file header */}
              <div className="project-doc__file-header">
                <span className="project-doc__file-id">{p.id}</span>
                <span className={`project-doc__stamp project-doc__stamp--${p.status.toLowerCase()}`}>
                  {p.status === 'Ongoing' && <span className="project-doc__stamp-dot" />}
                  {p.status}
                </span>
              </div>

              {/* Ruled lines decoration */}
              <div className="project-doc__ruled" aria-hidden="true">
                <span /><span /><span />
              </div>

              <h3 className="project-doc__title">{p.title}</h3>
              <p className="project-doc__role">{p.role}</p>
              <p className="project-doc__desc">{p.description}</p>

              <div className="project-doc__tags">
                {p.tags.map((t) => (
                  <span key={t} className="project-doc__tag">{t}</span>
                ))}
              </div>

              <ul className="project-doc__outcomes">
                <li className="project-doc__outcomes-header">Key Outcomes</li>
                {p.outcomes.map((o) => (
                  <li key={o}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 7l3 3 5-5" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {o}
                  </li>
                ))}
              </ul>

              {/* Paper fold corner */}
              <div className="project-doc__fold" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
