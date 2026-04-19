import { groups, colorMap, levelDots } from '../data/skills'
import './Skills.css'

const rotations = ['-2deg', '1.5deg', '-1deg', '2deg', '-1.5deg', '0.8deg', '-0.5deg', '1.2deg']

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div className="reveal">
          <span className="section-label">Skills & Toolbox</span>
          <h2 className="section-title">What I work with</h2>
          <div className="skills__legend">
            <span className="skills__legend-item">
              <span className="skills__dots"><span className="skills__dot skills__dot--filled" /><span className="skills__dot skills__dot--filled" /><span className="skills__dot skills__dot--filled" /></span>
              Expert
            </span>
            <span className="skills__legend-item">
              <span className="skills__dots"><span className="skills__dot skills__dot--filled" /><span className="skills__dot skills__dot--filled" /><span className="skills__dot" /></span>
              Proficient
            </span>
          </div>
        </div>

        <div className="skills__board">
          {groups.map((g, gi) => (
            <div key={g.category} className={`skills__group reveal reveal-delay-${(gi % 4) + 1}`}>
              <h3 className="skills__group-title">{g.category}</h3>
              <div className="skills__notes">
                {g.items.map((item, ii) => {
                  const c = colorMap[item.color]
                  const filled = levelDots[item.level]
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
                      <span className="skills__dots">
                        {[1, 2, 3].map((d) => (
                          <span
                            key={d}
                            className={`skills__dot ${d <= filled ? 'skills__dot--filled' : ''}`}
                          />
                        ))}
                      </span>
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
