import { ArrowUpRight } from "lucide-react"

const navigation = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
]

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Vikas Sakkari, back to top">
        <span className="wordmark-mark">VS</span>
        <span>Vikas Sakkari</span>
      </a>
      <nav className="primary-nav" aria-label="Main navigation">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>{item.label}</a>
        ))}
        <a className="nav-contact" href="#contact">
          Let&apos;s talk <ArrowUpRight aria-hidden="true" />
        </a>
      </nav>
    </header>
  )
}
