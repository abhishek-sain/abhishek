import Image from "next/image";
import type { ReactNode } from "react";
import {
  ArrowDownRight,
  CheckCircle2,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles
} from "lucide-react";
import {
  achievements,
  education,
  experiences,
  focusAreas,
  navigation,
  profile,
  projects,
  skills,
  techStack,
  testimonials
} from "@/lib/profile";

function SectionHeader({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <div className="section-header reveal">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {body ? <p>{body}</p> : null}
    </div>
  );
}

function ButtonLink({
  href,
  children,
  variant = "primary",
  download,
  external
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  download?: boolean;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      download={download}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`button-link ${variant}`}
    >
      {children}
    </a>
  );
}

export function PortfolioExperience() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <a href="#hero" className="brand-mark" aria-label="Abhishek Sain home">
          AS
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="main">
        <section id="hero" className="hero section">
          <div className="hero-bg" aria-hidden />
          <div className="container hero-layout">
            <div className="hero-copy reveal">
              <span className="status-pill">
                <span />
                {profile.availability}
              </span>
              <h1 className="hero-name">
                <span className="sr-only">
                  {profile.name} - {profile.role}
                </span>
                <Image
                  src="/images/abhishek-name.png"
                  alt=""
                  width={1200}
                  height={280}
                  priority
                  className="name-wordmark"
                />
              </h1>
              <p>{profile.tagline}</p>
              <div className="hero-actions">
                <ButtonLink href="#projects">
                  View Work <ArrowDownRight size={18} />
                </ButtonLink>
                <ButtonLink href={profile.resumePath} variant="secondary" download>
                  <Download size={18} /> Resume
                </ButtonLink>
              </div>
            </div>

            <div className="hero-card reveal delay-1">
              <Image
                src="/images/portfolio-hero.jpg"
                alt="Modern software developer workspace illustration"
                width={1672}
                height={941}
                priority
                sizes="(max-width: 900px) 100vw, 48vw"
              />
              <div className="signal-strip">
                <span>MERN</span>
                <span>AI</span>
                <span>Dashboards</span>
                <span>Training</span>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="container about-grid">
            <div>
              <SectionHeader
                eyebrow="About"
                title="A software developer building practical web, AI, and learning solutions."
                body={profile.summary}
              />
              <div className="focus-grid">
                {focusAreas.map((area) => {
                  const Icon = area.icon;
                  return (
                    <article key={area.title} className="focus-card reveal">
                      <Icon size={22} />
                      <h3>{area.title}</h3>
                      <p>{area.description}</p>
                    </article>
                  );
                })}
              </div>
            </div>
            <div className="stat-grid">
              {profile.stats.map((stat) => (
                <div className="stat-card reveal" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="container split-layout">
            <SectionHeader
              eyebrow="Skills"
              title="Front-end craft, full-stack systems, AI automation, and mentorship."
              body="These skills are carried over from the current portfolio and presented in a lighter, faster interface."
            />
            <div className="skill-cloud reveal">
              <div className="skill-core">
                <Sparkles size={24} />
                <span>Builder</span>
              </div>
              {skills.slice(0, 8).map((skill) => {
                const Icon = skill.icon;
                return (
                  <div className="skill-chip" key={skill.name}>
                    <Icon size={15} />
                    {skill.name}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="container skill-bars">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <article className="skill-row reveal" key={skill.name}>
                  <div className="skill-title">
                    <span className="skill-icon">
                      <Icon size={18} />
                    </span>
                    <div>
                      <strong>{skill.name}</strong>
                      <span>{skill.group}</span>
                    </div>
                  </div>
                  <div className="meter" aria-label={`${skill.name} ${skill.level}%`}>
                    <span style={{ width: `${skill.level}%` }} />
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="experience" className="section experience-section">
          <div className="container">
            <SectionHeader
              eyebrow="Experience"
              title="Development, training, hackathons, and AI."
              body="A lightweight timeline based on the work themes from the existing portfolio."
            />
            <div className="timeline">
              {experiences.map((item) => (
                <article className="timeline-item reveal" key={item.title}>
                  <span className="timeline-period">{item.period}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p className="company">{item.company}</p>
                    <p>{item.description}</p>
                    <ul>
                      {item.points.map((point) => (
                        <li key={point}>
                          <CheckCircle2 size={16} />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="container">
            <SectionHeader
              eyebrow="Projects"
              title="Featured work from the current portfolio."
              body="Live project links are included for the TIPS-G Alwar website and CodeWave e-learning platform."
            />
            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card reveal" key={project.title}>
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <strong>{project.impact}</strong>
                  <ul className="project-features">
                    {project.features.map((feature) => (
                      <li key={feature}>
                        <CheckCircle2 size={14} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="tag-list">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="project-link">
                    Visit project <ExternalLink size={16} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="achievements" className="section achievements-section">
          <div className="container split-layout">
            <SectionHeader
              eyebrow="Certifications"
              title="Hackathons, AI learning, digital products, and UI/UX growth."
              body="Certification content is based on the certificates showcased in the current portfolio."
            />
            <div className="achievement-stack">
              {achievements.map((achievement) => {
                const Icon = achievement.icon;
                return (
                  <article className="achievement-card reveal" key={achievement.title}>
                    <Icon size={22} />
                    <div>
                      <h3>{achievement.title}</h3>
                      <p>{achievement.detail}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="stack" className="section stack-section">
          <div className="container">
            <SectionHeader
              eyebrow="Tech Stack"
              title="Tools for responsive websites, MERN apps, AI workflows, and dashboards."
              body="A practical stack centered on web development, API integration, performance, collaboration, and teaching."
            />
            <div className="stack-grid">
              {techStack.map((group) => (
                <article className="stack-card reveal" key={group.title}>
                  <h3>{group.title}</h3>
                  <div>
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section testimonial-section">
          <div className="container">
            <SectionHeader eyebrow="Testimonials" title="What software development trainees said." />
            <div className="testimonial-grid">
              {testimonials.map((testimonial) => (
                <figure className="testimonial-card reveal" key={testimonial.person}>
                  <blockquote>“{testimonial.quote}”</blockquote>
                  <figcaption>
                    <strong>{testimonial.person}</strong>
                    <span>{testimonial.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section education-section">
          <div className="container education-grid">
            <SectionHeader eyebrow="Education" title="A practical learning path shaped by hands-on engineering." />
            {education.map((item) => (
              <article className="education-card reveal" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-grid">
            <div>
              <span className="eyebrow">Contact</span>
              <h2>Have a project in mind or want to collaborate?</h2>
              <p>Feel free to reach out for software development, training, mentorship, or AI-powered web solutions.</p>
              <div className="contact-meta">
                <a href={profile.mapUrl}>
                  <MapPin size={16} />
                  {profile.location}
                </a>
                <a href={profile.whatsappUrl}>
                  <Phone size={16} />
                  {profile.phone}
                </a>
                <a href={`mailto:${profile.email}`}>
                  <Mail size={16} />
                  {profile.email}
                </a>
              </div>
            </div>
            <div className="contact-actions">
              <ButtonLink href={`mailto:${profile.email}`}>
                <Mail size={18} /> Email
              </ButtonLink>
              <ButtonLink href={profile.whatsappUrl} variant="secondary" external>
                <Phone size={18} /> WhatsApp
              </ButtonLink>
              <ButtonLink href={profile.linkedinUrl} variant="secondary" external>
                <Linkedin size={18} /> LinkedIn
              </ButtonLink>
              <ButtonLink href={profile.resumePath} variant="secondary" download>
                <Download size={18} /> Resume
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>{profile.name}</span>
        <div>
          <a href={profile.linkedinUrl} aria-label="LinkedIn profile">
            <Linkedin size={18} />
          </a>
          <a href="https://github.com/abhishek-sain" aria-label="GitHub profile">
            <Github size={18} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email Abhishek">
            <Send size={18} />
          </a>
        </div>
      </footer>
    </div>
  );
}
