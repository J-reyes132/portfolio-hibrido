'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { projectsData } from '@/lib/data';

export default function WorksPage() {
  const { header, projects } = projectsData;
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [filter, setFilter] = useState('all');

  const categories = ['all', ...new Set(projects.map(p => p.category))];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <main className="pt-32 pb-24 px-8 max-w-7xl mx-auto">
      {/* Header */}
      <header className="mb-20 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-orange-600/10 text-orange-600 text-xs font-bold tracking-widest uppercase mb-6">
          {header.badge}
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">
          {header.title} <span className="text-orange-600">{header.highlight}</span>
        </h1>
        <p className="text-xl text-[#434656] max-w-2xl mx-auto leading-relaxed">
          {header.description}
        </p>
      </header>

      {/* Filter Section */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              filter === cat
                ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/20'
                : 'bg-[#f0edec] text-[#434656] hover:bg-orange-600/10'
            }`}
          >
            {cat === 'all' ? 'All Projects' : cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group bg-[#fcf9f8] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-[#e5e2e1] hover:border-orange-600/30"
          >
            <div className="relative overflow-hidden h-56">
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={800}
                height={400}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                {project.year}
              </div>
            </div>
            <div className="p-6">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                {project.category}
              </span>
              <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-orange-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-[#434656] text-sm leading-relaxed mb-4 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech, idx) => (
                  <span key={idx} className="px-2 py-1 bg-[#f0edec] text-[#434656] rounded text-xs font-medium">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2 py-1 bg-[#f0edec] text-[#434656] rounded text-xs font-medium">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-orange-600 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  View Details <span className="material-symbols-outlined text-sm"></span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de detalles del proyecto */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
          <div className="bg-[#fcf9f8] rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-[#fcf9f8] p-6 border-b border-[#e5e2e1] flex justify-between items-center">
              <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="w-10 h-10 rounded-full bg-[#f0edec] flex items-center justify-center hover:bg-orange-600 hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="p-8">
              <Image
                src={selectedProject.imageUrl}
                alt={selectedProject.title}
                width={800}
                height={400}
                className="w-full h-80 object-cover rounded-2xl mb-8"
              />
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-[#f0edec] px-4 py-2 rounded-lg">
                  <span className="text-xs text-[#434656] block">Client</span>
                  <span className="font-semibold">{selectedProject.client}</span>
                </div>
                <div className="bg-[#f0edec] px-4 py-2 rounded-lg">
                  <span className="text-xs text-[#434656] block">Year</span>
                  <span className="font-semibold">{selectedProject.year}</span>
                </div>
                <div className="bg-[#f0edec] px-4 py-2 rounded-lg">
                  <span className="text-xs text-[#434656] block">Category</span>
                  <span className="font-semibold">{selectedProject.category}</span>
                </div>
              </div>
              <p className="text-lg text-[#434656] leading-relaxed mb-8">
                {selectedProject.fullDescription}
              </p>
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Key Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-[#434656]">
                      <span className="material-symbols-outlined text-orange-600 text-sm">check_circle</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-orange-600/10 text-orange-600 rounded-lg text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-4 pt-4 border-t border-[#e5e2e1]">
                {selectedProject.links.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.url}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-xl font-bold hover:bg-orange-700 transition-all hover:scale-105"
                  >
                    {link.label}
                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}