import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <Navbar />
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-12 text-center">
          Get in touch
        </h1>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">NAME</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg focus:border-indigo-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">EMAIL</label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg focus:border-indigo-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">MESSAGE</label>
              <textarea
                rows={6}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg focus:border-indigo-500 focus:outline-none"
              />
            </div>
            <div className="flex gap-4">
              <button
                type="submit"
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium transition"
              >
                SEND MESSAGE
              </button>
              <button
                type="reset"
                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg font-medium transition"
              >
                CLEAR
              </button>
            </div>
          </form>
        </div>
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold mb-4">Email</h3>
          <p className="text-indigo-400 mb-8">your.email@vt.edu</p>
          <div className="flex justify-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              className="text-slate-400 hover:text-white transition"
            >
              Instagram
            </a>
            <a
              href="https://github.com"
              target="_blank"
              className="text-slate-400 hover:text-white transition"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="text-slate-400 hover:text-white transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
