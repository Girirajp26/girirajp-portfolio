import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <Navbar />
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-16">About Me</h1>
        <div className="flex flex-col md:flex-row items-start gap-12 mb-20">
          <div className="w-full md:w-1/3 flex-shrink-0">
            <img
              src="/images/your-photo.jpg"
              alt="Giriraj Patel"
              className="w-full max-w-sm rounded-2xl shadow-2xl"
            />
          </div>
          <div className="w-full md:w-2/3 space-y-6">
            <h2 className="text-3xl font-bold text-white">Hello, I'm Giriraj</h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Hi, I'm Giriraj Patel and I am a student at Virginia Tech studying Computer Science and Economics. I chose this field out of a deep passion for problem-solving and a desire to build software that addresses real-world challenges.
            </p>
            <p className="text-base text-slate-300 leading-relaxed">
              For the past years, I've had the privilege of interning at various organizations including Legal Chain, where I was trusted by the Founder & CEO to deliver accurate, timely, and well-considered work under pressure. I am a proactive learner who quickly adapts to new challenges, consistently seeking to improve the quality of work across my team.
            </p>
            <p className="text-base text-slate-300 leading-relaxed">
              At Virginia Tech, I'm deeply involved in community leadership, currently serving as President of the Society of Indian Americans, where I lead a 400+ member organization. I thrive on the logistics of planning and executing large-scale events that celebrate and strengthen the brown community.
            </p>
            <p className="text-base text-slate-300 leading-relaxed">
              I am currently working toward my Bachelor's degree, where I continue to grow my technical and business skills through research, projects and experiences. I believe technology and business together will continue to shape the world, and I aim to make a meaningful impact as a results-driven professional.
            </p>
          </div>
        </div>
        <div className="mt-32">
          <h2 className="text-3xl font-bold mb-12 text-white">Beyond Coding</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Wellness</h3>
              <p className="text-slate-300 leading-relaxed">
                I am passionate about staying active through regular fitness training. For me, working out is about more than health—it's about the discipline and focus required to maintain peak performance in my tech career.
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
                When I'm not coding, you'll find me behind the wheel enjoying a long drive or lost in a good book. I value the perspective gained from both quiet study and the freedom of the open road.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
