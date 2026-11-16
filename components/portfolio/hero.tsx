import { ArrowDown, ArrowUpRight, Code2, MapPin } from "lucide-react"

export function Hero() {
  return (
    <section className="hero section-shell" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="availability"><span className="availability-dot" /> Immediate joiner</div>
        <p className="eyebrow">Python Full Stack Developer <span className="eyebrow-line" /></p>
        <h1 id="hero-title">I build thoughtful<br /><span>web experiences.</span></h1>
        <p className="hero-summary">
          Python Full Stack Developer skilled in HTML5, CSS3, JavaScript, Python, MySQL and Django.
          Experienced in building web applications and user interfaces, including a medical-domain
          machine learning application for multiple disease prediction.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight aria-hidden="true" /></a>
          <a className="text-link" href="#contact">Get in touch <ArrowDown aria-hidden="true" /></a>
        </div>
        <div className="hero-location"><MapPin aria-hidden="true" /> Vijayapura, Karnataka, India</div>
      </div>
      <div className="hero-visual" role="group" aria-label="Profile photo and core technologies">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <picture className="hero-profile-photo-frame"><source srcSet="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vikasps%20%281%29-ddFvOp8BcgfPwCw8z5gp4g95C5eIw4.jpeg" type="image/jpeg" /><img className="hero-profile-photo" src="/vikas-profile-photo.jpeg" alt="Portrait of Vikas Sakkari" /></picture>
        <div className="orbit-label orbit-label-top"><Code2 aria-hidden="true" /> Python</div>
        <div className="orbit-label orbit-label-right">Django</div>
        <div className="orbit-label orbit-label-bottom">MySQL</div>
        <div className="orbit-label orbit-label-left">JavaScript</div>
        <span className="visual-index">01 / 02</span>
      </div>
      <a className="scroll-cue" href="#about"><span /> Scroll to explore</a>
    </section>
  )
}
