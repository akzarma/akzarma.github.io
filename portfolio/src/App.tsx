import React, { useState } from "react";
import { motion } from "framer-motion";

const themes = ["light", "dark", "cupcake", "cyberpunk", "autumn"];

function App() {
  const [currentTheme, setCurrentTheme] = useState("dark");

  return (
    <div
      className={`min-h-screen ${
        currentTheme === "light"
          ? "bg-white text-black"
          : "bg-gray-900 text-white"
      }`}
    >
      {/* Navbar */}
      <nav className="border-b border-gray-800 sticky top-0 backdrop-blur-lg bg-gray-900/80 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                Akshay Kumar Sharma
              </h1>
              <div className="hidden md:flex gap-6">
                <a
                  href="#about"
                  className="hover:text-purple-400 transition-colors"
                >
                  About
                </a>
                <a
                  href="#experience"
                  className="hover:text-purple-400 transition-colors"
                >
                  Experience
                </a>
                <a
                  href="#projects"
                  className="hover:text-purple-400 transition-colors"
                >
                  Projects
                </a>
                <a
                  href="#skills"
                  className="hover:text-purple-400 transition-colors"
                >
                  Skills
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <select
                value={currentTheme}
                onChange={(e) => setCurrentTheme(e.target.value)}
                className="bg-gray-800 text-white px-3 py-1 rounded-lg border border-gray-700 cursor-pointer"
              >
                {themes.map((theme) => (
                  <option key={theme} value={theme}>
                    {theme}
                  </option>
                ))}
              </select>
              <a
                href="#contact"
                className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-6xl md:text-8xl font-bold mb-6">
            Faster, cleaner, easier
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Full-Stack Development
          </h3>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Staff Software Engineer specializing in scalable web applications
            and AI-driven interfaces.
            <br />
            Proficient in React.js, Python, and cloud technologies.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#projects"
              className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border-2 border-purple-600 hover:bg-purple-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-20"
        >
          <div className="text-center">
            <div className="text-5xl font-bold text-purple-400 mb-2">5+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-purple-400 mb-2">20+</div>
            <div className="text-gray-400">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-purple-400 mb-2">90%</div>
            <div className="text-gray-400">SEO Improvement</div>
          </div>
        </motion.div>
      </section>

      {/* Don't reinvent the wheel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Don't re-invent the wheel <span className="text-4xl">🥱</span>
          </h2>
          <p className="text-xl text-gray-400">
            Every project needs solid engineering. I bring proven solutions and
            best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Instead of writing */}
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold mb-4 text-red-400">
              Instead of building from scratch
            </h3>
            <p className="text-gray-400 mb-4">Every time, every project...</p>
            <div className="bg-gray-900 rounded-lg p-4 text-sm text-red-300 font-mono">
              ❌ Reinventing authentication
              <br />
              ❌ Basic CRUD operations
              <br />
              ❌ Common UI patterns
              <br />
              ❌ Performance issues
              <br />❌ Security vulnerabilities
            </div>
          </div>

          {/* Use proven solutions */}
          <div className="bg-gray-800 rounded-2xl p-8 border border-purple-600">
            <h3 className="text-2xl font-bold mb-4 text-green-400">
              Use proven solutions 😎
            </h3>
            <p className="text-gray-400 mb-4">
              Faster, more reliable, scalable
            </p>
            <div className="bg-gray-900 rounded-lg p-4 text-sm text-green-300 font-mono">
              ✅ Battle-tested architecture
              <br />
              ✅ Optimized performance
              <br />
              ✅ Security best practices
              <br />
              ✅ Scalable infrastructure
              <br />✅ Clean, maintainable code
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-gray-800/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center mb-16">
            Work Experience
          </h2>

          <div className="space-y-8">
            {/* ngram */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-purple-600 transition-colors"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-3xl font-bold text-purple-400">
                    Staff Software Engineer
                  </h3>
                  <p className="text-xl text-gray-300">ngram (client)</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400">Hyderabad, IN</p>
                  <p className="text-gray-500">Mar 2025 - Now</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>
                  • Pioneered a web-based video editor with AI capabilities
                </li>
                <li>
                  • Shipped natural-language video editing through an AI
                  companion
                </li>
                <li>
                  • Designed the architecture for AI chat and MCP-based tool
                  layer
                </li>
                <li>
                  • Contributed to full-fledged web editor across core editing
                  UX
                </li>
              </ul>
            </motion.div>

            {/* Blueshift */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-purple-600 transition-colors"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-3xl font-bold text-purple-400">
                    SDE2 & SDE1
                  </h3>
                  <p className="text-xl text-gray-300">Blueshift</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400">Pune, IN</p>
                  <p className="text-gray-500">Apr 2021 - Oct 2022</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>
                  • Built features with Angular, Vue.js, and Ruby on Rails
                </li>
                <li>• Created an Angular-Vue interoperability library</li>
                <li>• Reduced production bugs by 30% with automated testing</li>
                <li>• Earned 3 Outstanding Performance badges</li>
              </ul>
            </motion.div>

            {/* Deqode */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-purple-600 transition-colors"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-3xl font-bold text-purple-400">SDE1</h3>
                  <p className="text-xl text-gray-300">Deqode</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400">Pune, IN</p>
                  <p className="text-gray-500">Jul 2019 - Mar 2021</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>• Delivered full-stack web and mobile apps</li>
                <li>• Optimized React bundle size by 60%</li>
                <li>• Boosted Lighthouse score to 92</li>
                <li>• Mentored 2 engineers</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center mb-16">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-white"
            >
              <div className="text-4xl mb-4">🎥</div>
              <h3 className="text-2xl font-bold mb-3">
                AI-Powered Video Editor
              </h3>
              <p className="text-white/90">
                Pioneered a web-based video editor with AI capabilities,
                enabling natural-language video editing through an AI companion.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl p-8 text-white"
            >
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-2xl font-bold mb-3">
                Full-fledged Web Editor
              </h3>
              <p className="text-white/90">
                Built the architecture for AI chat and MCP-based tool layer,
                enabling seamless feature addition.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-pink-600 to-rose-600 rounded-2xl p-8 text-white"
            >
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold mb-3">AI-Powered RAG Chat</h3>
              <p className="text-white/90">
                Built an AI-powered RAG chat for pharma with higher domain
                accuracy. Released automated chart generation ahead of ChatGPT.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl p-8 text-white"
            >
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-3">
                Performance Optimization
              </h3>
              <p className="text-white/90">
                Improved SEO by 90% with Next.js. Set up comprehensive testing
                with Jest, React Testing Library, and Cypress.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-gray-800/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center mb-16">
            Technical Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              "React.js",
              "Next.js",
              "Python",
              "FastAPI",
              "TypeScript",
              "Node.js",
              "SQL",
              "Redis",
            ].map((skill) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl p-6 text-center font-bold text-lg cursor-pointer"
              >
                {skill}
              </motion.div>
            ))}
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold mb-4">
              Additional Skills & Tools
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "Vue.js",
                "Angular",
                "Redux",
                "Context API",
                "ES6",
                "REST",
                "GraphQL",
                "Elasticsearch",
                "GCP",
                "AWS",
                "Docker",
                "Jest",
                "Cypress",
                "New Relic",
                "Sentry",
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-700 hover:bg-purple-600 px-4 py-2 rounded-full text-sm transition-colors cursor-pointer"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Used by */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 mb-8">Worked with engineers at</p>
          <div className="flex flex-wrap justify-center gap-12 items-center text-2xl font-bold text-gray-500">
            <span>ngram</span>
            <span>Blueshift</span>
            <span>Deqode</span>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="bg-gradient-to-br from-purple-900 to-pink-900 py-20"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl mb-8 text-purple-200">
            I'm always open to discussing new projects, creative ideas, or
            opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="mailto:akzarma@gmail.com"
              className="bg-white text-purple-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              📧 akzarma@gmail.com
            </a>
            <a
              href="tel:+918559972822"
              className="bg-white text-purple-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              📱 +91 8559972822
            </a>
          </div>
          <div className="flex gap-6 justify-center">
            <a
              href="https://linkedin.com/in/akzarma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl hover:scale-110 transition-transform"
            >
              💼
            </a>
            <a
              href="https://github.com/akzarma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl hover:scale-110 transition-transform"
            >
              💻
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p className="mb-2">
            © 2025 Akshay Kumar Sharma. Built with React, Vite & Framer Motion
          </p>
          <p className="text-sm">
            Inspired by daisyUI • Vibe-coded with Claude 4.5 Sonnet ✨
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
