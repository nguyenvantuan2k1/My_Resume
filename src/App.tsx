import Lenis from "lenis";
import { ArrowUpRight, Download, Menu, Send, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Element as ScrollElement, Link as ScrollLink } from "react-scroll";
import {
  aboutParagraphs,
  contactLinks,
  experiences,
  heroStats,
  navItems,
  profile,
  projects,
  skillGroups,
  socialLinks,
} from "./portfolioData";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.075,
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const sectionNames = navItems.map((item) => getSectionName(item.href));
    const sections = sectionNames
      .map((name) => document.getElementById(name))
      .filter((section): section is HTMLElement => Boolean(section));

    const setContactWhenAtBottom = () => {
      const scrollBottom = window.innerHeight + window.scrollY;
      const pageBottom = document.documentElement.scrollHeight - 4;

      if (scrollBottom >= pageBottom) {
        setActiveSection("contact");
        return true;
      }

      return false;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (setContactWhenAtBottom()) {
          return;
        }

        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const nextSection = visibleEntries[0]?.target.id;

        if (nextSection) {
          setActiveSection(nextSection);
        }
      },
      {
        rootMargin: "-28% 0px -46% 0px",
        threshold: [0, 0.15, 0.35, 0.55, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));
    window.addEventListener("scroll", setContactWhenAtBottom, {
      passive: true,
    });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", setContactWhenAtBottom);
    };
  }, []);

  const closeMenu = () => setIsMenuOpen(false);
  const getSectionName = (href: string) => href.replace("#", "");

  return (
    <div className="site-shell">
      <header className="site-header">
        <ScrollLink
          className="brand"
          to="home"
          smooth
          duration={900}
          offset={-92}
          onClick={closeMenu}
        >
          <span className="brand-mark">TN</span>
          <span>{profile.name}</span>
        </ScrollLink>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav className={isMenuOpen ? "nav-links is-open" : "nav-links"}>
          {navItems.map((item) => (
            <ScrollLink
              className={
                activeSection === getSectionName(item.href) ? "is-active" : ""
              }
              key={item.href}
              to={getSectionName(item.href)}
              smooth
              duration={900}
              offset={-92}
              onClick={() => {
                setActiveSection(getSectionName(item.href));
                closeMenu();
              }}
            >
              {item.label}
            </ScrollLink>
          ))}
        </nav>
      </header>

      <main>
        <ScrollElement
          className="scroll-section hero-section"
          id="home"
          name="home"
        >
          <div className="hero-media" aria-hidden="true" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="section-kicker">{profile.location}</p>
            <h1>{profile.name}</h1>
            <p className="hero-role">{profile.role}</p>
            <p className="hero-summary">{profile.summary}</p>

            <div className="hero-actions">
              <a className="primary-button" href="#projects">
                View Work
                <ArrowUpRight size={18} />
              </a>
              <a
                className="ghost-button"
                href={profile.resumeUrl}
                download="NGUYENVANTUAN-DEV.pdf"
              >
                Resume
                <Download size={18} />
              </a>
            </div>

            <div className="hero-stats" aria-label="Portfolio highlights">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollElement>

        <ScrollElement
          className="scroll-section content-section split-section"
          id="about"
          name="about"
        >
          <div>
            <p className="section-kicker">About</p>
            <h2>Profile</h2>
          </div>
          <div className="about-copy">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </ScrollElement>

        <ScrollElement
          className="scroll-section content-section"
          id="skills"
          name="skills"
        >
          <div className="section-heading">
            <p className="section-kicker">Skills</p>
            <h2>Skills & technologies</h2>
            <p className="section-intro">
              Technologies I've been working with across my career.
            </p>
          </div>
          <div className="skill-grid">
            {skillGroups.map(({ title, icon: Icon, description, skills }) => (
              <article className="skill-card" key={title}>
                <div className="icon-box">
                  <Icon size={22} />
                </div>
                <h3>{title}</h3>
                <p className="skill-card-copy">{description}</p>
                <div className="skill-meter-list">
                  {skills.map(({ name, level, label }) => (
                    <div className="skill-meter" key={name}>
                      <div className="skill-meter-label">
                        <span>{name}</span>
                        <strong>{label}</strong>
                      </div>
                      <div
                        aria-hidden="true"
                        className="skill-meter-track"
                        role="presentation"
                      >
                        <span
                          className="skill-meter-fill"
                          style={{ width: `${level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </ScrollElement>

        <ScrollElement
          className="scroll-section content-section split-section"
          id="experience"
          name="experience"
        >
          <div className="section-heading sticky-heading">
            <p className="section-kicker">Experience</p>
            <h2>Recent work history</h2>
          </div>
          <div className="timeline">
            {experiences.map((item) => (
              <article
                className="timeline-item"
                key={`${item.company}-${item.role}`}
              >
                <div className="timeline-date">{item.period}</div>
                <div className="timeline-content">
                  <h3>{item.role}</h3>
                  <p className="company">{item.company}</p>
                  <p>{item.description}</p>
                  <ul>
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </ScrollElement>

        <ScrollElement
          className="scroll-section content-section"
          id="projects"
          name="projects"
        >
          <div className="section-heading">
            <p className="section-kicker">Projects</p>
            <h2>Project highlights</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <a href={project.href} aria-label={`Open ${project.title}`}>
                  <img src={project.image} alt="" loading="lazy" />
                  <div className="project-body">
                    <p>{project.category}</p>
                    <h3>
                      {project.title}
                      <ArrowUpRight size={18} />
                    </h3>
                    <div className="project-meta">
                      <span>{project.company}</span>
                      <span>{project.period}</span>
                    </div>
                    <div className="project-facts">
                      <span>Role: {project.role}</span>
                      <span>Team: {project.teamSize}</span>
                    </div>
                    <span>{project.description}</span>
                    <ul className="project-highlights">
                      {project.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                    <div className="tag-list">
                      {project.stack.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      {project.links.map((link) => (
                        <span key={link.href}>{link.label}</span>
                      ))}
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </ScrollElement>

        <ScrollElement
          className="scroll-section contact-section"
          id="contact"
          name="contact"
        >
          <div className="contact-panel">
            <div>
              <p className="section-kicker">Contact</p>
              <h2>Have a project in mind?</h2>
              <p>
                Send a short brief and I will get back with the next practical
                step.
              </p>
              <a className="primary-button" href={`mailto:${profile.email}`}>
                Start a conversation
                <Send size={18} />
              </a>
            </div>

            <div className="contact-list">
              {contactLinks.map(({ label, value, href, icon: Icon }) => (
                <a className="contact-link" href={href} key={label}>
                  <span className="icon-box">
                    <Icon size={20} />
                  </span>
                  <span>
                    <small>{label}</small>
                    {value}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </ScrollElement>
      </main>

      <footer className="site-footer">
        <span>(c) 2026 {profile.name}. Built with React and TypeScript.</span>
        <div>
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a href={href} aria-label={label} key={label}>
              <Icon size={18} />
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}

export default App;
