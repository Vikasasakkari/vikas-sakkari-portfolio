import { ArrowUpRight, Award, GraduationCap } from "lucide-react"

const education = [
  {
    school: "Dr.P.G.Halakatti College of Engineering",
    location: "Vijayapura, India",
    credential: "B.Tech, CSE",
    result: "GPA: 7.3",
    date: "Dec 2021 - Aug 2025",
  },
  {
    school: "Oxford PU Science College",
    location: "Nagarabetta, Muddebihala Tq, Vijayapura",
    credential: "Pre-University",
    result: "Percentage: 72%",
  },
  {
    school: "Oxford English Medium High School",
    location: "Nagarabetta, Vijayapura",
    credential: "High School",
    result: "Percentage: 79.04%",
  },
]

const certifications = [
  "Full Stack Java with Web Development Internship. (Certificate)",
  "Frontend Developer, ACE web development academy.",
]

export function CredentialsSection() {
  return (
    <section className="section-shell credentials-section" id="education" aria-labelledby="education-title">
      <div className="section-heading">
        <p className="eyebrow">The foundation</p>
        <h2 id="education-title">Education &amp; <span>certifications.</span></h2>
      </div>
      <div className="credentials-grid">
        <div className="education-list">
          {education.map((item, index) => (
            <article className="education-item" key={item.school}>
              <div className="education-icon"><GraduationCap aria-hidden="true" /></div>
              <div className="education-content">
                <div className="education-meta"><span>0{index + 1} / EDUCATION</span>{item.date && <span>{item.date}</span>}</div>
                <h3>{item.school}</h3>
                <p>{item.location}</p>
                <div className="education-result"><span>{item.credential}</span><strong>{item.result}</strong></div>
              </div>
            </article>
          ))}
        </div>
        <aside className="certifications-card" aria-labelledby="certifications-title">
          <div className="certifications-heading"><Award aria-hidden="true" /><span>CONTINUED LEARNING</span></div>
          <h3 id="certifications-title">Certifications</h3>
          <ol>
            {certifications.map((certification, index) => (
              <li key={certification}><span>0{index + 1}</span><p>{certification}</p><ArrowUpRight aria-hidden="true" /></li>
            ))}
          </ol>
        </aside>
      </div>
    </section>
  )
}

export function ContactSection() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="section-shell contact-inner">
        <div>
          <p className="eyebrow">Have a project in mind?</p>
          <h2 id="contact-title">Let&apos;s make<br /><span>something useful.</span></h2>
          <p className="contact-location">Vijayapura, Karnataka, India</p>
        </div>
        <div className="contact-details">
          <a className="contact-link" href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=sakkarivikas80%40gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Compose an email to sakkarivikas80@gmail.com in Gmail, opens in a new tab"><span>Email</span><strong>sakkarivikas80@gmail.com</strong><ArrowUpRight aria-hidden="true" /></a>
          <a className="contact-link" href="tel:7204016428"><span>Phone</span><strong>7204016428</strong><ArrowUpRight aria-hidden="true" /></a>
          <div className="profile-labels" aria-label="Profiles listed in resume"><a href="https://www.linkedin.com/in/vikas-sakkari-480943313" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile for Vikas Sakkari, opens in a new tab">LinkedIn<ArrowUpRight aria-hidden="true" /></a><a href="/vikas-sakkari-resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Open Vikas Sakkari's CV PDF in a new tab">Download CV<ArrowUpRight aria-hidden="true" /></a><a href="https://github.com/Vikasasakkari" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile for Vikas Sakkari, opens in a new tab">GitHub<ArrowUpRight aria-hidden="true" /></a></div>
        </div>
      </div>
    </section>
  )
}
