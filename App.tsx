
import React from 'react';
import Navbar from './components/Navbar';
import AIChat from './components/AIChat';
import { PERSONAL_INFO, SKILLS, PROJECTS, EXPERIENCES, EDUCATION } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-emerald-500/30">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-start">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-widest mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Building the next generation of AI Products
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.85] text-left">
            ENGINEERING <br />
            <span className="gradient-text">INTELLIGENCE.</span>
          </h1>
          <p className="text-zinc-400 max-w-xl text-lg md:text-xl leading-relaxed mb-10 text-left font-light">
            I'm <span className="text-white font-medium">{PERSONAL_INFO.name}</span>. {PERSONAL_INFO.tagline} Focused on <span className="text-white">Agentic Workflows</span> and <span className="text-white">Product-Led AI</span>.
          </p>
          <div className="flex flex-wrap gap-4 mb-20">
            <a href="#projects" className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-black rounded-lg transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)] flex items-center gap-2 group">
              SHIPPED WORK
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="px-8 py-4 glass hover:bg-white/10 rounded-lg font-bold transition-all border border-white/10 flex items-center gap-2">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              ({PERSONAL_INFO.stats.linkedin})
            </a>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full border-t border-white/5 pt-12 font-mono">
          {Object.entries(PERSONAL_INFO.stats).map(([key, val]) => (
            <div key={key} className="p-6 glass rounded-2xl border border-white/5 group hover:border-emerald-500/30 transition-all">
              <div className="text-2xl font-black text-white group-hover:text-emerald-400 transition-colors">{val}</div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">{key}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Case Studies */}
      <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col mb-16">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-2 italic">Product Case Studies</h2>
          <p className="text-zinc-500 font-mono text-sm tracking-tight">SaaS-scale systems and research implementations.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, i) => (
            <div key={i} className="group glass rounded-3xl overflow-hidden border border-white/5 hover:border-emerald-500/20 transition-all flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-zinc-900">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                {project.isAwardWinner && (
                  <div className="absolute top-4 left-4 bg-emerald-500 text-black px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest shadow-lg">
                    Hackathon Winner
                  </div>
                )}
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                <p className="text-zinc-400 text-sm mb-6 flex-1 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[9px] px-2 py-1 rounded bg-zinc-900 border border-white/5 text-zinc-500 font-bold uppercase tracking-tighter">{tag}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-emerald-400 font-black text-xs uppercase tracking-widest group-hover:translate-x-2 transition-all">
                  ARCHITECTURE DETAIL &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience / Impact Section */}
      <section id="experience" className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-black uppercase tracking-tighter mb-20 text-center">Career Journey</h2>
        <div className="space-y-20 border-l border-white/5 pl-8 md:pl-12 ml-4">
          {EXPERIENCES.map((exp, i) => (
            <div key={i} className="relative group">
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-4 h-4 rounded-full bg-zinc-950 border-2 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)] group-hover:scale-125 transition-transform"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-2">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">{exp.role}</h3>
                  <div className="text-emerald-500 font-black uppercase text-sm tracking-wider">{exp.company}</div>
                </div>
                <div className="text-zinc-500 font-mono text-sm">{exp.period}</div>
              </div>
              <ul className="space-y-4">
                {exp.achievements.map((item, idx) => (
                  <li key={idx} className="text-zinc-400 text-sm leading-relaxed flex items-start gap-4">
                    <span className="mt-2 w-1 h-1 rounded-full bg-emerald-500 shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Matrix */}
      <section id="skills" className="py-24 px-6 bg-zinc-950/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-16 italic">Technical Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {SKILLS.map((skill, i) => (
              <div key={i} className="p-6 border border-white/5 rounded-xl hover:bg-emerald-500/5 hover:border-emerald-500/30 transition-all group">
                <div className="text-white font-bold mb-1 group-hover:text-emerald-400 transition-colors">{skill.name}</div>
                <div className="text-[9px] text-zinc-600 uppercase tracking-widest font-black">{skill.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certs */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-12 italic">Academic Foundation</h2>
          <div className="space-y-8">
            {EDUCATION.map((edu, i) => (
              <div key={i} className="glass p-8 rounded-2xl border border-white/5">
                <h3 className="text-lg font-bold text-white mb-1">{edu.degree}</h3>
                <div className="text-emerald-500 text-sm font-black mb-3">{edu.institution}</div>
                <div className="text-zinc-500 text-xs mb-4 font-mono">{edu.period}</div>
                <p className="text-zinc-400 text-sm">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="glass p-10 rounded-[2.5rem] border border-white/10 bg-emerald-500/[0.02]">
            <h3 className="text-2xl font-black uppercase mb-6 tracking-tight">Achievements</h3>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li className="flex gap-4"><span className="text-emerald-500 font-bold">#1</span> 1st at UIForge & Crack the Code (VKR VBN Engineering)</li>
              <li className="flex gap-4"><span className="text-emerald-500 font-bold">Top 20</span> 3 National Hackathons (Scalar, SRM, HITAM)</li>
              <li className="flex gap-4"><span className="text-emerald-500 font-bold">5*</span> Hacker Rank: Python & SQL (Top 1% Global)</li>
              <li className="flex gap-4"><span className="text-emerald-500 font-bold">8.3k+</span> Community growth sharing applied AI insights</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="py-24 px-6 border-t border-white/5 text-center bg-zinc-950">
        <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase leading-none">
          READY TO <span className="text-emerald-500 italic text-shadow-glow">SHIP.</span>
        </h2>
        <p className="text-zinc-500 mb-12 max-w-lg mx-auto font-light leading-relaxed">
          Currently open to <span className="text-white">AI Engineer</span>, <span className="text-white">Data Scientist</span>, and <span className="text-white">Product-focused</span> roles in high-intensity teams.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <a href={`mailto:${PERSONAL_INFO.email}`} className="group px-8 py-4 bg-white text-black font-black rounded-lg hover:bg-emerald-500 transition-all uppercase tracking-widest text-xs shadow-lg flex items-center gap-3">
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            EMAIL
          </a>
          
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="group px-8 py-4 glass text-white font-black rounded-lg hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all uppercase tracking-widest text-xs border border-white/10 flex items-center gap-3">
            <svg className="w-5 h-5 fill-current group-hover:text-emerald-400 transition-colors" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            LINKEDIN
          </a>
          
          <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="group px-8 py-4 glass text-white font-black rounded-lg hover:bg-white/10 hover:border-white/30 transition-all uppercase tracking-widest text-xs border border-white/10 flex items-center gap-3">
            <svg className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.627-5.373-12-12-12z"/></svg>
            GITHUB
          </a>
        </div>
        
        <div className="mt-24 text-[10px] text-zinc-700 font-black uppercase tracking-[0.6em] select-none">
          © {new Date().getFullYear()} HITESH GOTTAPU // INFRASTRUCTURE & INTELLIGENCE
        </div>
      </footer>

      <AIChat />
    </div>
  );
};

export default App;
