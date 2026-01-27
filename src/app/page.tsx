'use client';
import { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar";

export default function HomePage() {
  const [currentSection, setCurrentSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  const showSection = (section: string) => {
    setCurrentSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen relative">
      <Navbar onNavigate={showSection} />
      
      {/* Hero Section */}
      {currentSection === 'home' && (
        <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-950/95 z-0" />
          <div className="absolute inset-0 bg-cover bg-center opacity-30 z-0" style={{backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070')", filter: 'blur(2px)'}} />
          
          <div className="relative z-10 max-w-6xl w-full">
            <div className="border-2 border-slate-700 bg-slate-900/40 backdrop-blur-sm rounded-lg p-12 mb-16 mx-auto max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-8 inline-block border-b-4 border-white pb-3">
                Hi, my name is Giriraj Patel
              </h1>
              <p className="text-sm md:text-base text-slate-200 tracking-widest font-light mt-8">
                WELCOME! I&apos;M GLAD YOU&apos;RE HERE, CHECK OUT SOME OF MY PROJECTS OR LEARN A LITTLE MORE ABOUT ME.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-4">
              {[
                { section: 'about', title: 'About me', subtitle: 'LEARN MORE ABOUT WHO I AM', gradient: 'from-cyan-400/80 to-teal-600/80', bgImage: '/images/your-photo.jpg' },
                { section: 'experience', title: 'Experience', subtitle: 'MY PROFESSIONAL JOURNEY', gradient: 'from-purple-400/80 to-indigo-600/80' },
                { section: 'projects', title: 'Projects', subtitle: 'CHECK OUT SOME OF MY WORK', gradient: 'from-slate-500/80 to-blue-900/80' },
              ].map((card) => (
                <div key={card.section} onClick={() => showSection(card.section)}
                     className="relative h-96 rounded-2xl overflow-hidden cursor-pointer group border-4 border-black shadow-2xl transition-transform duration-300 hover:scale-105">
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} group-hover:from-${card.gradient.split(' ')[0].replace('/80', '/90')} group-hover:to-${card.gradient.split(' ')[1].replace('/80', '/90')} transition-all duration-300`} />
                  {card.bgImage && (
                    <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{backgroundImage: `url('${card.bgImage}')`}} />
                  )}
                  {!card.bgImage && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                      <div className="w-64 h-64 rounded-full border-8 border-white"></div>
                    </div>
                  )}
                  <div className="relative z-10 h-full flex flex-col items-start justify-end p-8 text-left">
                    <h3 className="text-3xl font-bold text-white mb-2 border-b-4 border-white pb-2 inline-block">{card.title}</h3>
                    <p className="text-sm text-white tracking-widest font-light mt-4">{card.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* About Me Section */}
      {currentSection === 'about' && (
        <section className="w-full min-h-screen flex flex-col py-20 px-6">
          <div className="w-full max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-16">About Me</h1>
            
            <div className="flex flex-col md:flex-row items-start gap-12 mb-20">
              <div className="w-full md:w-1/3 flex-shrink-0">
                <img src="/images/your-photo.jpg" alt="Giriraj Patel" className="w-full max-w-sm rounded-2xl shadow-2xl" />
              </div>
              
              <div className="w-full md:w-2/3 space-y-6">
                <h2 className="text-3xl font-bold text-white">Hello, I&apos;m Giriraj</h2>
                
                <p className="text-base text-slate-300 leading-relaxed">
                  Hi, I&apos;m Giriraj Patel and I am a student at Virginia Tech studying Computer Science and Economics. I chose this field out of a deep passion for problem-solving and a desire to build software that addresses real-world challenges.
                </p>
                
                <p className="text-base text-slate-300 leading-relaxed">
                  For the past years, I&apos;ve had the privilege of interning at various organizations including Legal Chain, where I was trusted by the Founder & CEO to deliver accurate, timely, and well-considered work under pressure. I am a proactive learner who quickly adapts to new challenges, consistently seeking to improve the quality of work across my team.
                </p>
                
                <p className="text-base text-slate-300 leading-relaxed">
                  At Virginia Tech, I&apos;m deeply involved in community leadership, currently serving as President of the Society of Indian Americans, where I lead a 400+ member organization. I thrive on the logistics of planning and executing large-scale events that celebrate and strengthen the brown community.
                </p>
                
                <p className="text-base text-slate-300 leading-relaxed">
                  I am currently working toward my Bachelor&apos;s degree, where I continue to grow my technical and business skills through research, projects and experiences. I believe technology and business together will continue to shape the world, and I aim to make a meaningful impact as a results-driven professional.
                </p>
              </div>
            </div>
            
            <div className="mt-32">
              <h2 className="text-3xl font-bold mb-12 text-white">Beyond Coding</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Wellness</h3>
                  <p className="text-slate-300 leading-relaxed">
                    I am passionate about staying active through regular fitness training. For me, working out is about more than health—it&apos;s about the discipline and focus required to maintain peak performance in my tech career.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Community</h3>
                  <p className="text-slate-300 leading-relaxed">
                    As President of the Society of Indian Americans, I lead a 400+ member organization. I thrive on the logistics of planning and executing large-scale events that celebrate and strengthen my brown community.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Exploration</h3>
                  <p className="text-slate-300 leading-relaxed">
                    When I&apos;m not coding, you&apos;ll find me behind the wheel enjoying a long drive or lost in a good book. I value the perspective gained from both quiet study and the freedom of the open road.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Experience Section */}
      {currentSection === 'experience' && (
        <section className="w-full min-h-screen flex flex-col py-20 px-6">
          <div className="w-full max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-16">Experience & Education</h1>
            
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-white mb-12">Professional Experience</h2>
              
              <div className="space-y-12">
                <div className="border-l-4 border-indigo-500 pl-8">
                  <p className="text-indigo-400 font-semibold mb-2">June 2024 - August 2024</p>
                  <h3 className="text-2xl font-bold text-white mb-2">Legal Chain</h3>
                  <p className="text-lg text-slate-300 mb-4">Software Engineering Intern</p>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span>Delivered accurate, timely, and well-considered work under pressure, earning trust from Founder & CEO</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span>Developed full-stack features using modern technologies to support legal document automation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span>Quickly adapted to new challenges and continuously improved code quality across the team</span>
                    </li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-indigo-500 pl-8">
                  <p className="text-indigo-400 font-semibold mb-2">January 2024 - Present</p>
                  <h3 className="text-2xl font-bold text-white mb-2">Virginia Tech</h3>
                  <p className="text-lg text-slate-300 mb-4">Computer Science Student & Researcher</p>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span>Maintaining a strong GPA while pursuing coursework in data structures, algorithms, and software engineering</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span>Leading the Society of Indian Americans as President, managing 400+ members and large-scale events</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span>Developing problem-solving skills through challenging academic projects and research initiatives</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-white mb-12">Education</h2>
              
              <div className="space-y-8">
                <div className="border-l-4 border-indigo-500 pl-8">
                  <p className="text-indigo-400 font-semibold mb-2">August 2023 - May 2027</p>
                  <h3 className="text-2xl font-bold text-white mb-2">Virginia Tech</h3>
                  <p className="text-lg text-slate-300 mb-4">Bachelor of Science in Computer Science</p>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span>Pursuing dual focus in Computer Science and Economics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span>Relevant Coursework: Data Structures, Algorithms, Software Engineering, Discrete Math, Linear Algebra</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span>Active in community leadership and student organizations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-white mb-12">Skills</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Programming Languages</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Python</li>
                    <li>• JavaScript</li>
                    <li>• Java</li>
                    <li>• C++</li>
                    <li>• SQL</li>
                    <li>• HTML/CSS</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Frameworks & Tools</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li>• React</li>
                    <li>• Node.js</li>
                    <li>• Git</li>
                    <li>• Docker</li>
                    <li>• REST APIs</li>
                    <li>• Database Design</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Projects Section */}
      {currentSection === 'projects' && (
        <section className="w-full max-w-6xl px-6 py-20 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Projects</h2>
          <p className="text-center text-slate-400 mb-12">CHECK OUT SOME OF MY WORK</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-lg hover:border-indigo-500 transition duration-300">
              <h3 className="text-xl font-bold text-white mb-4">Project Name</h3>
              <p className="text-slate-300 mb-4">Project description and technologies used...</p>
              <a href="#" className="text-indigo-400 hover:text-indigo-300">View Project →</a>
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      {currentSection === 'contact' && (
        <section className="w-full max-w-6xl px-6 py-20 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Get in touch</h2>
          
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">NAME</label>
                <input type="text" className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg focus:border-indigo-500 focus:outline-none" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">EMAIL</label>
                <input type="email" className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg focus:border-indigo-500 focus:outline-none" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">MESSAGE</label>
                <textarea rows={6} className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg focus:border-indigo-500 focus:outline-none"></textarea>
              </div>
              
              <div className="flex gap-4">
                <button type="submit" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium transition duration-300">SEND MESSAGE</button>
                <button type="reset" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg font-medium transition duration-300">CLEAR</button>
              </div>
            </form>
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-xl font-bold mb-4">Email</h3>
            <p className="text-indigo-400 mb-8">your.email@vt.edu</p>
            
            <div className="flex justify-center gap-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="w-full border-t border-slate-800 py-8 text-center text-slate-400">
        <p>© Giriraj Patel 2026</p>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-indigo-600 hover:bg-indigo-700 flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </main>
  );
}
