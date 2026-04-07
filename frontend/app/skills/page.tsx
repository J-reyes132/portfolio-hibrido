'use client';

import { skillsPageData } from '@/lib/data';

export default function SkillsPage() {
  const {
    hero,
    programming,
    coreCompetencies,
    engineering,
    databases,
    backendDevops,
    ecosystem,
    quote,
  } = skillsPageData;

  return (
    <main className="min-h-screen bg-[#F5F4F0] pt-24 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* ── Hero ── */}
        <section className="mb-16 flex flex-col md:flex-row gap-10 items-start">
          <div className="w-full md:w-2/3">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-gray-900 mb-5 leading-none">
              {hero.title}{' '}
              <span className="text-amber-500">{hero.subtitle.split(' ')[0]}</span>{' '}
              {hero.subtitle.split(' ').slice(1).join(' ')}
            </h1>
            <p className="text-base text-gray-500 max-w-lg leading-relaxed">
              {hero.description}
            </p>
          </div>
          <div className="w-full md:w-1/3 pt-2">
            <div className="bg-white rounded-2xl p-6 border-l-4 border-amber-400 shadow-sm">
              <span className="text-xs uppercase tracking-widest text-amber-500 font-bold mb-2 block">
                Core Philosophy
              </span>
              <p className="text-sm font-medium italic text-gray-700">{hero.quote}</p>
            </div>
          </div>
        </section>

        {/* ── Bento Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">

          {/* Programming — col 7 */}
          <div className="md:col-span-7 bg-white rounded-3xl p-8 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-amber-500 font-black text-xl">&lt;&gt;</span>
              <h2 className="text-2xl font-black text-gray-900 tracking-tight">
                {programming.title}
              </h2>
            </div>
            <p className="text-gray-500 text-sm mb-7 max-w-md leading-relaxed">
              {programming.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {programming.items.map((item, idx) => (
                <span
                  key={idx}
                  className="border border-amber-300 text-amber-600 bg-amber-50 px-4 py-1.5 rounded-full text-sm font-semibold"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Core Competencies — col 5 */}
          <div className="md:col-span-5 bg-[#ECEAE4] rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-amber-500">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </span>
                <h2 className="text-2xl font-black text-gray-900 tracking-tight">
                  {coreCompetencies.title}
                </h2>
              </div>
              <p className="text-gray-500 text-sm mb-7 leading-relaxed">
                {coreCompetencies.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {coreCompetencies.items.map((item, idx) => (
                <span
                  key={idx}
                  className="bg-white/60 text-gray-700 px-3 py-1.5 rounded-xl text-xs font-medium border border-white/80"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Engineering + Databases — col 4 */}
          <div className="md:col-span-4 bg-[#ECEAE4] rounded-3xl p-8 flex flex-col gap-9">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-amber-500">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
                  </svg>
                </span>
                <h2 className="text-xl font-black text-gray-900">{engineering.title}</h2>
              </div>
              <ul className="space-y-2">
                {engineering.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                    <span className="text-amber-500 font-black">/</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-amber-500">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4zM4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4S4 11.21 4 9zm0 5v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4S4 16.21 4 14z"/>
                  </svg>
                </span>
                <h2 className="text-xl font-black text-gray-900">{databases.title}</h2>
              </div>
              <ul className="space-y-2">
                {databases.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                    <span className="text-amber-500 font-black">/</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Backend & DevOps — col 5 */}
          <div className="md:col-span-5 bg-white rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-amber-500">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm-1 6H5v-4h14v4zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 6H5V5h14v4zM8 6H6v2h2V6zm0 8H6v2h2v-2z"/>
                </svg>
              </span>
              <h2 className="text-2xl font-black text-gray-900 tracking-tight">
                {backendDevops.title}
              </h2>
            </div>
            <p className="text-gray-500 text-sm mb-7 leading-relaxed">
              {backendDevops.description}
            </p>
            <div className="grid grid-cols-2 gap-y-4 gap-x-4">
              {backendDevops.items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm font-semibold text-gray-800">
                  <span className="text-amber-500">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Ecosystem — col 3 */}
          <div className="md:col-span-3 bg-[#ECEAE4] rounded-3xl p-8">
            <h3 className="text-lg font-black text-gray-900 mb-6">{ecosystem.title}</h3>
            <div className="space-y-5">
              {ecosystem.items.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    {item.name}
                  </span>
                  <span className="text-amber-500">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ── Quote ── */}
        <section className="mt-20 text-center">
          <div className="inline-block max-w-2xl px-12 py-14 bg-white rounded-3xl relative shadow-sm">
            <span className="text-6xl text-amber-200 absolute -top-5 -left-3 font-serif leading-none"></span>
            <h3 className="text-2xl font-black tracking-tight text-gray-900 mb-4 leading-snug">
              {quote.text}
            </h3>
            <p className="text-gray-400 font-medium text-sm">{quote.author}</p>
          </div>
        </section>

      </div>
    </main>
  );
}