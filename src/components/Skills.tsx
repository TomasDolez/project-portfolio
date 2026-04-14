import './Skills.css'

interface Skill {
  name: string
  color: 'yellow' | 'blue' | 'pink' | 'green' | 'orange'
}

interface SkillGroup {
  category: string
  items: Skill[]
}

const colorMap = {
  yellow: { bg: 'var(--sticky-yellow-bg)', border: 'var(--sticky-yellow)' },
  blue: { bg: 'var(--sticky-blue-bg)', border: 'var(--sticky-blue)' },
  pink: { bg: 'var(--sticky-pink-bg)', border: 'var(--sticky-pink)' },
  green: { bg: 'var(--sticky-green-bg)', border: 'var(--sticky-green)' },
  orange: { bg: 'var(--sticky-orange-bg)', border: 'var(--sticky-orange)' },
}

/* PLACEHOLDER: Adjust skills to match your actual expertise */
const groups: SkillGroup[] = [
  {
    category: 'Methodologies',
    items: [
      { name: 'Agile / Scrum', color: 'green' },
      { name: 'Kanban', color: 'blue' },
      { name: 'Waterfall', color: 'yellow' },
      { name: 'Hybrid', color: 'orange' },
      { name: 'SAFe', color: 'pink' },
      { name: 'Design Thinking', color: 'green' },
    ],
  },
  {
    category: 'AI & Data',
    items: [
      { name: 'LLM Integration', color: 'pink' },
      { name: 'Prompt Engineering', color: 'blue' },
      { name: 'AI Strategy', color: 'orange' },
      { name: 'Data Pipelines', color: 'yellow' },
      { name: 'ML Ops Basics', color: 'green' },
      { name: 'Process Mining', color: 'blue' },
    ],
  },
  {
    category: 'Project Management',
    items: [
      { name: 'Jira', color: 'blue' },
      { name: 'Confluence', color: 'blue' },
      { name: 'Asana', color: 'orange' },
      { name: 'Monday.com', color: 'pink' },
      { name: 'MS Project', color: 'green' },
      { name: 'Notion', color: 'yellow' },
    ],
  },
  {
    category: 'Communication & Ops',
    items: [
      { name: 'Slack', color: 'pink' },
      { name: 'Teams', color: 'blue' },
      { name: 'Miro', color: 'yellow' },
      { name: 'Figma', color: 'orange' },
      { name: 'GitHub', color: 'green' },
      { name: 'Power BI', color: 'yellow' },
    ],
  },
]

const rotations = ['-2deg', '1.5deg', '-1deg', '2deg', '-1.5deg', '0.8deg', '-0.5deg', '1.2deg']

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div className="reveal">
          <span className="section-label">Skills & Toolbox</span>
          <h2 className="section-title">What I work with</h2>
        </div>

        <div className="skills__board">
          {groups.map((g, gi) => (
            <div key={g.category} className={`skills__group reveal reveal-delay-${(gi % 4) + 1}`}>
              <h3 className="skills__group-title">{g.category}</h3>
              <div className="skills__notes">
                {g.items.map((item, ii) => {
                  const c = colorMap[item.color]
                  return (
                    <div
                      key={item.name}
                      className="skills__note"
                      style={{
                        background: c.bg,
                        borderLeft: `3px solid ${c.border}`,
                        transform: `rotate(${rotations[(gi * 3 + ii) % rotations.length]})`,
                      }}
                    >
                      <span className="skills__note-text">{item.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
