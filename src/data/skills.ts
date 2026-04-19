export type Level = 'expert' | 'proficient'
export type Color = 'yellow' | 'blue' | 'pink' | 'green' | 'orange'

export interface Skill {
  name: string
  color: Color
  level: Level
}

export interface SkillGroup {
  category: string
  items: Skill[]
}

export const colorMap: Record<Color, { bg: string; border: string }> = {
  yellow: { bg: 'var(--sticky-yellow-bg)', border: 'var(--sticky-yellow)' },
  blue: { bg: 'var(--sticky-blue-bg)', border: 'var(--sticky-blue)' },
  pink: { bg: 'var(--sticky-pink-bg)', border: 'var(--sticky-pink)' },
  green: { bg: 'var(--sticky-green-bg)', border: 'var(--sticky-green)' },
  orange: { bg: 'var(--sticky-orange-bg)', border: 'var(--sticky-orange)' },
}

export const levelDots: Record<Level, number> = { expert: 3, proficient: 2 }

export const groups: SkillGroup[] = [
  {
    category: 'Methodologies',
    items: [
      { name: 'Agile / Scrum', color: 'green', level: 'expert' },
      { name: 'Kanban', color: 'blue', level: 'expert' },
      { name: 'Hybrid', color: 'orange', level: 'expert' },
      { name: 'Waterfall', color: 'yellow', level: 'proficient' },
      { name: 'Change Management', color: 'pink', level: 'proficient' },
    ],
  },
  {
    category: 'AI & Automation',
    items: [
      { name: 'Claude / LLMs', color: 'pink', level: 'expert' },
      { name: 'Prompt Engineering', color: 'blue', level: 'expert' },
      { name: 'AI Agents', color: 'orange', level: 'proficient' },
      { name: 'Workflow Automation', color: 'yellow', level: 'proficient' },
    ],
  },
  {
    category: 'Tools & Platforms',
    items: [
      { name: 'Jira', color: 'blue', level: 'expert' },
      { name: 'Confluence', color: 'blue', level: 'expert' },
      { name: 'Targetprocess', color: 'orange', level: 'expert' },
      { name: 'MS Loop', color: 'pink', level: 'proficient' },
      { name: 'Notion', color: 'green', level: 'proficient' },
    ],
  },
  {
    category: 'Communication & Ops',
    items: [
      { name: 'MS Teams', color: 'blue', level: 'expert' },
      { name: 'SharePoint', color: 'green', level: 'proficient' },
      { name: 'Miro', color: 'yellow', level: 'proficient' },
      { name: 'Slack', color: 'pink', level: 'proficient' },
    ],
  },
]
