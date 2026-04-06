'use client';

import Link from 'next/link';
import Image from 'next/image';
import { homeData } from '@/lib/data';
import { DownloadCVButton } from '@/components/DownloadCVButton';

export default function HomePage() {
  const { hero, about, skills, projects, experience } = homeData;

  return (
    <div className="relative">
      {/* Organic Background Decorations */}
      <div className="absolute w-[600px] h-[600px] bg-gradient-radial from-orange-600/5 to-transparent -top-24 -left-48 blur-3xl -z-10"></div>
      <div className="absolute w-[600px] h-[600px] bg-gradient-radial from-orange-600/5 to-transparent top-1/2 -right-48 blur-3xl -z-10"></div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-20 md:py-32 flex flex-col md:flex-row gap-16 items-center">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#dfdfe6] text-[#616268] text-xs font-bold tracking-widest uppercase">
            {hero.badge}
          </div>
          <h1 className="text-5xl md:text-6xl font-headline font-extrabold tracking-tighter leading-tight">
            {hero.title} <span className="text-orange-600">{hero.subtitle}</span>
          </h1>
          <p className="text-lg md:text-xl text-[#434656] max-w-xl leading-relaxed">
            {hero.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href={hero.ctaLink} className="bg-gradient-to-br from-orange-600 to-amber-500 text-white px-8 py-4 rounded-xl font-headline font-bold text-lg shadow-lg shadow-orange-600/10 hover:opacity-90 transition-opacity">
              {hero.ctaText}
            </Link>
              <DownloadCVButton variant="secondary" />
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-black/5">
            <Image 
              src={hero.imageUrl} 
              alt="Juan Manuel Reyes Feliz" 
              width={600}
              height={600}
              className="w-full h-full object-cover"
              loading='eager'
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-[#f6f3f2] py-32 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
          <div className="md:w-1/3">
            <h2 className="text-4xl font-headline font-extrabold tracking-tight">{about.name}</h2>
            <div className="mt-4 w-12 h-1 bg-orange-600"></div>
            <p className="mt-6 text-sm font-bold text-orange-600 uppercase tracking-widest">{about.title}</p>
          </div>
          <div className="md:w-2/3 space-y-6">
            <p className="text-xl leading-relaxed text-[#434656]">{about.description}</p>
            <p className="text-lg leading-relaxed text-[#434656]">{about.fullDescription}</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-headline font-extrabold mb-16">The Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {skills.map((skill) => (
          <div key={skill.id} className="bg-[#e5e2e1] p-8 rounded-2xl flex flex-col items-center gap-4 group hover:bg-orange-600 transition-colors duration-500">
            <span className={`material-symbols-outlined ${skill.iconClass}`}>
              <Image src={skill.icon} alt={skill.name} width={60} height={60} />
            </span>
            <span className="font-bold text-sm tracking-widest text-[#434656] group-hover:text-white uppercase text-center">
              {skill.name}
            </span>
          </div>
        ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-sm text-orange-600 font-bold tracking-widest uppercase">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold mt-2">Selected Works</h2>
          </div>
        </div>
        <div className="space-y-32">
          {projects.map((project, idx) => (
            <div key={project.id} className={`group flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
              <div className="flex-1 w-full overflow-hidden rounded-xl bg-[#f0edec] transition-transform duration-700 group-hover:scale-[1.02]">
                <Image src={project.imageUrl} alt={project.title} width={800} height={400} className="w-full h-[200px] object-cover" />
              </div>
              <div className="flex-1 space-y-6">
                <span className="text-orange-600 font-headline font-black text-6xl opacity-20">{String(idx + 1).padStart(2, '0')}</span>
                <h3 className="text-3xl font-headline font-bold">{project.title}</h3>
                <p className="text-lg text-[#434656] leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIdx) => (
                    <span key={techIdx} className="px-3 py-1 bg-orange-600/10 text-orange-600 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-4">
                  {project.links.map((link, linkIdx) => (
                    <Link key={linkIdx} href={link.url} className="inline-flex items-center gap-2 font-headline font-bold text-orange-600 group/link">
                      {link.label} <span className="material-symbols-outlined text-sm transition-transform group-hover/link:translate-x-1"></span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-[#f6f3f2] py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-headline font-extrabold mb-20 text-center">Professional Timeline</h2>
          <div className="max-w-4xl mx-auto">
            {experience.map((exp, idx) => (
              <div key={exp.id} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${idx === 0 ? 'bg-orange-600' : 'bg-[#5d5e64]'}`}>
                    {/* <span className="material-symbols-outlined">{idx === 0 ? 'leaderboard' : 'work'}</span> */}
                  </div>
                  {idx < experience.length - 1 && <div className="w-px flex-1 bg-[#c3c5d9]/30 my-2"></div>}
                </div>
                <div className="pb-12">
                  <span className="text-sm text-orange-600 font-bold">{exp.period}</span>
                  <h4 className="text-xl font-headline font-bold mt-2">{exp.title}</h4>
                  <p className="text-[#434656] font-medium">{exp.company}</p>
                  <p className="mt-4 text-[#434656] leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}