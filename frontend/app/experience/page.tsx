'use client';

import { usePageData } from '@/hooks/usePageData';
import type { ExperienceData } from '@/lib/types';

export default function ExperiencePage() {
  const { data, loading, error } = usePageData<ExperienceData>('/experience');

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

  const { header, roles, cta } = data;

  return (
    <main className="pt-32 pb-24 px-8 max-w-7xl mx-auto">
      {/* Header */}
      <header className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
        <div className="max-w-2xl">
          <span className="tracking-[0.2em] uppercase font-bold text-orange-600 block mb-4">{header.badge}</span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-none mb-6">
            {header.title} <br /><span className="text-orange-600">{header.highlight}</span>
          </h1>
        </div>
        <div className="max-w-sm text-[#434656] text-lg leading-relaxed">{header.description}</div>
      </header>

      {/* Timeline */}
      <div className="space-y-32">
        {roles.map((role) => (
          <section key={role.id} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4 sticky top-32">
              <div className="bg-[#f6f3f2] p-8 rounded-2xl">
                <img src={role.logoUrl} alt={role.company} className="w-16 h-16 object-contain mb-8 rounded-lg" />
                <h2 className="text-2xl font-bold mb-2">{role.title}</h2>
                <p className="text-stone-500 font-medium mb-6">{role.company}</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600/10 rounded-full">
                  <span className="material-symbols-outlined text-orange-600 scale-75">calendar_today</span>
                  <span className="text-sm font-bold text-orange-600">{role.period}</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-8 space-y-8">
              <p className="text-lg text-[#434656] leading-relaxed">{role.description}</p>
              <ul className="space-y-4">
                {role.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="bg-orange-600 w-2 h-2 rounded-full mt-2.5 flex-shrink-0"></span>
                    <span className="text-[#434656]">{achievement}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 pt-4">
                {role.technologies.map((tech, idx) => (
                  <span key={idx} className="px-4 py-1.5 bg-[#dfdfe6] text-[#616268] rounded-full text-xs font-bold uppercase tracking-wider">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="mt-48 bg-white p-12 rounded-3xl text-center shadow-xl shadow-stone-100/50">
        <h3 className="text-3xl font-bold mb-4">{cta.title}</h3>
        <p className="text-lg text-[#434656] mb-8 max-w-lg mx-auto">{cta.description}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-gradient-to-br from-orange-600 to-amber-500 text-white px-8 py-4 rounded-xl font-bold transition-all hover:-translate-y-1">
            {cta.primaryButtonText}
          </button>
          <button className="bg-[#e5e2e1] text-[#1c1b1b] px-8 py-4 rounded-xl font-bold transition-all hover:-translate-y-1">
            {cta.secondaryButtonText}
          </button>
        </div>
      </section>
    </main>
  );
}