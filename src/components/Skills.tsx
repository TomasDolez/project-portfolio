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

const groups: SkillGroup[] = [
  {
    category: 'Methodologies',
    items: [
      { name: 'Agile / Scrum', color: 'green' },
      { name: 'Kanban', color: 'blue' },
      { name: 'Waterfall', color: 'yellow' },
      { name: 'Hybrid', color: 'orange' },
      { name: 'Change Management', color: 'pink' },
      { name: 'Design Thinking', color: 'green' },
    ],
  },
  {
    category: 'AI & Automation',
    items: [
      { name: 'Claude / LLMs', color: 'pink' },
      { name: 'Prompt Engineering', color: 'blue' },
      { name: 'AI Agents', color: 'orange' },
      { name: 'Workflow Automation', color: 'yellow' },
      { name: 'Dynamic Pricing', color: 'green' },
      { name: 'Process Mining', color: 'blue' },
    ],
  },
  {
    category: 'Tools & Platforms',
    items: [
      { name: 'Jira', color: 'blue' },
      { name: 'Confluence', color: 'blue' },
      { name: 'Targetprocess', color: 'orange' },
      { name: 'MS Loop', color: 'pink' },
      { name: 'Power BI', color: 'yellow' },
      { name: 'Notion', color: 'green' },
    ],
  },
  {
    category: 'Communication & Ops',
    items: [
      { name: 'MS Teams', color: 'blue' },
      { name: 'SharePoint', color: 'green' },
      { name: 'Miro', color: 'yellow' },
      { name: 'Figma', color: 'orange' },
      { name: 'GitHub', color: 'pink' },
      { name: 'Slack', color: 'pink' },
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
