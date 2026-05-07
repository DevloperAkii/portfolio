export default function PortfolioWebsite() {
  const projects = [
    {
      title: "Butt Slide",
      desc: "Self-developed Game jam project completed within in 7 days.",
      tech: ["Unity", "C#","Web", "PC", "Gameplay Programming", "Environment Design", "Game Design"],
      playableLink: "https://akshit-patel.itch.io/butt-slide",
      demoLink: "",
      sourceCode: "https://github.com/yourusername/project",
      image: "https://img.itch.zone/aW1nLzI1NDQyODIyLnBuZw==/315x250%23c/Z15%2FYD.png"
    },
    {
      title: "Alien Blaster",
      desc: "Collaborative Android game project developed with a small team. Focused on gameplay logic, player interaction, and core systems.",
      tech: ["Unity", "C#", "Android", "Gameplay Programming", "AI Programming", "Combat Design & Development", "Team Collaboration"],
      playableLink: "https://maziminds.itch.io/casual-runner",
      demoLink: "",
      sourceCode: "https://github.com/yourusername/project",
      image: "https://img.itch.zone/aW1nLzE5NTkwMDMwLnBuZw==/315x250%23c/N2llC%2F.png",
    },
    {
      title: "Fast & Foolish",
      desc: "Collaborative Android game project developed with a small team. Fouced on car racing on amazing tracks.",
      tech: ["Unity","C#", "Android", "Gameplay Programming", "Team Collaboration"],
      playableLink: "https://maziminds.itch.io/car-racing",
      demoLink: "https://youtu.be/9zFbMX0tB3M?si=PXMVfqp5qAuBdxAp",
      sourceCode: "https://github.com/yourusername/project",
      image: "https://img.itch.zone/aW1nLzIwODA5MzcwLnBuZw==/315x250%23c/QVWujA.png",
    },
  ];

  const skills = [
    "Unity",
    "C#",
    "Gameplay Programming",
    "Game Systems",
    "OOP",
    "Animation Systems",
    "State Machines",
    "Git",
    "Problem Solving",
    "Debugging",
    "C++ (Learning)",
    "Engine Programming Fundamentals",
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 px-6 py-10">
      <div className="max-w-6xl mx-auto">
        {/* HERO */}
        <section className="mb-20">
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-zinc-400 uppercase tracking-[0.3em] text-sm">
                Gameplay Programmer
              </p>

              <h1 className="text-5xl md:text-7xl font-black mt-3 leading-tight">
                AKSHIT PATEL
              </h1>
            </div>

            <p className="text-zinc-300 text-lg max-w-3xl leading-relaxed">
              Gameplay programmer focused on building responsive gameplay
              systems, solving technical problems, and creating scalable game
              architecture. Experienced with Unity and C#, with long-term
              interest in systems programming and technical game development.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition"
              >
                View Projects
              </a>

              <a
                href="https://github.com/DevloperAkii"
                target="_blank"
                className="border border-zinc-700 px-6 py-3 rounded-2xl hover:bg-zinc-900 transition"
              >
                GitHub
              </a>

              <a
                href="https://akshit-patel.itch.io/"
                target="_blank"
                className="border border-zinc-700 px-6 py-3 rounded-2xl hover:bg-zinc-900 transition"
              >
                Play Games
              </a>
              <a
                href="https://drive.google.com/file/d/1ciXhf20z33edFfqrq_ALenCM-9n4kSV0/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-zinc-700 px-6 py-3 rounded-2xl hover:bg-zinc-900 transition"
              >
                Resume
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="grid md:grid-cols-2 gap-10 mb-20">
          <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>

            <p className="text-zinc-300 leading-relaxed mb-4">
              I started learning game development independently after completing
              my 10+2 education and focused on building real projects instead
              of only consuming tutorials.
            </p>

            <p className="text-zinc-300 leading-relaxed mb-4">
              Over time, I completed multiple game projects, collaborated with
              small teams, and developed strong interest in gameplay systems,
              technical problem solving, and software architecture.
            </p>

            <p className="text-zinc-300 leading-relaxed">
              Currently pursuing a B.Com degree while continuing active game
              development and portfolio building.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800">
            <h2 className="text-3xl font-bold mb-6">Technical Skills</h2>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="bg-zinc-800 px-4 py-2 rounded-xl text-sm border border-zinc-700"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mb-20">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-4xl font-black">Projects</h2>

            <p className="text-zinc-400">
              Finished projects & gameplay systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-zinc-600 transition"
              >
                <div className="mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover rounded-2xl mb-4"
                  />

                  <h3 className="text-2xl font-bold">
                    {project.title}
                  </h3>
                </div>

                <p className="text-zinc-300 leading-relaxed mb-6">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <div
                      key={tech}
                      className="bg-zinc-800 px-3 py-1 rounded-lg text-sm"
                    >
                      {tech}
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <div className="flex gap-4">
                    <a
                      href={project.playableLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-black px-4 py-2 rounded-xl font-medium hover:scale-105 transition"
                    >
                      Play
                    </a>

                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_self"
                        rel="noopener noreferrer"
                        className="bg-white text-black px-4 py-2 rounded-xl font-medium hover:scale-105 transition"
                      >
                        Demo
                      </a>
                    )}

                    <a
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-zinc-700 px-4 py-2 rounded-xl hover:bg-zinc-800 transition"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 mb-20">
          <h2 className="text-4xl font-black mb-6">Development Philosophy</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3">Systems Thinking</h3>
              <p className="text-zinc-300 leading-relaxed">
                I enjoy solving gameplay and technical problems through modular,
                scalable systems instead of quick hacks.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">Problem Solving</h3>
              <p className="text-zinc-300 leading-relaxed">
                Strong interest in debugging, architecture decisions, gameplay
                responsiveness, and technical iteration.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">Continuous Learning</h3>
              <p className="text-zinc-300 leading-relaxed">
                Currently expanding knowledge toward advanced gameplay systems,
                C++, and low-level game programming concepts.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="text-center py-10 border-t border-zinc-800">
          <h2 className="text-4xl font-black mb-4">Let’s Build Games</h2>

          <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
            Open to gameplay programming opportunities, internships,
            collaborations, and technical game development roles.
          </p>

          <div className="flex justify-center flex-wrap gap-4">
            <a
              href="mailto:devloperakii0709@gmail.com?subject=Gameplay Programmer Opportunity&body=Hi Akii"
              className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition"
            >
              Contact Me
            </a>

            <a
              href="https://www.linkedin.com/in/akshit-patel-610018358/"
              target="_blank"
              className="border border-zinc-700 px-6 py-3 rounded-2xl hover:bg-zinc-900 transition"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
