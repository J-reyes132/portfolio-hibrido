'use client';

import { useState } from 'react';
import { usePageData } from '@/hooks/usePageData';
import { api } from '@/lib/api';
import type { ContactData } from '@/lib/types';

export default function ContactPage() {
  const { data, loading, error } = usePageData<ContactData>('/contact');
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('loading');
    const formData = new FormData(e.currentTarget);
    
    try {
      await api.post('/contact/submit', {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
      });
      setFormStatus('success');
      e.currentTarget.reset();
      setTimeout(() => setFormStatus('idle'), 3000);
    } catch {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 3000);
    }
  };

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

  const { hero, contactInfo, socialLinks, location } = data;

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
                    <span className="material-symbols-outlined">{info.icon}</span>
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
              <img src={location.imageUrl} alt={location.city} className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#ebe7e7]/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-sm">
                <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse"></span>
                <span className="text-xs font-bold tracking-wider">{location.city}, {location.country}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-[#e5e2e1] flex items-center justify-center text-orange-600 transition-colors group-hover:bg-orange-600 group-hover:text-white">
                <span className="material-symbols-outlined">share</span>
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
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-[#434656] px-1">Full Name</label>
                  <input type="text" name="name" required className="w-full px-6 py-4 rounded-2xl bg-[#f6f3f2] focus:ring-2 focus:ring-orange-600/20 transition-all placeholder:text-stone-400" placeholder="Juan Manuel Reyes Feliz" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-[#434656] px-1">Email Address</label>
                  <input type="email" name="email" required className="w-full px-6 py-4 rounded-2xl bg-[#f6f3f2] focus:ring-2 focus:ring-orange-600/20 transition-all placeholder:text-stone-400" placeholder="juanreyes1321@outlook.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-[#434656] px-1">Project Type</label>
                <select name="subject" className="w-full px-6 py-4 rounded-2xl bg-[#f6f3f2] focus:ring-2 focus:ring-orange-600/20 transition-all">
                  <option>Backend Development</option>
                  <option>API Architecture</option>
                  <option>Technical Consulting</option>
                  <option>Team Leadership</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-[#434656] px-1">How can I help you?</label>
                <textarea name="message" rows={6} required className="w-full px-6 py-4 rounded-2xl bg-[#f6f3f2] focus:ring-2 focus:ring-orange-600/20 transition-all placeholder:text-stone-400 resize-none" placeholder="Tell me about your vision, goals, and timeline..."></textarea>
              </div>
              <button type="submit" disabled={formStatus === 'loading'} className="w-full md:w-auto px-10 py-5 rounded-2xl bg-orange-600 text-white font-extrabold text-lg flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-orange-600/20 disabled:opacity-50">
                {formStatus === 'loading' ? 'Sending...' : 'Send Message'}
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              {formStatus === 'success' && (
                <p className="text-green-600 text-center">Message sent successfully! I&apos;ll get back to you soon.</p>
              )}
              {formStatus === 'error' && (
                <p className="text-red-600 text-center">Error sending message. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}