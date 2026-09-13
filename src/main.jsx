import { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const projects = [
  { no: '01', title: 'Instagram /', sub: 'Frontend Clone', tag: 'SOCIAL UI', description: 'A focused recreation of Instagram’s familiar interface—built to practice responsive feeds, navigation patterns, and polished frontend detail.', stack: ['HTML', 'CSS', 'JavaScript'], tone: 'pink' },
  { no: '02', title: 'Facebook /', sub: 'Login Experience', tag: 'AUTH UI', description: 'A clean, responsive implementation of the Facebook login experience with careful attention to layout, hierarchy, and mobile behavior.', stack: ['HTML', 'CSS', 'JavaScript'], tone: 'blue' },
  { no: '03', title: 'Marketly /', sub: 'Commerce Platform', tag: 'FULL STACK', description: 'A Node.js and React e-commerce platform designed around two distinct journeys: a seller workspace and a customer shopping experience.', stack: ['React', 'Node.js', 'E-commerce'], tone: 'lime' },
];

const skills = [
  ['Frontend', 'HTML / CSS / JavaScript / React'],
  ['Backend', 'Python / Node.js'],
  ['Data', 'SQL / Database Fundamentals'],
  ['Workflow', 'Git / Responsive Design'],
];

function App() {
  const [loaded, setLoaded] = useState(false);
  const cursor = useRef(null);

  useEffect(() => {
    const done = setTimeout(() => setLoaded(true), 1100);
    const move = (e) => {
      if (cursor.current) cursor.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('pointermove', move);
    return () => { clearTimeout(done); window.removeEventListener('pointermove', move); };
  }, []);

  const tilt = (event) => {
    const el = event.currentTarget;
    const box = el.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width - .5;
    const y = (event.clientY - box.top) / box.height - .5;
    el.style.setProperty('--rx', `${-y * 4}deg`);
    el.style.setProperty('--ry', `${x * 4}deg`);
    el.style.setProperty('--px', `${(x + .5) * 100}%`);
    el.style.setProperty('--py', `${(y + .5) * 100}%`);
  };

  return <>
    <div className={`loader ${loaded ? 'loader--done' : ''}`}><span>MA</span><b>LOADING <i>100</i></b></div>
    <div className="cursor" ref={cursor}><i /></div>
    <div className="grain" />
    <header className="nav"><a className="monogram" href="#top">MA<span>.</span></a><nav><a href="#about">About</a><a href="#work">Work</a><a href="#skills">Skills</a></nav><a className="nav-contact" href="#contact">Let’s talk <b>↗</b></a></header>
    <main id="top">
      <section className="hero">
        <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
        <p className="eyebrow reveal">✦ &nbsp; Python full stack developer &nbsp;—&nbsp; India</p>
        <h1><span className="reveal">MOHAMMED</span><em className="reveal">ASHIQUE</em></h1>
        <div className="hero-bottom reveal"><p>Building clear, useful digital<br/>experiences from the first pixel<br/>to the last endpoint.</p><a className="round-link" href="#work"><span>Explore<br/>my work</span><b>↓</b></a></div>
        <div className="hero-index">01 <span>/ 05</span></div>
      </section>

      <section className="about section" id="about">
        <p className="section-label">( ABOUT ME )</p>
        <div className="about-grid">
          <div className="portrait-wrap"><div className="portrait-glow" /><img src="/ashique.jpeg" alt="Mohammed Ashique C" /><span className="portrait-caption">MOHAMMED ASHIQUE C · 24<br/><i>Developer · Learner · Builder</i></span></div>
          <div className="about-copy"><p className="kicker">CURRENTLY BUILDING<br/>WITH CURIOSITY.</p><h2>I turn <em>ideas</em><br/>into interfaces<br/>people enjoy using.</h2><p className="body-copy">I’m Mohammed Ashique C, a 24-year-old developer with a BCA background and Python full stack training. I enjoy taking products from a simple idea to a working, considered digital experience.</p><div className="about-meta"><span>EDUCATION <b>SSLC · PLUS TWO · BCA</b></span><span>FOCUS <b>PYTHON FULL STACK</b></span></div></div>
        </div>
      </section>

      <section className="work section" id="work"><div className="work-head"><p className="section-label">( SELECTED WORK )</p><p>Three projects. Each one a new lesson in<br/>crafting things for the web.</p></div><div className="projects">{projects.map((p) => <article className={`project ${p.tone}`} key={p.no} onPointerMove={tilt} onPointerLeave={e => {e.currentTarget.style.setProperty('--rx','0deg'); e.currentTarget.style.setProperty('--ry','0deg')}}><div className="project-visual"><div className="project-no">{p.no}</div><div className="project-mark">{p.no === '01' ? '◎' : p.no === '02' ? 'f' : 'M'}</div><span>{p.tag}</span></div><div className="project-info"><div><h3>{p.title}<br/><em>{p.sub}</em></h3><p>{p.description}</p></div><div className="project-bottom"><div>{p.stack.map(s => <small key={s}>{s}</small>)}</div><button aria-label={`View ${p.title}`}>↗</button></div></div></article>)}</div></section>

      <section className="skills section" id="skills"><p className="section-label">( CAPABILITIES )</p><div className="skills-title"><h2>A growing<br/><em>toolkit.</em></h2><p>Technologies I use to bring digital products to life—always learning, always improving.</p></div><div className="skill-list">{skills.map(([cat, list], i) => <div className="skill-row" key={cat}><span>0{i + 1}</span><h3>{cat}</h3><p>{list}</p><b>↗</b></div>)}</div></section>

      <section className="numbers"><div><strong>03</strong><span>Projects<br/>crafted</span></div><div><strong>06+</strong><span>Core<br/>technologies</span></div><div><strong>01</strong><span>Big goal:<br/>keep building</span></div></section>

      <section className="contact" id="contact"><div className="contact-star">✦</div><p className="section-label">( START A CONVERSATION )</p><h2>Let’s build something<br/><em>unforgettable.</em></h2><a className="email" href="mailto:[EMAIL]">[ EMAIL ] <b>↗</b></a><p className="contact-note">Have an idea, opportunity, or project in mind?<br/>I’d love to hear about it.</p></section>
    </main>
    <footer><a className="monogram" href="#top">MA<span>.</span></a><span>© 2026 MOHAMMED ASHIQUE C</span><span>DESIGNED & BUILT WITH INTENT</span><a href="#top">BACK TO TOP ↑</a></footer>
  </>;
}
createRoot(document.getElementById('root')).render(<App />);
