'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('loading');

    try {
      const formData = new FormData(e.currentTarget);
      const name = formData.get('name') as string;
      const email = formData.get('email') as string;
      const subject = formData.get('subject') as string;
      const message = formData.get('message') as string;

      const mailtoSubject = encodeURIComponent(`[${subject}] - Contact from ${name}`);
      const mailtoBody = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nProject Type: ${subject}\n\n${message}`
      );

      window.location.href = `mailto:juanreyes1321@outlook.com?subject=${mailtoSubject}&body=${mailtoBody}`;

      setFormStatus('success');
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="block text-sm font-bold text-[#434656] px-1">Full Name</label>
          <input type="text" name="name" required className="w-full px-6 py-4 rounded-2xl bg-[#f6f3f2] focus:ring-2 focus:ring-orange-600/20 transition-all placeholder:text-stone-400" placeholder="Your Name" />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-bold text-[#434656] px-1">Email Address</label>
          <input type="email" name="email" required className="w-full px-6 py-4 rounded-2xl bg-[#f6f3f2] focus:ring-2 focus:ring-orange-600/20 transition-all placeholder:text-stone-400" placeholder="your.email@example.com" />
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
        {formStatus === 'loading' ? 'Opening mail...' : 'Send Message'}
        <span>→</span>
      </button>

      {formStatus === 'success' && (
        <p className="text-green-600 text-center">Your mail client should have opened. Talk soon!</p>
      )}
      {formStatus === 'error' && (
        <p className="text-red-600 text-center">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}