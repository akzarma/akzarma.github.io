"use client";
import React from "react";
import { motion } from "framer-motion";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Spotlight } from "@/components/ui/spotlight";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { MovingBorder } from "@/components/ui/moving-border";
import {
  IconBrandReact,
  IconBrandNextjs,
  IconBrandPython,
  IconDatabase,
  IconCode,
  IconRocket,
  IconBrain,
  IconVideo,
} from "@tabler/icons-react";

const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
];

const projects = [
  {
    title: "AI-Powered Video Editor",
    description:
      "Pioneered a web-based video editor with AI capabilities, enabling natural-language video editing through an AI companion that updates timelines, clips, effects, and captions.",
    icon: <IconVideo className="h-6 w-6" />,
  },
  {
    title: "Full-fledged Web Editor",
    description:
      "Built the architecture for AI chat and MCP-based tool layer, enabling seamless feature addition. Contributed heavily to editing UX, rendering workflow, and state management.",
    icon: <IconCode className="h-6 w-6" />,
  },
  {
    title: "AI-Powered RAG Chat",
    description:
      "Built an AI-powered RAG chat for pharma that returns charts and text with higher domain accuracy. Released an automated visual chart generation pipeline ahead of ChatGPT's charts.",
    icon: <IconBrain className="h-6 w-6" />,
  },
  {
    title: "Performance Optimization",
    description:
      "Improved SEO and performance with Next.js, increasing monthly Google Search clicks by 90%. Set up comprehensive testing with Jest, React Testing Library, and Cypress.",
    icon: <IconRocket className="h-6 w-6" />,
  },
];

const skills = [
  {
    name: "React.js",
    icon: <IconBrandReact />,
    color: "from-cyan-500 to-blue-500",
  },
  {
    name: "Next.js",
    icon: <IconBrandNextjs />,
    color: "from-gray-700 to-gray-900",
  },
  {
    name: "Python",
    icon: <IconBrandPython />,
    color: "from-yellow-400 to-blue-500",
  },
  { name: "FastAPI", icon: <IconCode />, color: "from-green-400 to-cyan-500" },
  {
    name: "TypeScript",
    icon: <IconCode />,
    color: "from-blue-500 to-purple-500",
  },
  {
    name: "SQL & NoSQL",
    icon: <IconDatabase />,
    color: "from-orange-500 to-red-500",
  },
  { name: "Redis", icon: <IconDatabase />, color: "from-red-500 to-pink-500" },
  { name: "Node.js", icon: <IconCode />, color: "from-green-600 to-green-400" },
];

