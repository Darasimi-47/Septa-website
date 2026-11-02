
// import Logo from './public/images/septa-logo.png'

const services = [
  {
    icon: "⌘",
    title: "Web Development",
    description: "Modern, responsive and scalable websites designed to grow your business.",
    color: "blue",
  },
  {
    icon: "▣",
    title: "Mobile Applications",
    description: "Powerful mobile applications built for seamless digital experiences.",
    color: "purple",
  },
  {
    icon: "☁",
    title: "Software Engineering",
    description: "Robust, secure and scalable software solutions for modern businesses.",
    color: "green",
  },
  {
    icon: "✧",
    title: "IT Consulting",
    description: "Expert technology guidance to help your business innovate and grow.",
    color: "orange",
  },
];

const projects = [
  {
    name: "Digital Experiences",
    type: "Web Development",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Smart Technology",
    type: "Software Solutions",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Connected Future",
    type: "Digital Innovation",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=85",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* NAVIGATION */}
      <header className="absolute left-0 top-0 z-50 w-full border-b border-white/10 bg-[#061923]/90 backdrop-blur-lg">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#" className="flex items-center gap-3">
            <img
              src="/images/logo-light.png"
              alt="SEPTA Logo"
              className="h-15 w-40 object-cover"
            />
            
          </a>

          <div className="hidden items-center gap-8 text-sm font-semibold text-white/90 md:flex">
            <a href="#home" className="text-teal-300">Home</a>
            <a href="#about" className="transition hover:text-teal-300">About</a>
            <a href="#services" className="transition hover:text-teal-300">Services</a>
            <a href="#expertise" className="transition hover:text-teal-300">Expertise</a>
            <a href="#projects" className="transition hover:text-teal-300">Projects</a>
            <a href="#contact" className="transition hover:text-teal-300">Contact</a>
          </div>

          <a
            href="#contact"
            className="rounded-full bg-teal-500 px-6 py-3 text-sm font-bold text-[#041923] transition hover:bg-teal-300"
          >
            Get in Touch →
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-[720px] items-center overflow-hidden bg-[#061923] pt-28"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2000&q=90')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#041923] via-[#041923]/95 to-[#041923]/35" />
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-teal-500/20 blur-[120px]" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-teal-300/40 bg-teal-300/10 px-5 py-2 text-sm text-teal-200">
              <span className="h-2 w-2 rounded-full bg-teal-400" />
              Welcome to SEPTA
            </div>

            <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.1] tracking-tight text-white md:text-7xl">
              Innovative Technology.
              <span className="mt-2 block text-teal-400">
                Limitless Possibilities.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              At SEPTA, we build smart, scalable and user-focused digital
              solutions that help businesses grow and people thrive in the
              digital age.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#services"
                className="rounded-full bg-teal-400 px-8 py-4 font-bold text-[#041923] transition hover:-translate-y-1 hover:bg-teal-300"
              >
                Explore Our Services →
              </a>
              <a
                href="#about"
                className="rounded-full border border-white/50 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#041923]"
              >
                Discover SEPTA
              </a>
            </div>

            <div className="mt-14 flex flex-wrap gap-10 border-t border-white/15 pt-7">
              <div>
                <p className="text-3xl font-extrabold text-white">Innovation</p>
                <p className="mt-1 text-sm text-slate-400">Driven solutions</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-white">Quality</p>
                <p className="mt-1 text-sm text-slate-400">In every detail</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-white">Growth</p>
                <p className="mt-1 text-sm text-slate-400">Built for tomorrow</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative rounded-3xl border border-teal-300/30 bg-white/5 p-4 shadow-2xl shadow-teal-900/30 backdrop-blur-sm">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1100&q=90"
                alt="Technology professionals collaborating on a digital project"
                className="h-[430px] w-full rounded-2xl object-cover"
              />
              <div className="absolute -bottom-7 -left-7 rounded-2xl border border-white/10 bg-[#0b2937] p-6 shadow-xl">
                <p className="text-sm text-teal-300">Our philosophy</p>
                <p className="mt-1 text-xl font-bold text-white">
                  Dream it. Build it.
                </p>
                <p className="text-xl font-bold text-teal-400">Make it happen.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="font-bold uppercase tracking-[0.3em] text-teal-600">
              What We Do
            </p>
            <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
              Technology That Moves You Forward
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-500">
              From innovative websites to intelligent software, we turn
              ambitious ideas into practical digital solutions.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-teal-300 hover:shadow-xl"
              >
                <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50 text-3xl font-bold text-teal-700 transition group-hover:bg-teal-500 group-hover:text-white">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="mt-4 leading-7 text-slate-500">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="mt-7 inline-block font-bold text-teal-700 hover:text-teal-500"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-[#effaf7] px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1100&q=90"
              alt="Modern technology workspace"
              className="h-[420px] w-full rounded-3xl object-cover shadow-xl"
            />
            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-[#06232d] p-7 text-white shadow-xl sm:right-6">
              {/* <p className="text-3xl font-extrabold text-teal-400">SEPTA</p> */}
               <img
              src="/images/logo-light.png"
              alt="SEPTA Logo"
              className="h-12 w-30 object-cover"
            />
              <p className="mt-1 text-sm text-slate-300">Innovate. Build. Empower.</p>
            </div>
          </div>

          <div>
            <p className="font-bold uppercase tracking-[0.3em] text-teal-700">
              About SEPTA
            </p>
            <h2 className="mt-5 text-4xl font-extrabold leading-tight md:text-5xl">
              Building a Smarter Digital Future Together.
            </h2>
            <p className="mt-7 text-lg leading-8 text-slate-600">
              SEPTA is driven by the belief that technology should make life
              easier, businesses stronger and possibilities greater. We focus
              on creating digital solutions that address real-world needs.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              Through creativity, technical expertise and a commitment to
              quality, we aim to help individuals and organisations navigate
              an increasingly digital world.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                "Innovation driven",
                "Client focused",
                "Quality assured",
                "Always evolving",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 font-semibold">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-teal-600 text-white">
                    ✓
                  </span>
                  {item}
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-9 inline-block rounded-full bg-[#06232d] px-8 py-4 font-bold text-white transition hover:bg-teal-700"
            >
              Work With Us →
            </a>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section id="expertise" className="bg-[#061923] px-6 py-24 text-white lg:px-10">
        <div className="mx-auto max-w-7xl text-center">
          <p className="font-bold uppercase tracking-[0.3em] text-teal-400">
            Our Expertise
          </p>
          <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
            Where Ideas Meet Technology
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
            We bring creative thinking and technical capabilities together to
            build solutions ready for the future.
          </p>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Frontend Development",
              "Backend Development",
              "Cloud Technologies",
              "UI / UX Design",
              "Database Management",
              "Digital Transformation",
              "API Integration",
              "Software Testing",
            ].map((skill) => (
              <div
                key={skill}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 font-semibold transition hover:border-teal-400 hover:bg-teal-400/10"
              >
                <span className="mb-3 block text-2xl text-teal-400">✦</span>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="font-bold uppercase tracking-[0.3em] text-teal-700">
                Our Portfolio
              </p>
              <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
                Ideas Into Reality.
              </h2>
            </div>
            <p className="max-w-md leading-7 text-slate-500">
              Explore the kind of digital experiences and solutions we are
              passionate about creating.
            </p>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.name}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <p className="text-sm font-bold uppercase tracking-wider text-teal-600">
                    {project.type}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold">{project.name}</h3>
                  <a
                    href="#contact"
                    className="mt-5 inline-block font-bold text-slate-800 hover:text-teal-600"
                  >
                    Discuss a project →
                  </a>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm text-slate-400">
            Illustrative portfolio categories — replace these with SEPTA's
            verified completed projects as they become available.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-[#eaf8f5] px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-[0.3em] text-teal-700">
              Let's Connect
            </p>
            <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
              Have an Idea? Let's Build Something Great.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
              Have a project in mind or looking for a technology partner?
              We'd love to hear from you.
            </p>
            <p className="mt-8 font-semibold text-slate-700">
              SEPTA — Innovate. Build. Empower.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <form action="mailto:hello@septa.com" method="post" encType="text/plain">
              <label className="mb-2 block text-sm font-semibold">Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                className="mb-5 w-full rounded-xl border border-slate-200 px-4 py-4 outline-none focus:border-teal-500"
              />

              <label className="mb-2 block text-sm font-semibold">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="mb-5 w-full rounded-xl border border-slate-200 px-4 py-4 outline-none focus:border-teal-500"
              />

              <label className="mb-2 block text-sm font-semibold">How can we help?</label>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us about your project..."
                required
                className="mb-6 w-full rounded-xl border border-slate-200 px-4 py-4 outline-none focus:border-teal-500"
              />

              <button
                type="submit"
                className="w-full rounded-full bg-teal-600 px-7 py-4 font-bold text-white transition hover:bg-[#06232d]"
              >
                Send Message →
              </button>
            </form>
            <p className="mt-4 text-xs text-slate-400">
              Contact form preview. A verified SEPTA email address and
              production form service should be configured before launch.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#04151e] px-6 py-12 text-white lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <img
              src="/images/logo-light.png"
              alt="SEPTA Logo"
              className="h-15 w-40 object-cover"
            />
            <p className="mt-2 text-sm text-slate-400">
              Innovate. Build. Empower.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-slate-300">
            <a href="#home" className="hover:text-teal-400">Home</a>
            <a href="#about" className="hover:text-teal-400">About</a>
            <a href="#services" className="hover:text-teal-400">Services</a>
            <a href="#projects" className="hover:text-teal-400">Projects</a>
            <a href="#contact" className="hover:text-teal-400">Contact</a>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center text-sm text-slate-500">
         © 2026 SEPTA. All rights reserved.
        </div>
      </footer>
    </main>
  );
} <a href="#" className="flex items-center gap-3">
  <span className="text-5xl font-black italic text-teal-400">S</span>
  <span>
    
    <span className="text-[10px] tracking-widest text-teal-200">
      INNOVATE · BUILD · EMPOWER
    </span>
  </span>
</a>