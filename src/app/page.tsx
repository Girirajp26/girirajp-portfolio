import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-950/95 z-0" />
        <div className="relative z-10 max-w-6xl w-full">
          <div className="border-2 border-slate-700 bg-slate-900/40 backdrop-blur-sm rounded-lg p-12 mb-16 mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 inline-block border-b-4 border-white pb-3">
              Hi, my name is Giriraj Patel
            </h1>
            <p className="text-sm md:text-base text-slate-200 tracking-widest font-light mt-8">
              WELCOME! I'M GLAD YOU'RE HERE — CHECK OUT MY PROJECTS OR LEARN MORE ABOUT ME.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {[
              { href: '/about', title: 'About me', subtitle: 'LEARN MORE ABOUT WHO I AM', gradient: 'from-cyan-400/80 to-teal-600/80' },
              { href: '/experience', title: 'Experience', subtitle: 'MY PROFESSIONAL JOURNEY', gradient: 'from-purple-400/80 to-indigo-600/80' },
              { href: '/projects', title: 'Projects', subtitle: 'CHECK OUT SOME OF MY WORK', gradient: 'from-slate-500/80 to-blue-900/80' },
            ].map((card) => (
              <a key={card.href} href={card.href}
                 className="relative h-96 rounded-2xl overflow-hidden group border-4 border-black shadow-2xl transition-transform duration-300 hover:scale-105">
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} group-hover:opacity-90 transition-all`} />
                <div className="relative z-10 h-full flex flex-col items-start justify-end p-8">
                  <h3 className="text-3xl font-bold text-white mb-2 border-b-4 border-white pb-2 inline-block">{card.title}</h3>
                  <p className="text-sm text-white tracking-widest font-light mt-2">{card.subtitle}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
