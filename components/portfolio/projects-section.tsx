import { Activity, ArrowUpRight, Building2, BrainCircuit, CalendarDays, UsersRound } from "lucide-react"

const projects = [
  {
    number: "01",
    name: "CrewConnect",
    subtitle: "HR & Employee Management System",
    icon: UsersRound,
    accent: "mint",
    description: [
      "Developed a full-stack HR and Employee Management System using Python, Django, MySQL, HTML, CSS, Bootstrap, and JavaScript, implementing role-based authentication with separate HR and employee dashboards, protected views, and login redirects.",
      "Built employee, department, and designation management with CRUD operations, relational database models, employee status tracking, secure employee onboarding using Django User accounts, token-based password setup links, and email delivery.",
      "Implemented leave and calendar management for Earned Leave and Sick Leave requests, HR approval/rejection workflows, and events including meetings, interviews, holidays, training, and other activities using Django ORM, migrations, decorators, URL routing, templates, and JSON responses.",
    ],
    tags: ["Python", "Django", "MySQL", "HTML", "CSS", "Bootstrap", "JavaScript"],
  },
  {
    number: "02",
    name: "Multiple Disease Prediction",
    subtitle: "Medical Machine Learning Web Application",
    icon: BrainCircuit,
    accent: "violet",
    description: [
      "Developed a responsive medical-domain web application using Python, Django, HTML, CSS, and JavaScript, integrating machine learning-based disease prediction workflows.",
      "Implemented scikit-learn workflows for data preprocessing, feature selection, model building, and evaluation, using a hybrid Random Forest + Gradient Boosting (RF+GB) model to predict Breast Cancer, Heart Disease, Diabetes, and Parkinson’s Disease.",
      "Used Pandas, Matplotlib, and Seaborn for data processing and analysis, and applied optimization techniques including Genetic Algorithm, Ant Colony Optimization, and Crow Search Optimization.",
    ],
    tags: ["Python", "Django", "scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
  },
]

const projectVisuals = [
  { icon: Building2, label: "People · Teams · Time off", lines: ["HR dashboard", "Employee directory", "Leave calendar"] },
  { icon: Activity, label: "Four conditions · One workflow", lines: ["Breast Cancer", "Heart Disease", "Diabetes", "Parkinson’s Disease"] },
]

export function ProjectsSection() {
  return (
    <section className="projects-section" id="projects" aria-labelledby="projects-title">
      <div className="section-shell">
        <div className="section-heading section-heading-row">
          <div>
            <p className="eyebrow">Selected work <span className="eyebrow-line" /></p>
            <h2 id="projects-title">Projects with<br /><span>purpose.</span></h2>
          </div>
          <p className="section-note">From people-first systems to healthcare-focused machine learning.</p>
        </div>
        <div className="project-list">
          {projects.map((project, index) => {
            const Icon = project.icon
            const visual = projectVisuals[index]
            const VisualIcon = visual.icon
            return (
              <article className={`project-card project-${project.accent}`} key={project.number}>
                <div className="project-topline"><span>PROJECT / {project.number}</span><span className="project-topline-mark"><Icon aria-hidden="true" /></span></div>
                <div className="project-layout">
                  <div className="project-copy">
                    <p className="project-subtitle">{project.subtitle}</p>
                    <h3>{project.name}<ArrowUpRight aria-hidden="true" /></h3>
                    <ul className="project-details">
                      {project.description.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                    <div className="project-tags" aria-label={`${project.name} technologies`}>
                      {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                  </div>
                  <div className="project-visual" aria-label={`${project.name} project overview`}>
                    <div className="visual-window-bar"><span /><span /><span /><small>{project.number}.0</small></div>
                    <div className="visual-content">
                      <div className="visual-heading"><VisualIcon aria-hidden="true" /><span>{visual.label}</span></div>
                      <div className="visual-lines">
                        {visual.lines.map((line, lineIndex) => (
                          <div className="visual-line" key={line}>
                            <span className="visual-line-icon">{lineIndex === 0 ? "↗" : "+"}</span>
                            <span>{line}</span>
                            <span className="visual-line-dots">•••</span>
                          </div>
                        ))}
                      </div>
                      <div className="visual-footer"><CalendarDays aria-hidden="true" /> Thoughtful tools for everyday work</div>
                    </div>
                    <span className="visual-stamp">{project.number}</span>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
