'use client';

import Image from 'next/image';
import { architectureData } from '@/lib/data';

export default function ArchitecturePage() {
  const { header, overview, frontend, backend, fileStructure, cta } = architectureData;

  return (
    <main className="xl:ml-64 pt-32 pb-20 px-8 max-w-7xl">
      {/* Sidebar */}
      <aside className="fixed left-0 top-20 h-[calc(100vh-5rem)] w-64 bg-neutral-50 hidden xl:flex flex-col p-4 gap-2 text-sm">
        <div className="mb-6 px-2">
          <p className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">System Design</p>
          <p className="text-xs text-orange-600 font-medium">v2.1.0 Stable</p>
        </div>
        <a href="#overview" className="flex items-center gap-3 p-3 text-neutral-500 hover:bg-neutral-100 hover:translate-x-1 transition-transform duration-200">
          <span className="material-symbols-outlined">code</span>
          <span>Frontend</span>
        </a>
        <a href="#backend" className="flex items-center gap-3 p-3 text-neutral-500 hover:bg-neutral-100 hover:translate-x-1 transition-transform duration-200">
          <span className="material-symbols-outlined">settings_ethernet</span>
          <span>Backend</span>
        </a>
        <a href="#infrastructure" className="flex items-center gap-3 p-3 text-neutral-500 hover:bg-neutral-100 hover:translate-x-1 transition-transform duration-200">
          <span className="material-symbols-outlined">cloud</span>
          <span>Infrastructure</span>
        </a>
        <a href="#files" className="flex items-center gap-3 p-3 bg-neutral-200 text-orange-600 font-medium rounded-lg hover:translate-x-1 transition-transform duration-200">
          <span className="material-symbols-outlined">folder_open</span>
          <span>Files</span>
        </a>
      </aside>

      {/* Header */}
      <header className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600 mb-4 block">{header.badge}</span>
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter leading-none">
            {header.title} <br /><span className="text-orange-600">{header.highlight}</span>
          </h1>
        </div>
        <div className="max-w-xs text-[#434656] text-lg leading-relaxed border-l-2 border-orange-600 pl-6 italic">
          {header.description}
        </div>
      </header>

      {/* Overview Section */}
      <section className="mb-32" id="overview">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <span className="w-12 h-[2px] bg-orange-600"></span>
          01. {overview.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 bg-[#f0edec] rounded-3xl p-10 relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6">{overview.title}</h3>
              <p className="text-[#434656] max-w-lg mb-10">{overview.description}</p>
              <div className="flex items-center justify-between gap-4 p-8 bg-white/40 rounded-2xl border border-white/20 backdrop-blur-md">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-full bg-orange-600 flex items-center justify-center text-white">
                    <span className="material-symbols-outlined text-3xl">devices</span>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest">Client</span>
                </div>
                <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-600 to-amber-500 relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full text-[10px] font-bold shadow-sm">HTTPS / JSON</div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center text-white">
                    <span className="material-symbols-outlined text-3xl">storage</span>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest">Laravel API</span>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="bg-[#dfdfe6] p-8 rounded-3xl flex-1">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#45474c]">Frontend Core</span>
              <div className="mt-4 flex flex-wrap gap-2">
                {overview.frontendTech.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full bg-white text-xs font-medium">{tech}</span>
                ))}
              </div>
            </div>
            <div className="bg-orange-100 p-8 rounded-3xl flex-1">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#78350f]">Backend Core</span>
              <div className="mt-4 flex flex-wrap gap-2">
                {overview.backendTech.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full bg-white text-xs font-medium">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frontend Section */}
      <section className="mb-32" id="frontend">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <span className="w-12 h-[2px] bg-orange-600"></span>
          02. {frontend.title}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            {frontend.features.map((feature, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-[#f0edec] transition-all hover:bg-[#fcf9f8]">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-orange-600 text-3xl">{feature.icon}</span>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                    <p className="text-[#434656] text-lg">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[#e5e2e1] rounded-3xl p-1 aspect-square md:aspect-video lg:aspect-square relative overflow-hidden group">
            <Image src={frontend.imageUrl} alt="Coding Interface" width={800} height={800} className="w-full h-full object-cover rounded-[22px] transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1c1b1b]/80 via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-white text-sm font-bold uppercase tracking-widest mb-2">Structure Highlight</p>
              <p className="text-white/80 text-xl font-medium">{frontend.imageCaption}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Backend Section */}
      <section className="mb-32" id="backend">
        <div className="bg-[#1c1b1b] text-[#fcf9f8] p-12 md:p-20 rounded-[3rem] relative overflow-hidden">
          <div className="relative z-10 max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8">
              03. {backend.title}: <span className="text-orange-600">{backend.highlight}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {backend.features.map((feature, idx) => (
                <div key={idx} className="space-y-4">
                  <div className="text-orange-600">
                    <span className="material-symbols-outlined text-4xl">{feature.icon}</span>
                  </div>
                  <h4 className="text-xl font-bold">{feature.title}</h4>
                  <p className="text-[#dcd9d9] text-base leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-600/10 -skew-x-12 translate-x-1/4"></div>
        </div>
      </section>

      {/* File Structure */}
      <section className="mb-32" id="files">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <span className="w-12 h-[2px] bg-orange-600"></span>
          04. Directory Orchestration
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#f0edec] rounded-3xl p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-orange-600/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-orange-600">folder_zip</span>
              </div>
              <div>
                <h3 className="font-bold">frontend/</h3>
                <p className="text-[10px] text-orange-600 uppercase font-bold tracking-widest">Next.js Project</p>
              </div>
            </div>
            <div className="space-y-3 font-mono text-sm text-[#434656]">
              {fileStructure.frontend.map((item, idx) => (
                <div key={idx} className={`flex items-center gap-2 border-l border-[#c3c5d9]/30 ${
                  idx === 0 ? 'pl-4' : idx === 1 ? 'pl-8' : idx === 2 ? 'pl-8' : idx === 3 ? 'pl-4' : idx === 4 ? 'pl-8' : idx === 5 ? 'pl-8' : idx === 6 ? 'pl-4' : idx === 7 ? 'pl-4' : 'pl-4'
                }`}>
                  <span className="text-orange-600 opacity-50">{item.type === 'folder' ? '📂' : '📄'}</span>
                  {item.name}
                  {item.type === 'folder' && <span className="text-[10px] bg-orange-600/10 px-2 py-0.5 rounded text-orange-600">Folder</span>}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#f0edec] rounded-3xl p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-orange-600/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-orange-600">folder_managed</span>
              </div>
              <div>
                <h3 className="font-bold">backend/</h3>
                <p className="text-[10px] text-orange-600 uppercase font-bold tracking-widest">Laravel 11 API</p>
              </div>
            </div>
            <div className="space-y-3 font-mono text-sm text-[#434656]">
              {fileStructure.backend.map((item, idx) => (
                <div key={idx} className={`flex items-center gap-2 border-l border-[#c3c5d9]/30 ${
                  idx === 0 ? 'pl-4' : idx === 1 ? 'pl-8' : idx === 2 ? 'pl-8' : idx === 3 ? 'pl-4' : idx === 4 ? 'pl-8' : idx === 5 ? 'pl-8' : idx === 6 ? 'pl-4' : idx === 7 ? 'pl-8' : 'pl-4'
                }`}>
                  <span className="text-orange-600 opacity-50">{item.type === 'folder' ? '📂' : '📄'}</span>
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mb-20">
        <div className="bg-[#f0edec] rounded-[2.5rem] p-12 text-center flex flex-col items-center">
          <h3 className="text-3xl font-bold mb-4">{cta.title}</h3>
          <p className="text-[#434656] max-w-xl mb-8 text-lg">{cta.description}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-br from-orange-600 to-amber-500 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:shadow-xl hover:shadow-orange-600/20 transition-all">
              <span className="material-symbols-outlined">terminal</span>
              {cta.primaryButtonText}
            </button>
            <button className="bg-white border border-[#c3c5d9]/30 text-[#1c1b1b] px-8 py-4 rounded-xl font-bold hover:bg-neutral-50 transition-colors">
              {cta.secondaryButtonText}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}