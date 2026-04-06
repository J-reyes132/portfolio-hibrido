'use client';

import { useState } from 'react';
import Image from 'next/image';
import { contactData } from '@/lib/data';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  const { hero, contactInfo, socialLinks, location } = contactData;
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('loading');
    
    // Simular envío (ya que no hay API)
    setTimeout(() => {
      setFormStatus('success');
      e.currentTarget.reset();
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <main className="pt-32 pb-24 hero-gradient">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="mb-20 max-w-3xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-600/10 text-orange-600 text-xs font-bold tracking-widest uppercase mb-6">
            {hero.badge}
          </span>
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter leading-[1.1] mb-8">
            {hero.title} <span className="text-orange-600">{hero.highlight}</span>
          </h1>
          <p className="text-xl text-[#434656] leading-relaxed max-w-2xl">{hero.description}</p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-10">
              {contactInfo.map((info) => (
                <div key={info.id} className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-[#e5e2e1] flex items-center justify-center text-orange-600 transition-colors group-hover:bg-orange-600 group-hover:text-white">
                    <Image src={info.icon} alt={info.title} width={24} height={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{info.title}</h3>
                    <p className="text-[#434656] mb-2">{info.subtitle}</p>
                    {info.link ? (
                      <a href={info.link} className="text-orange-600 font-bold text-lg hover:underline decoration-2 underline-offset-4">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-orange-600 font-bold text-lg">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Location Image */}
            <div className="relative rounded-3xl overflow-hidden h-64 bg-[#ebe7e7]">
              <Image src={location.imageUrl} alt={location.city} width={800} height={400} className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#ebe7e7]/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-sm">
                <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse"></span>
                <span className="text-xs font-bold tracking-wider">{location.city}, {location.country}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-[#e5e2e1] flex items-center justify-center text-orange-600 transition-colors group-hover:bg-orange-600 group-hover:text-white">
                <Image src='/icons/connect.png' alt={socialLinks[0].name} width={24} height={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Digital Presence</h3>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((link) => (
                    <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full bg-[#f6f3f2] border border-[#c3c5d9]/10 font-semibold hover:bg-orange-600 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
              <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.03)] border border-[#c3c5d9]/10">
      <ContactForm />
    </div>
        </div>
      </div>
    </main>
  );
}