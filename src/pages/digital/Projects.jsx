import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar } from 'lucide-react';

export default function DigitalProjects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "Modern e-commerce solution with real-time inventory management and payment processing",
      image: "/api/placeholder/600/400",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
      github: "#",
      date: "2024-01"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "Mobile Development",
      description: "Secure mobile banking application with biometric authentication and real-time transactions",
      image: "/api/placeholder/600/400",
      tech: ["React Native", "Firebase", "Node.js"],
      link: "#",
      github: "#",
      date: "2024-02"
    },
    {
      id: 3,
      title: "Healthcare Dashboard",
      category: "UI/UX Design",
      description: "Comprehensive healthcare management dashboard for patient records and appointment scheduling",
      image: "/api/placeholder/600/400",
      tech: ["Vue.js", "Python", "PostgreSQL"],
      link: "#",
      github: "#",
      date: "2023-12"
    },
    {
      id: 4,
      title: "SaaS Analytics Platform",
      category: "Web Development",
      description: "Data analytics platform with real-time dashboards and automated reporting features",
      image: "/api/placeholder/600/400",
      tech: ["React", "D3.js", "Python", "AWS"],
      link: "#",
      github: "#",
      date: "2023-11"
    },
    {
      id: 5,
      title: "Food Delivery App",
      category: "Mobile Development",
      description: "On-demand food delivery application with real-time tracking and payment integration",
      image: "/api/placeholder/600/400",
      tech: ["Flutter", "Firebase", "Google Maps API"],
      link: "#",
      github: "#",
      date: "2023-10"
    },
    {
      id: 6,
      title: "Learning Management System",
      category: "Web Development",
      description: "Educational platform with video streaming, quizzes, and progress tracking",
      image: "/api/placeholder/600/400",
      tech: ["Next.js", "PostgreSQL", "AWS S3"],
      link: "#",
      github: "#",
      date: "2023-09"
    }
  ];

  const categories = ["All", "Web Development", "Mobile Development", "UI/UX Design"];

  return (
    <div className="min-h-screen">
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-bold text-gray-900 mb-6">
            Our Projects
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-gray-600">
            Explore our portfolio of digital solutions that have helped businesses transform and grow
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  category === "All"
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden">
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.link}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 text-gray-700" />
                    </a>
                    <a
                      href={project.github}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors"
                    >
                      <Github className="w-5 h-5 text-gray-700" />
                    </a>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-sm font-medium text-gray-700 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.date}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Have a Project in Mind?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's work together to bring your digital vision to life
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all duration-300"
            >
              Start Your Project
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
