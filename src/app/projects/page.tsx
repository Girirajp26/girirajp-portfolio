import Navbar from "@/components/Navbar";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <Navbar />
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-12 text-center">Projects</h1>
        <p className="text-center text-slate-400 mb-12">CHECK OUT SOME OF MY WORK</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-lg hover:border-indigo-500 transition">
            <h3 className="text-xl font-bold text-white mb-4">Project Name</h3>
            <p className="text-slate-300 mb-4">
              Project description and technologies used...
            </p>
            <a href="#" className="text-indigo-400 hover:text-indigo-300">
              View Project →
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
