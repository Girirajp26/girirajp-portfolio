import Navbar from "@/components/Navbar";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <Navbar />
      <div className="max-w-6xl mx-auto">
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
    </main>
  );
}
