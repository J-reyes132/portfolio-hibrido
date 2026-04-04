'use client';

import { usePageData } from '@/hooks/usePageData';
import type { SkillsData } from '@/lib/types';

export default function SkillsPage() {
  const { data, loading, error } = usePageData<SkillsData>('/skills');

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-600"></div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-600 text-center">
          <p className="text-xl font-bold">Error loading data</p>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  const { hero, programmingLanguages, coreCompetencies, backendDevops, databases, engineering } = data;

  return (
    <main className="pt-32 pb-24 px-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="mb-24 flex flex-col md:flex-row gap-12 items-start">
        <div className="w-full md:w-2/3">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">
            {hero.title} <span className="text-orange-600">{hero.subtitle}</span>
          </h1>
          <p className="text-lg text-[#434656] max-w-xl leading-relaxed">{hero.description}</p>
        </div>
        <div className="w-full md:w-1/3 pt-4">
          <div className="bg-[#f6f3f2] rounded-xl p-6 border-l-4 border-orange-600">
            <span className="text-xs uppercase tracking-widest text-orange-600 font-bold mb-2 block">Core Philosophy</span>
            <p className="text-sm font-medium italic text-[#1c1b1b]">{hero.quote}</p>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Programming Languages */}
        <div className="md:col-span-7 bg-[#f6f3f2] p-8 rounded-xl relative overflow-hidden group">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-orange-600">code</span>
              <h2 className="text-2xl font-bold tracking-tight">Programming</h2>
            </div>
            <p className="text-[#434656] mb-8 max-w-md">Versatile polyglot with deep expertise in modern web languages and systems programming.</p>
            <div className="flex flex-wrap gap-2">
              {programmingLanguages.map((lang, idx) => (
                <span key={idx} className="bg-orange-600/10 text-orange-600 px-4 py-2 rounded-lg text-sm font-bold">{lang}</span>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-orange-600/5 rounded-full blur-3xl group-hover:bg-orange-600/10 transition-colors duration-500"></div>
        </div>

        {/* Core Competencies */}
        <div className="md:col-span-5 bg-[#e5e2e1] p-8 rounded-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-orange-600">verified</span>
              <h2 className="text-2xl font-bold tracking-tight">Core Competencies</h2>
            </div>
            <p className="text-[#434656] mb-6 text-sm">Strategic technical focus areas for building high-scale industrial applications.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {coreCompetencies.map((comp, idx) => (
              <span key={idx} className="bg-[#dfdfe6] text-[#616268] px-3 py-1.5 rounded-lg text-xs font-medium">{comp}</span>
            ))}
          </div>
        </div>

        {/* Software Engineering */}
        <div className="md:col-span-4 bg-[#e5e2e1] p-8 rounded-xl flex flex-col gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-orange-600">architecture</span>
              <h2 className="text-xl font-bold">Engineering</h2>
            </div>
            <ul className="space-y-2 text-sm">
              {engineering.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2"><span className="text-orange-600 font-bold">/</span> {item}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-orange-600">database</span>
              <h2 className="text-xl font-bold">Databases</h2>
            </div>
            <ul className="space-y-2 text-sm">
              {databases.map((db, idx) => (
                <li key={idx} className="flex items-center gap-2"><span className="text-orange-600 font-bold">/</span> {db}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Backend & DevOps */}
        <div className="md:col-span-8 bg-[#f6f3f2] p-8 rounded-xl relative overflow-hidden group">
          <div className="relative z-10 flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-orange-600">dns</span>
                <h2 className="text-2xl font-bold tracking-tight">Backend &amp; DevOps</h2>
              </div>
              <p className="text-[#434656] mb-6 text-sm">Architecting robust server-side logic and automated deployment pipelines.</p>
              <div className="grid grid-cols-2 gap-y-4 text-sm font-semibold">
                {backendDevops.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-stone-400 text-sm">check_circle</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="bg-[#fcf9f8] rounded-xl p-6">
                <h3 className="font-bold text-lg mb-4">Core Ecosystem</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-medium text-stone-500 uppercase tracking-wider">REST APIs &amp; Microservices</span>
                    <span className="material-symbols-outlined text-orange-600">hub</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-medium text-stone-500 uppercase tracking-wider">Swagger Documentation</span>
                    <span className="material-symbols-outlined text-orange-600">description</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-medium text-stone-500 uppercase tracking-wider">Git &amp; Jira Workflow</span>
                    <span className="material-symbols-outlined text-orange-600">settings_suggest</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <section className="mt-24 text-center">
        <div className="inline-block max-w-2xl px-12 py-16 bg-white rounded-3xl relative">
          <span className="material-symbols-outlined text-6xl text-orange-600/20 absolute -top-4 -left-4">format_quote</span>
          <h3 className="text-3xl font-bold tracking-tight text-[#1c1b1b] mb-6">{hero.quote}</h3>
          <p className="text-stone-500 font-medium">{hero.quoteAuthor}</p>
        </div>
      </section>
    </main>
  );
}