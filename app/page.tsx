'use client';

import { useEffect, useState } from 'react';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, BarChart3, BriefcaseBusiness,
  Check, ChevronUp, Download, ExternalLink, GraduationCap, Mail, MapPin,
  Menu, Phone, TrendingUp, Users, X,
} from 'lucide-react';

const projects = [
  { num: '01', year: '2026', category: 'OPERATIONS / ANALYTICS', title: 'Supply Chain Optimization', description: 'Investigated logistics bottlenecks for a local SME and developed Excel forecasting models to inform a cost-reduction strategy.', tags: ['Supply Chain', 'Excel Forecasting', 'SME Strategy'], type: 'supply' },
  { num: '02', year: '2025', category: 'FINANCE / STRATEGY', title: 'Corporate Finance Capstone', description: 'Partnered with a team of four to assess a publicly traded company’s financial health and present investment recommendations to a faculty panel.', tags: ['Financial Analysis', 'Valuation', 'Pitching'], type: 'finance' },
  { num: '03', year: '2024', category: 'MARKETING / GROWTH', title: 'Digital Marketing Campaign', description: 'Planned and delivered a simulated social media campaign for a campus event, increasing virtual engagement by 40%.', tags: ['Canva', 'Meta Business Suite', 'Campaign Strategy'], type: 'marketing' },
  { num: '04', year: '2024', category: 'PROCESS / OPERATIONS', title: 'Operations Management Simulation', description: 'Co-managed a virtual manufacturing plant, applying lean management principles to improve simulated production output and minimize waste.', tags: ['Lean Principles', 'Operations', 'Teamwork'], type: 'operations' },
];

const experiences = [
  { year: '2025', role: 'Vice President', org: 'UiTM Business Management Club', detail: 'Led a 20-member committee to organize a national business case competition and secured three corporate sponsorship partners.' },
  { year: '2024', role: 'Event Director', org: 'Entrepreneurship Week', detail: 'Directed a week-long campus bazaar featuring 30 student-run booths, managing logistics, vendor relations and daily operations.' },
  { year: '2024', role: 'Semi-finalist', org: 'National Business Plan Competition', detail: 'Co-developed a sustainable business model for a tech startup as part of a three-person team.' },
  { year: '2023', role: 'Volunteer', org: 'Financial Literacy Outreach', detail: 'Delivered introductory workshops on budgeting and saving for underprivileged high school students.' },
];

const skillGroups = [
  { label: 'Analysis & Finance', skills: ['Advanced Excel', 'Financial Modeling', 'Data Visualization', 'Tableau (Basic)', 'SQL Fundamentals'] },
  { label: 'Business & Operations', skills: ['Corporate Strategy', 'Project Scheduling', 'Stakeholder Communication', 'Agile Basics', 'Business Writing'] },
  { label: 'Digital & Collaboration', skills: ['PowerPoint', 'Google Workspace', 'Canva', 'Meta Business Suite', 'Microsoft Teams', 'Trello'] },
];

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return <div className="section-label"><span>{number}</span><span>{children}</span></div>;
}

