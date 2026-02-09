import Navbar from "@/components/Navbar";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <Navbar />
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-12 text-center">Projects</h1>
        <p className="text-center text-slate-400 mb-12">CHECK OUT SOME OF MY WORK</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* EventPulse */}
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-lg hover:border-indigo-500 transition-all duration-300 hover:scale-[1.02]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
              <h3 className="text-xl font-bold text-white">EventPulse</h3>
            </div>
            <p className="text-indigo-400 text-sm font-semibold mb-3">AI-Powered Event Analytics Dashboard</p>
            <ul className="space-y-2 text-slate-300 text-sm mb-6">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Developed an AI-powered analytics dashboard that transforms raw event attendance and financial data into actionable insights</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Built interactive data visualizations using Chart.js, including bar, line, and doughnut charts for KPIs and demographics</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Implemented an Excel-to-JSON data pipeline using Python, pandas, and openpyxl to process attendance, budget, and ROI metrics</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Designed a responsive, professional UI with dark/light theme support and deployed via GitHub Pages</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded">Python</span>
              <span className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded">Chart.js</span>
              <span className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded">pandas</span>
              <span className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded">GitHub Pages</span>
            </div>
          </div>

          {/* SPLICE Catalog */}
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-lg hover:border-indigo-500 transition-all duration-300 hover:scale-[1.02]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
              <h3 className="text-xl font-bold text-white">SPLICE Catalog</h3>
            </div>
            <p className="text-cyan-400 text-sm font-semibold mb-3">Smart Learning Content Explorer</p>
            <ul className="space-y-2 text-slate-300 text-sm mb-6">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Developed Node.js backend services to power advanced filtering and search logic using EJS templates, Express, and TypeORM</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Managed Dockerized development setup using Docker Compose to simulate production environments</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Performed CRUD operations on PostgreSQL database and wrote schema migration scripts</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded">Node.js</span>
              <span className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded">Express</span>
              <span className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded">PostgreSQL</span>
              <span className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded">Docker</span>
              <span className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded">TypeORM</span>
            </div>
          </div>

          {/* LLM Code Security Research */}
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-lg hover:border-indigo-500 transition-all duration-300 hover:scale-[1.02] md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <h3 className="text-xl font-bold text-white">LLM Code Security Research Pipeline</h3>
            </div>
            <p className="text-purple-400 text-sm font-semibold mb-3">Undergraduate Research Project</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Engineered automated research pipeline analyzing 117+ security patches from StarCoder training datasets</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Developed 6-stage data extraction system using HuggingFace streaming API and PyGithub</span>
                </li>
              </ul>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Built comparative analysis framework processing 100GB+ LLM training corpora</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Created structured benchmark datasets for 8 high-priority security vulnerabilities</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded">Python</span>
              <span className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded">HuggingFace</span>
              <span className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded">PyGithub</span>
              <span className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded">Data Analysis</span>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
