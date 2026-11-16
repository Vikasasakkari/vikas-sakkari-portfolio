import { Braces, Database, MessagesSquare, PanelsTopLeft } from "lucide-react"

const skillGroups = [
  { icon: Braces, label: "Languages", skills: ["HTML", "CSS", "JavaScript", "Python"] },
  { icon: PanelsTopLeft, label: "Frameworks & Tools", skills: ["Django", "Bootstrap"] },
  { icon: Database, label: "Database", skills: ["MySQL"] },
  { icon: MessagesSquare, label: "Soft Skills", skills: ["Communication", "Problem Solving"] },
]

export function SkillsSection() {
  return (
    <section className="section-shell skills-section" id="skills" aria-labelledby="skills-title">
      <div className="section-heading section-heading-row">
        <div>
          <p className="eyebrow">My toolkit</p>
          <h2 id="skills-title">Skills &amp; <span>strengths.</span></h2>
        </div>
        <p className="section-note">The tools and qualities I bring to building useful, full-stack products.</p>
      </div>
      <div className="skills-list">
        {skillGroups.map(({ icon: Icon, label, skills }, index) => (
          <article className="skill-row" key={label}>
            <div className="skill-index">0{index + 1}</div>
            <div className="skill-label"><Icon aria-hidden="true" /><h3>{label}</h3></div>
            <div className="skill-tags">
              {skills.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