const experiences = [
  {
    title: "Staff Software Engineer",
    company: "ngram (client)",
    location: "Hyderabad, IN",
    period: "Mar 2025 - Now",
    description: "Founding Engineer - Senior Software Engineer",
    highlights: [
      "Pioneered a web-based video editor with AI capabilities not available in competing tools",
      "Shipped natural-language video editing through an AI companion",
      "Designed the architecture for AI chat and MCP-based tool layer",
      "Contributed heavily to full-fledged web editor across core editing UX, rendering workflow, state management, and performance",
    ],
  },
  {
    title: "SDE2 & SDE1",
    company: "Blueshift",
    location: "Pune, IN",
    period: "Apr 2021 - Oct 2022",
    description:
      "Full-stack development with Angular, Vue.js, and Ruby on Rails",
    highlights: [
      "Built features with Angular, Vue.js, and Ruby on Rails",
      "Created an Angular-Vue interoperability library",
      "Set up automated testing, reducing production bugs by 30%",
      "Earned 3 Outstanding Performance badges for major contributions",
    ],
  },
  {
    title: "SDE1",
    company: "Deqode",
    location: "Pune, IN",
    period: "Jul 2019 - Mar 2021",
    description:
      "Full-stack web and mobile apps using React.js, Node.js, and CSS",
    highlights: [
      "Delivered full-stack web and mobile apps using React.js, Node.js, and CSS",
      "Optimized React bundle size by 60%, boosting Lighthouse score to 92",
      "Mentored 2 engineers and collaborated with international clients across time zones",
    ],
  },
];

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />

        {/* Hero Section */}
        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center"
        >
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="top-10 left-full h-[80vh] w-[50vw]"
            fill="purple"
          />
          <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
          <BackgroundBeams />

          <div className="relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                Akshay Kumar Sharma
              </h1>
              <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto">
                Staff Software Engineer | Full-Stack Developer
              </p>
              <TextGenerateEffect
                words="Experienced Software Engineer specializing in scalable web applications and AI-driven interfaces. Proficient in React.js, Python, and cloud technologies."
                className="text-center text-neutral-400 max-w-4xl mx-auto"
              />
              <div className="flex gap-4 justify-center mt-8">
                <MovingBorder
                  duration={3000}
                  className="px-8 py-3 rounded-full"
                >
                  <a href="#projects" className="text-lg">
                    View My Work
                  </a>
                </MovingBorder>
                <MovingBorder
                  duration={3000}
                  className="px-8 py-3 rounded-full"
                >
                  <a href="mailto:akzarma@gmail.com" className="text-lg">
                    Contact Me
                  </a>
                </MovingBorder>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              About Me
            </h2>
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700">
              <p className="text-xl text-neutral-300 leading-relaxed mb-6">
                I'm a passionate Software Engineer with a strong focus on
                building scalable web applications and AI-driven interfaces.
                With experience at companies like ngram and Blueshift, I've
                successfully led projects from inception to delivery,
                contributing to company growth and team expansion.
              </p>
              <p className="text-xl text-neutral-300 leading-relaxed">
                My expertise spans across React.js, Next.js, Python, FastAPI,
                and cloud technologies. I'm particularly interested in
                performance optimization, testing, and system reliability. I've
                improved SEO metrics by 90%, reduced production bugs by 30%, and
                consistently delivered high-quality solutions.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 relative">
          <h2 className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Work Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-slate-500 transition-all duration-300"
              >
                <div className="flex justify-between items-start flex-wrap gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {exp.title}
                    </h3>
                    <p className="text-xl text-purple-400">{exp.company}</p>
                    <p className="text-neutral-400">{exp.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-neutral-300">{exp.location}</p>
                    <p className="text-neutral-400">{exp.period}</p>
                  </div>
                </div>
                <ul className="space-y-2 mt-4">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-neutral-300 flex items-start">
                      <span className="text-purple-400 mr-2">▸</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 relative">
          <h2 className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Featured Projects
          </h2>
          <HoverEffect items={projects} />
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 relative">
          <h2 className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className={`bg-gradient-to-br ${skill.color} p-6 rounded-xl flex flex-col items-center justify-center gap-3 cursor-pointer`}
              >
                <div className="text-4xl text-white">{skill.icon}</div>
                <p className="text-white font-semibold">{skill.name}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 max-w-4xl mx-auto bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Additional Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "Vue.js",
                "Angular",
                "Redux",
                "Context API",
                "ES6",
                "HTTP",
                "REST",
                "JSON",
                "Elasticsearch",
                "GCP",
                "LLM Agents",
                "SEO Optimization",
                "Jest",
                "Cypress",
                "React Testing Library",
                "New Relic",
                "Sentry",
                "Apache Superset",
              ].map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-slate-700 rounded-full text-neutral-300 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Let's Connect
            </h2>
            <p className="text-xl text-neutral-300 mb-8">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <MovingBorder duration={3000} className="px-8 py-4">
                <a
                  href="mailto:akzarma@gmail.com"
                  className="text-lg flex items-center gap-2"
                >
                  📧 akzarma@gmail.com
                </a>
              </MovingBorder>
              <MovingBorder duration={3000} className="px-8 py-4">
                <a
                  href="tel:+918559972822"
                  className="text-lg flex items-center gap-2"
                >
                  📱 +91 8559972822
                </a>
              </MovingBorder>
            </div>
            <div className="flex gap-6 justify-center mt-8">
              <a
                href="https://linkedin.com/in/akzarma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-white transition-colors"
              >
                <div className="text-3xl">💼 LinkedIn</div>
              </a>
              <a
                href="https://github.com/akzarma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-white transition-colors"
              >
                <div className="text-3xl">💻 GitHub</div>
              </a>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center text-neutral-500 border-t border-slate-800">
          <p>
            © 2025 Akshay Kumar Sharma. Vibe-coded with Claude 4.5 Sonnet ✨
          </p>
          <p className="mt-2 text-sm">
            Built with Next.js, Framer Motion, Magic UI & Hero UI
          </p>
        </footer>
      </div>
    </main>
  );
}
