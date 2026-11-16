import { BriefcaseBusiness, HeartHandshake, Lightbulb, Users } from "lucide-react"

const strengths = [
  { icon: Lightbulb, title: "Problem solving", text: "Approach challenges with curiosity and a focus on practical solutions." },
  { icon: Users, title: "Teamwork", text: "Work collaboratively and communicate clearly with the people around me." },
  { icon: BriefcaseBusiness, title: "Project management", text: "Bring structure and follow-through to work from idea to delivery." },
  { icon: HeartHandshake, title: "Communication", text: "Build understanding through clear, thoughtful communication." },
]

export function AboutSection() {
  return (
    <section className="section-shell about-section" id="about" aria-labelledby="about-title">
      <div className="section-heading">
        <p className="eyebrow">A little about me</p>
        <h2 id="about-title">Curiosity into<br /><span>real-world solutions.</span></h2>
      </div>
      <div className="about-content">
        <p className="about-statement">
          Strong in problem solving, communication, teamwork, and project management.
        </p>
        <div className="strength-grid">
          {strengths.map(({ icon: Icon, title, text }, index) => (
            <article className="strength-card" key={title}>
              <span className="strength-number">0{index + 1}</span>
              <Icon aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
