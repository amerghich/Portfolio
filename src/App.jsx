import DATA from "./dataFolder/portfolioData.js";
import { CodeXml  } from "lucide-react";

function Pill({ text }) {
  return <span className="pill">{text}</span>;
}

function Section({ title, children }) {
  return (
    <section className="section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="brand">
          <div className="avatar">
            <CodeXml  size={18} strokeWidth={2} />
          </div>
          <div>
            <h1>{DATA.name}</h1>
            <p className="subtitle">
              {DATA.title} • {DATA.location}
            </p>
          </div>
        </div>

        <div className="actions">
          <a className="btn" href={`mailto:${DATA.email}`}>Email</a>
          <a className="btn" href={DATA.links.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="btn" href={DATA.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="btn" href="/AnasMerghich_upENG_Resume_.pdf" 
          download>Resume</a>
        </div>
      </header>

      <main className="main">
        <Section title="About">
          <div className="card">
            <ul className="aboutList">
              {DATA.about.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
        </Section>

        <Section title="Skills">
          <div className="card">
            <div className="pills">
              {DATA.skills.map((s) => (
                <Pill key={s} text={s} />
              ))}
            </div>
          </div>
        </Section>

        <Section title="Projects">
          <div className="grid">
            {DATA.projects.map((p) => (
              <div className="card" key={p.name}>
                <div className="cardTop">
                  <h3>{p.name}</h3>
                  <div className="cardLinks">
                    {p.repo ? (
                      <a href={p.repo} target="_blank" rel="noreferrer">Repo</a>
                    ) : null}
                    {p.demo ? (
                      <a href={p.demo} target="_blank" rel="noreferrer">Demo</a>
                    ) : null}
                  </div>
                </div>
                <ul className="projectList">
                  {p.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>       
                <div className="pills">
                  {p.tech.map((t) => (
                    <Pill key={t} text={t} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Contact">
          <div className="card">
            <p className="p">
              Phone number:{" "} 
              <a href={`tel:${DATA.phone_number}`}>
                +1 647-526-6322
              </a>
            </p>
            <p className="p">
              Email: <a href={`mailto:${DATA.email}`}>{DATA.email}</a>
            </p>
            <p className="p">
              LinkedIn:{" "}
              <a href={DATA.links.linkedin} target="_blank" rel="noreferrer">
                {DATA.links.linkedin}
              </a>
            </p>
          </div>
        </Section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} {DATA.name}</span>
        <span className="muted">Built with Vite + React</span>
      </footer>
    </div>
  );
}











