import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="ma x-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
              <h3 className="text-xl font-bold mb-2">
                Performance Management System
              </h3>
              <p className="text-gray-400 mb-4">
                a KPI management tool built with Laravel and Filament, designed
                to help companies track and evaluate performance efficiently. It
                enables organizations to set, monitor, and analyze Key
                Performance Indicators (KPIs) through an intuitive dashboard,
                ensuring data-driven decision-making and continuous improvement.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["PHP", "Laravel", "Filament"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center my-4">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
              <h3 className="text-xl font-bold mb-2">Movie App</h3>
              <p className="text-gray-400 mb-4">
                a sleek and interactive movie web application built with
                React.js, allowing users to browse and discover movies
                effortlessly. It fetches real-time data from TMDb to display
                movie details, ratings, and trending titles
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Appwrite"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center my-4">
                <a
                  href="https://calm-licorice-b158b9.netlify.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
              <h3 className="text-xl font-bold mb-2">Snake</h3>
              <p className="text-gray-400 mb-4">
                A Simple Snake Game using HTML and Javascript.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "Javascript"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center my-4">
                <a
                  href="https://yuristian.github.io/js-snake/"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>
            {/*
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
              <h3 className="text-xl font-bold mb-2">Jira Clone</h3>
              <p className="text-gray-400 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                tenetur accusamus reiciendis incidunt eligendi atque vitae
                porro, cum quam repellendus quasi illum, tempora natus
                reprehenderit sapiente maxime dolore et distinctio.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Next.js"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center my-4">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>
            */}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