function ProjectGraphic({ type }: { type: string }) {
  if (type === 'supply') return <div className="project-art supply-art" aria-hidden="true"><div className="art-grid" /><div className="supply-path"><span /><span /><span /><span /></div><div className="art-stamp">FLOW / 01</div></div>;
  if (type === 'finance') return <div className="project-art finance-art" aria-hidden="true"><div className="finance-columns"><i/><i/><i/><i/><i/><i/></div><div className="finance-line">↗</div><div className="art-stamp">GROWTH / 02</div></div>;
  if (type === 'marketing') return <div className="project-art marketing-art" aria-hidden="true"><div className="marketing-orbit"><div className="marketing-dot" /></div><div className="marketing-number">+40<span>%</span></div><div className="art-stamp">ENGAGEMENT / 03</div></div>;
  return <div className="project-art operations-art" aria-hidden="true"><div className="operation-ring ring-one"/><div className="operation-ring ring-two"/><div className="operation-center">LEAN</div><div className="art-stamp">EFFICIENCY / 04</div></div>;
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('john.elton@student.uitm.edu.my');
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = 'mailto:john.elton@student.uitm.edu.my';
    }
  };

  return <>
    <header className="site-header">
      <a href="#top" className="brand" aria-label="John Elton, back to top"><span className="brand-mark">JE<span>.</span></span><span className="brand-caption">JOHN ELTON<br/>BUSINESS PORTFOLIO</span></a>
      <nav className={menuOpen ? 'site-nav open' : 'site-nav'} aria-label="Main navigation">
        {[['About', '#about'], ['Projects', '#projects'], ['Experience', '#experience'], ['Skills', '#skills']].map(([name, href]) => <a href={href} key={href} onClick={() => setMenuOpen(false)}>{name}</a>)}
        <a className="mobile-contact" href="#contact" onClick={() => setMenuOpen(false)}>Let’s connect <ArrowUpRight size={15}/></a>
      </nav>
      <a href="#contact" className="nav-contact">LET’S CONNECT <ArrowUpRight size={15}/></a>
      <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24}/> : <Menu size={24}/>}</button>
    </header>

    <main id="top">
      <section className="hero shell">
        <div className="hero-left">
          <div className="eyebrow reveal"><span className="status-dot"/> AVAILABLE FOR INTERNSHIP · MAR–AUG 2027</div>
          <h1 className="hero-title reveal">Business thinking.<br/><span>Real-world</span><br/><em>impact.</em></h1>
          <p className="hero-description reveal">Hi, I’m <strong>John Elton</strong> — a Business Administration student turning complex challenges into practical strategies through analysis, creativity, and leadership.</p>
          <div className="hero-actions reveal"><a className="primary-button" href="#projects">Explore my work <ArrowUpRight size={18}/></a><a className="text-button" href="#about">More about me <ArrowDownRight size={18}/></a></div>
          <div className="hero-bottom reveal"><span>BASED IN SHAH ALAM, SELANGOR</span><span>SCROLL TO EXPLORE <span className="down-arrow">↓</span></span></div>
        </div>
        <div className="hero-right reveal">
          <div className="hero-visual"><div className="visual-noise"/><div className="visual-cross cross-a">+</div><div className="visual-cross cross-b">+</div><div className="visual-cross cross-c">+</div><div className="visual-circle circle-outer"/><div className="visual-circle circle-middle"/><div className="visual-circle circle-inner"/><div className="visual-diagonal"/><div className="hero-monogram">JE<span>.</span></div><div className="visual-top">BUSINESS / STRATEGY / OPERATIONS</div><div className="visual-bottom"><span>CREATIVE THINKER<br/>ANALYTICAL MIND</span><span>001 — 027</span></div></div>
          <div className="hero-stat"><span>3.65</span><span>CGPA<br/>UiTM SHAH ALAM</span></div>
        </div>
      </section>

      <section className="ticker" aria-label="Areas of interest"><div className="ticker-track">{Array.from({length: 2}).map((_,i) => <div className="ticker-set" key={i}>STRATEGY <span>✳</span> ANALYTICS <span>✳</span> OPERATIONS <span>✳</span> LEADERSHIP <span>✳</span> MARKETING <span>✳</span></div>)}</div></section>

      <section id="about" className="about-section shell section-pad"><SectionLabel number="01 /">THE INTRODUCTION</SectionLabel><div className="about-layout"><h2 className="section-heading reveal">Curious by nature.<br/><em>Driven by purpose.</em></h2><div className="about-copy reveal"><p>I’m a final-year <strong>Bachelor of Business Administration (Hons)</strong> student at Universiti Teknologi MARA, with a strong interest in business strategy, operations, and making decisions backed by data.</p><p>From analyzing supply chains to leading student events, I enjoy bringing people, processes, and ideas together to create meaningful results. I’m now looking to contribute that mindset to a dynamic corporate team.</p><div className="about-facts"><div><span>01</span><strong>Business Administration</strong><small>UiTM Shah Alam</small></div><div><span>02</span><strong>6-month internship</strong><small>1 Mar — 31 Aug 2027</small></div></div></div></div></section>

      <section className="education-strip shell reveal" aria-label="Education"><div className="education-icon"><GraduationCap size={28} strokeWidth={1.6}/></div><div className="education-main"><span>EDUCATION</span><strong>Bachelor of Business Administration (Hons)</strong><p>Universiti Teknologi MARA (UiTM) · Shah Alam</p></div><div className="education-meta"><strong>3.65 <span>/ 4.00</span></strong><small>CGPA · SEP 2023 — PRESENT</small></div></section>

      <section id="projects" className="projects-section shell section-pad"><div className="section-top"><div><SectionLabel number="02 /">SELECTED WORK</SectionLabel><h2 className="section-heading reveal">Ideas turned<br/><em>into action.</em></h2></div><p className="section-aside reveal">A selection of academic projects where I applied business frameworks to real and simulated challenges.</p></div><div className="project-grid">{projects.map(project => <article className="project-card reveal" key={project.num}><ProjectGraphic type={project.type}/><div className="project-content"><div className="project-meta"><span>{project.category}</span><span>{project.year}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="project-footer"><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><span className="project-index">{project.num} / 04</span></div></div></article>)}</div></section>

      <section className="impact-section"><div className="shell impact-inner"><div className="impact-intro reveal"><SectionLabel number="03 /">BEYOND THE CLASSROOM</SectionLabel><h2>Leadership is<br/><em>about doing.</em></h2><p>I believe great results come from taking ownership, listening well, and helping teams move forward.</p></div><div className="impact-stats reveal"><div><Users size={24}/><strong>20</strong><span>Committee members led</span></div><div><BriefcaseBusiness size={24}/><strong>30</strong><span>Student business booths</span></div><div><TrendingUp size={24}/><strong>3</strong><span>Corporate partners secured</span></div></div></div></section>

      <section id="experience" className="experience-section shell section-pad"><div className="section-top"><div><SectionLabel number="04 /">LEADERSHIP & INVOLVEMENT</SectionLabel><h2 className="section-heading reveal">Learning by<br/><em>leading.</em></h2></div><p className="section-aside reveal">Experiences that shaped my approach to collaboration, organization, and responsibility.</p></div><div className="experience-list">{experiences.map((item, i) => <article className="experience-item reveal" key={item.role}><span className="experience-year">{item.year}</span><div className="experience-body"><h3>{item.role}</h3><span>{item.org}</span><p>{item.detail}</p></div><span className="experience-number">0{i+1}</span></article>)}</div></section>

      <section id="skills" className="skills-section shell section-pad"><SectionLabel number="05 /">MY TOOLKIT</SectionLabel><div className="skills-layout"><div className="reveal"><h2 className="section-heading">A versatile<br/><em>skill set.</em></h2><p>Combining analytical thinking with people skills and digital tools to make progress happen.</p><div className="language-block"><span>LANGUAGES</span><p>Malay <b>Native</b></p><p>English <b>Professional</b></p><p>Mandarin <b>Limited working</b></p></div></div><div className="skill-groups reveal">{skillGroups.map((group, index) => <div className="skill-group" key={group.label}><div className="skill-group-heading"><span>0{index + 1}</span><h3>{group.label}</h3></div><div className="skill-pills">{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div></div>)}</div></div></section>

      <section id="contact" className="contact-section"><div className="shell contact-inner"><div className="reveal"><SectionLabel number="06 /">WHAT'S NEXT?</SectionLabel><h2>Let’s make<br/><em>things happen.</em></h2><p>Currently seeking a six-month business internship from <strong>1 March to 31 August 2027.</strong> I’d love to hear about opportunities to learn, collaborate, and contribute.</p><div className="contact-actions"><a href="mailto:john.elton@student.uitm.edu.my?subject=Internship%20Opportunity%20for%20John%20Elton" className="contact-primary">Get in touch <ArrowUpRight size={22}/></a><button onClick={copyEmail} className="copy-email">{copied ? <Check size={18}/> : <Mail size={18}/>} {copied ? 'Email copied' : 'Copy email address'}</button></div></div><div className="contact-panel reveal"><span>CONTACT DETAILS</span><a href="mailto:john.elton@student.uitm.edu.my"><Mail size={19}/> john.elton@student.uitm.edu.my <ArrowUpRight size={16}/></a><a href="tel:+60123456789"><Phone size={19}/> 0123456789 <ArrowUpRight size={16}/></a><div><MapPin size={19}/> 40150 Shah Alam, Selangor</div><div className="reference"><span>ACADEMIC REFERENCE</span><strong>Elton John</strong><p>Associate Professor · UiTM</p><a href="mailto:elton.john@uitm.edu.my">elton.john@uitm.edu.my <ExternalLink size={14}/></a><a href="tel:+60123456789">0123456789</a></div></div></div></section>
    </main>

    <footer className="footer shell"><div className="footer-brand">JE<span>.</span></div><p>© 2026 John Elton. Designed with intention.</p><a href="#top">BACK TO TOP <ChevronUp size={17}/></a></footer>
  </>;
}
