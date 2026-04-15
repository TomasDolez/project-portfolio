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

const projects: Project[] = [
  {
    id: 'PRJ-001',
    title: 'Targetprocess Administration',
    description: 'Administered Targetprocess — the company\'s central project management platform. Managed configuration, custom workflows, automations, and provided hands-on technical support to the PM team.',
    role: 'Tool Administrator & Technical Support',
    outcomes: ['Streamlined configuration for multiple teams', 'Day-to-day technical support for PM team', 'Maintained workflows and integrations'],
    status: 'Completed',
    tags: ['Targetprocess', 'Administration', 'Support'],
  },
  {
    id: 'PRJ-002',
    title: 'Work Structure Redesign',
    description: 'Led a cross-functional redesign of the work structure in Targetprocess. Analyzed pain points, defined a unified taxonomy, and implemented a new hierarchy that improved how teams organize, track, and report on work.',
    role: 'Project Lead',
    outcomes: ['Unified work structure across departments', 'Improved reporting accuracy and transparency', 'Reduced overhead in project setup and tracking'],
    status: 'Completed',
    tags: ['Process Design', 'Targetprocess', 'Cross-functional'],
  },
  {
    id: 'PRJ-003',
    title: 'Refund Process Automation',
    description: 'Automated the end-to-end refund workflow by mapping the existing process, identifying bottlenecks, and designing a rule-based solution. Coordinated across IT, finance, and support teams.',
    role: 'Project Lead',
    outcomes: ['Eliminated manual steps in refund processing', 'Reduced processing time significantly', 'Improved accuracy and audit traceability'],
    status: 'Completed',
    tags: ['Automation', 'IT Process', 'Optimization'],
  },
  {
    id: 'PRJ-004',
    title: 'PoC: New Work Management Tool',
    description: 'Owned the full lifecycle of evaluating a new work management tool — from requirements gathering and vendor shortlisting to running a structured PoC and delivering a recommendation to leadership.',
    role: 'Project Lead',
    outcomes: ['Defined evaluation criteria with stakeholders', 'Ran structured PoC with real workflows', 'Delivered recommendation report to leadership'],
    status: 'Completed',
    tags: ['PoC', 'Tool Evaluation', 'Strategy'],
  },
  {
    id: 'PRJ-005',
    title: 'MVP: Dynamic Banners',
    description: 'Managed the MVP delivery of a dynamic banners system for marketing automation. Coordinated between marketing, design, and engineering to ship personalized, rule-based banner generation.',
    role: 'Project Manager',
    outcomes: ['Delivered working MVP on schedule', 'Enabled rule-based personalized banners', 'Reduced manual effort in campaign setup'],
    status: 'Completed',
    tags: ['Marketing Automation', 'MVP', 'Cross-functional'],
  },
  {
    id: 'PRJ-006',
    title: 'Centralized Work Management in Jira',
    description: 'Building a unified management system in Jira to replace fragmented tools across departments. Covers project, activity, portfolio, and capacity management with BI-connected dashboards.',
    role: 'Project Lead',
    outcomes: ['Single source of truth for all projects', 'Real-time capacity dashboards', 'Strategy-to-task alignment across teams'],
    status: 'Ongoing',
    tags: ['Jira', 'Change Management', 'Enterprise'],
  },
  {
    id: 'PRJ-007',
    title: 'Pricing & Marketing Automation',
    description: 'Leading a strategic initiative to automate pricing, discount management, and campaign production at Notino. Includes dynamic pricing, competitor scoring, and promo platform stabilization.',
    role: 'Project Manager',
    outcomes: ['Automated margin protection for campaigns', 'Daily dynamic pricing recalculations', 'Competitor price scoring for 60%+ market'],
    status: 'Ongoing',
    tags: ['Automation', 'Pricing', 'E-commerce'],
  },
  {
    id: 'PRJ-008',
    title: 'AI Agent for PME',
    description: 'Designing and deploying an AI-powered assistant for the Project Management team to support daily tasks — status updates, meeting prep, reporting, and knowledge retrieval.',
    role: 'AI Consultant & PM',
    outcomes: ['Automated daily digest and status reporting', 'AI-assisted meeting preparation', 'Reduced time spent on repetitive PM tasks'],
    status: 'Ongoing',
    tags: ['AI/ML', 'Productivity', 'Internal Tools'],
  },
]

const rotations = ['-0.6deg', '0.5deg', '-0.4deg', '0.6deg', '-0.5deg', '0.4deg', '-0.5deg', '0.6deg']

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

        <div className="timeline">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`timeline__item timeline__item--${i % 2 === 0 ? 'left' : 'right'} reveal reveal-delay-${(i % 4) + 1}`}
            >
              {/* Timeline node */}
              <div className="timeline__node">
                <div className="timeline__dot" />
              </div>

              {/* Project card */}
              <article
                className="project-doc"
                style={{ '--rotate': rotations[i] } as React.CSSProperties}
              >
                <div className="project-doc__pin" />

                <div className="project-doc__file-header">
                  <span className="project-doc__file-id">{p.id}</span>
                  <span className={`project-doc__stamp project-doc__stamp--${p.status.toLowerCase()}`}>
                    {p.status === 'Ongoing' && <span className="project-doc__stamp-dot" />}
                    {p.status}
                  </span>
                </div>

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

                <div className="project-doc__fold" />
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
