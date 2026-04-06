'use client';

import Image from 'next/image';
import Link from 'next/link';
import { aboutData } from '@/lib/data';
import { DownloadCVButton } from '@/components/DownloadCVButton';

export default function AboutPage() {
  const { hero, education, philosophy, personal, cta } = aboutData;

  return (
    <>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-20 flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2 relative">
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-600/10 rounded-full blur-3xl"></div>
          <Image 
            src={hero.imageUrl} 
            alt="Professional portrait" 
            width={600}
            height={600}
            className="w-full h-150 object-cover rounded-xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-orange-600/5 rounded-full blur-3xl"></div>
        </div>
        <div className="w-full md:w-1/2">
          <span className="text-orange-600 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">{hero.badge}</span>
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter leading-tight mb-8">
            {hero.title} <span className="text-orange-600 italic">{hero.lastName}</span>.
          </h1>
          <p className="text-lg text-[#434656] leading-relaxed mb-8 max-w-lg">{hero.description}</p>
          <div className="flex gap-4">
            <div className="h-px w-12 bg-orange-600 mt-4"></div>
            <p className="text-stone-500 font-medium italic">{hero.location}</p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="bg-[#f6f3f2] py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h2 className="text-4xl font-bold tracking-tight text-stone-900">Education &amp; Certs</h2>
              <p className="text-orange-600 mt-4 font-bold">Academic Foundation</p>
            </div>
            <div className="md:col-span-8 space-y-12">
              {education.map((item) => (
                <div key={item.id} className="flex gap-8 group">
                  <span className="text-4xl font-black text-stone-200 group-hover:text-orange-600 transition-colors">{item.number}</span>
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-orange-600 transition-colors">{item.title}</h3>
                    <p className="text-stone-900 font-semibold">{item.subtitle}</p>
                    <p className="text-[#434656] leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold tracking-tight mb-4">Engineering Philosophy</h2>
          <div className="h-1 w-20 bg-orange-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {philosophy.map((item) => {
            const variantClasses = {
              default: 'md:col-span-2 bg-[#e5e2e1] p-12 rounded-xl flex flex-col justify-between hover:border-orange-600/30 border border-transparent transition-all',
              highlight: 'bg-orange-600 text-white p-12 rounded-xl flex flex-col justify-between relative overflow-hidden',
              light: 'bg-[#f0edec] p-12 rounded-xl flex flex-col justify-between border border-[#c3c5d9]/10 hover:border-orange-600/30 transition-all',
            };
            return (
              <div key={item.id} className={variantClasses[item.variant as keyof typeof variantClasses]}>
                <Image src={item.icon} alt={item.title} width={60} height={60} />
                <div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Personal Section */}
      <section className="bg-[#fcf9f8] py-32 border-t border-[#c3c5d9]/5">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-end gap-12">
          <div className="w-full md:w-1/3">
            <h2 className="text-8xl font-black text-orange-600/10 leading-none mb-4">Beyond</h2>
            <h3 className="text-3xl font-bold text-stone-900 px-2">The Terminal</h3>
            <p className="mt-8 text-[#434656] px-2">When I&apos;m not coding or debugging, I&apos;m out finding inspiration in the real world.</p>
          </div>
          <div className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-4">
            {personal.map((item, idx) => (
              <div key={item.id} className={`space-y-4 ${idx === 1 || idx === 3 ? 'pt-8' : ''}`}>
                <Image src={item.imageUrl} alt={item.label} width={300} height={400} className="w-full aspect-[3/4] object-cover rounded-xl hover:ring-4 hover:ring-orange-600/20 transition-all" />
                <span className="text-xs font-bold text-orange-600 uppercase tracking-widest block text-center">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 text-center max-w-4xl mx-auto px-8">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
          {cta.title} <span className="text-orange-600">{cta.highlightText}</span>
        </h2>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link href={cta.primaryButtonLink} className="bg-orange-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/20 text-center">
            {cta.primaryButtonText} 
          </Link>
          <DownloadCVButton variant="secondary" />

        </div>
      </section>
    </>
  );
}