import { ArrowUp } from "lucide-react"
import { AboutSection } from "@/components/portfolio/about-section"
import { ContactSection, CredentialsSection } from "@/components/portfolio/credentials-section"
import { Hero } from "@/components/portfolio/hero"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { SkillsSection } from "@/components/portfolio/skills-section"
import { SiteHeader } from "@/components/portfolio/site-header"

export function PortfolioPage() {
  return (
    <main className="portfolio-page">
      <SiteHeader />
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <CredentialsSection />
      <ContactSection />
      <footer className="site-footer section-shell">
        <a className="wordmark" href="#top"><span className="wordmark-mark">VS</span><span>Vikas Sakkari</span></a>
        <p>Python Full Stack Developer <span>·</span> Vijayapura, India</p>
        <a className="back-to-top" href="#top">Back to top <ArrowUp aria-hidden="true" /></a>
      </footer>
    </main>
  )
}
