import Navbar from "@/components/Navbar";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <Navbar />
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-16">Experience & Education</h1>
        
        {/* Education Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12">Education</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-indigo-500 pl-8">
              <p className="text-indigo-400 font-semibold mb-2">Expected Graduation, May 2027</p>
              <h3 className="text-2xl font-bold text-white mb-2">Virginia Tech</h3>
              <p className="text-lg text-slate-300 mb-2">B.S. in Computer Science — Blacksburg, Virginia</p>
              <p className="text-slate-400 mb-4">Concentrations: Economics and Mathematics | GPA: 3.52/4.00</p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Related Coursework: Data Structures & Algorithms, Computer Organization, Combinatorics, Object-Oriented Programming, Statistics & Applications, Economics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Professional Experience Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12">Professional Experience</h2>
          <div className="space-y-12">
            {/* Legal Chain */}
            <div className="border-l-4 border-indigo-500 pl-8">
              <p className="text-indigo-400 font-semibold mb-2">June 2025 – Present</p>
              <h3 className="text-2xl font-bold text-white mb-2">Legal Chain</h3>
              <p className="text-lg text-slate-300 mb-4">Software Developer — LegalTech Startup (Remote)</p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Engineered scalable features by partnering with startup leadership to enhance AI-driven legal document workflows</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Integrated dynamic UI pages for legal services with API endpoints and authentication flows</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Worked closely with backend engineers to test and connect frontend components to Supabase, Prisma, and REST APIs for secure document handling</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Streamlined deployment configuration, accelerating beta launch readiness by 40%</span>
                </li>
              </ul>
            </div>

            {/* Virginia Tech SECL */}
            <div className="border-l-4 border-indigo-500 pl-8">
              <p className="text-indigo-400 font-semibold mb-2">April 2025 – Present</p>
              <h3 className="text-2xl font-bold text-white mb-2">Virginia Tech – SECL</h3>
              <p className="text-lg text-slate-300 mb-4">Organization Consultant — Blacksburg, Virginia</p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Document workflows and requirements for 800+ student organizations, assisting in the identification of customer needs and process improvements</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Demonstrate the ability to manage multiple priorities by coordinating large-scale logistical events like Gobblerfest while maintaining individual outreach projects</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Act as a collaborative team member connecting student leaders with campus resources, showing strong soft skills and analytical ability</span>
                </li>
              </ul>
            </div>

            {/* Undergraduate Research Assistant */}
            <div className="border-l-4 border-indigo-500 pl-8">
              <p className="text-indigo-400 font-semibold mb-2">April 2025 – September 2025</p>
              <h3 className="text-2xl font-bold text-white mb-2">LLM Code Security Research</h3>
              <p className="text-lg text-slate-300 mb-4">Undergraduate Research Assistant — Blacksburg, Virginia</p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Engineered automated research pipeline analyzing 117+ security patches from StarCoder training datasets to investigate LLM vulnerability to outdated code, reducing manual analysis time by 95%</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Developed 6-stage data extraction system using HuggingFace streaming API and PyGithub to collect, filter, and parse GitHub pull requests from 1000+ repositories without local storage overhead</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Built comparative analysis framework processing 100GB+ LLM training corpora to detect security patch adoption between StarCoder1 and StarCoder2 dataset versions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Created structured benchmark datasets with before/after code states for 8 high-priority security vulnerabilities, enabling reproducible evaluation of LLM code generation safety</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Leadership Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12">Activities & Leadership</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-indigo-500 pl-8">
              <p className="text-indigo-400 font-semibold mb-2">May 2024 – Present</p>
              <h3 className="text-2xl font-bold text-white mb-2">Society of Indian Americans at Virginia Tech</h3>
              <p className="text-lg text-slate-300 mb-4">President — Blacksburg, Virginia</p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Led 600+ member organization, managing a 55-person board and planning, directing, fundraising, and marketing 10+ events annually, raising $40K</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-12">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Programming</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• Java</li>
                <li>• Python</li>
                <li>• JavaScript</li>
                <li>• SQL</li>
                <li>• Node.js</li>
                <li>• C++ / C</li>
                <li>• Swift (iOS)</li>
                <li>• HTML/CSS</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Backend & Tools</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• FastAPI</li>
                <li>• Express</li>
                <li>• PostgreSQL</li>
                <li>• TypeORM</li>
                <li>• LangChain</li>
                <li>• Docker / Docker Compose</li>
                <li>• Git</li>
                <li>• REST APIs / JSON</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Frontend & Other</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• React.js</li>
                <li>• EJS</li>
                <li>• Twilio</li>
                <li>• Google Vision API</li>
                <li>• VS Code / Eclipse</li>
                <li>• SolidWorks</li>
                <li>• MATLAB</li>
                <li>• Microsoft 365</li>
                <li>• Adobe Photoshop</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
