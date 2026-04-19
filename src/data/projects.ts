export interface Project {
  title: string
  description: string
  details?: string
  role: string
  outcomes: string[]
  status: 'Completed' | 'Ongoing'
  phase?: string
  tags: string[]
  id: string
  period: string
}

export const projects: Project[] = [
  {
    id: 'PRJ-001',
    title: 'Targetprocess Administration',
    description: 'Administered Targetprocess — the company\'s central project management platform. Managed configuration, custom workflows, automations, and provided hands-on technical support to the PM team.',
    details: 'Took full ownership of the platform used across all departments. Managed end-to-end configuration including custom workflows, entity types, views, and automations. Created onboarding documentation and trained new team members.',
    role: 'Tool Administrator & Technical Support',
    outcomes: ['Streamlined configuration for multiple teams', 'Day-to-day technical support for PM team', 'Maintained workflows and integrations'],
    status: 'Completed',
    tags: ['Targetprocess', 'Administration', 'Support'],
    period: '2023–2025',
  },
  {
    id: 'PRJ-002',
    title: 'Work Structure Redesign',
    description: 'Led a cross-functional redesign of the work structure in Targetprocess. Analyzed pain points, defined a unified taxonomy, and implemented a new hierarchy that improved how teams organize, track, and report on work.',
    details: 'Collaborated with stakeholders from multiple departments to map existing pain points and define a unified taxonomy of work items. Implemented a new hierarchical structure that brought consistency and clarity across the organization.',
    role: 'Project Lead',
    outcomes: ['Unified work structure across departments', 'Improved reporting accuracy and transparency', 'Reduced overhead in project setup and tracking'],
    status: 'Completed',
    tags: ['Process Design', 'Targetprocess', 'Cross-functional'],
    period: '2024',
  },
  {
    id: 'PRJ-003',
    title: 'Refund Process Automation',
    description: 'Automated the end-to-end refund workflow by mapping the existing process, identifying bottlenecks, and designing a rule-based solution. Coordinated across IT, finance, and support teams.',
    details: 'Mapped the entire manual refund process, identified error-prone handoffs and bottlenecks. Designed and coordinated a streamlined, rule-based automation with IT, finance, and customer support teams.',
    role: 'Project Lead',
    outcomes: ['Eliminated manual steps in refund processing', 'Reduced processing time significantly', 'Improved accuracy and audit traceability'],
    status: 'Completed',
    tags: ['Automation', 'IT Process', 'Optimization'],
    period: '2024',
  },
  {
    id: 'PRJ-004',
    title: 'PoC: New Work Management Tool',
    description: 'Owned the full lifecycle of evaluating a new work management tool — from requirements gathering and vendor shortlisting to running a structured PoC and delivering a recommendation to leadership.',
    details: 'Framed the business need, gathered requirements across teams, conducted market research and vendor shortlisting. Designed and ran a structured PoC with real-world workflows and synthesized findings into a recommendation report.',
    role: 'Project Lead',
    outcomes: ['Defined evaluation criteria with stakeholders', 'Ran structured PoC with real workflows', 'Delivered recommendation report to leadership'],
    status: 'Completed',
    tags: ['PoC', 'Tool Evaluation', 'Strategy'],
    period: '2024–2025',
  },
  {
    id: 'PRJ-005',
    title: 'MVP: Dynamic Banners',
    description: 'Managed the MVP delivery of a dynamic banners system for marketing automation. Coordinated between marketing, design, and engineering to ship personalized, rule-based banner generation.',
    details: 'Defined requirements and prioritized features with marketing, design, and engineering teams. Shipped an initial version enabling personalized, rule-based banner generation that reduced dependency on manual creative production.',
    role: 'Project Manager',
    outcomes: ['Delivered working MVP on schedule', 'Enabled rule-based personalized banners', 'Reduced manual effort in campaign setup'],
    status: 'Completed',
    tags: ['Marketing Automation', 'MVP', 'Cross-functional'],
    period: '2025',
  },
  {
    id: 'PRJ-006',
    title: 'Centralized Work Management in Jira',
    description: 'Building a unified management system in Jira to replace fragmented tools across departments. Covers project, activity, portfolio, and capacity management with BI-connected dashboards.',
    details: 'Establishing a single source of truth connecting strategic goals (OKRs/KPIs) to daily execution tasks. Includes standardized project workflows, capacity planning dashboards, automated reporting via BI, and a phased company-wide rollout with change management.',
    role: 'Project Lead',
    outcomes: ['Single source of truth for all projects', 'Real-time capacity dashboards', 'Strategy-to-task alignment across teams'],
    status: 'Ongoing',
    phase: 'Implementation',
    tags: ['Jira', 'Change Management', 'Enterprise'],
    period: '2025–present',
  },
  {
    id: 'PRJ-007',
    title: 'Pricing & Marketing Automation',
    description: 'Leading a strategic initiative to automate pricing, discount management, and campaign production at Notino. Includes dynamic pricing, competitor scoring, and promo platform stabilization.',
    details: 'Transitioning from manual, fragmented pricing to an automated system. Q2 deliverables include automated discount validation, competitor price scoring for 60%+ of the market, daily dynamic pricing recalculations, and progressive elimination of technical debt in the Promotions Platform.',
    role: 'Project Manager',
    outcomes: ['Automated margin protection for campaigns', 'Daily dynamic pricing recalculations', 'Competitor price scoring for 60%+ market'],
    status: 'Ongoing',
    phase: 'Build & Delivery',
    tags: ['Automation', 'Pricing', 'E-commerce'],
    period: '2026–present',
  },
  {
    id: 'PRJ-008',
    title: 'AI Agent for PME',
    description: 'Designing and deploying an AI-powered assistant for the Project Management team to support daily tasks — status updates, meeting prep, reporting, and knowledge retrieval.',
    details: 'Building an AI agent using Claude that automates daily digests, prepares meeting briefs from calendar and Jira data, generates status reports, and provides instant knowledge retrieval across project documentation.',
    role: 'AI Consultant & PM',
    outcomes: ['Automated daily digest and status reporting', 'AI-assisted meeting preparation', 'Reduced time spent on repetitive PM tasks'],
    status: 'Ongoing',
    phase: 'Discovery & PoC',
    tags: ['AI/ML', 'Productivity', 'Internal Tools'],
    period: '2026–present',
  },
]
