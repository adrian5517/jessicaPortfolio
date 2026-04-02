'use client';

import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:jesscallanta27@gmail.com',
      accent: '#FFE500',
      external: false,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/jessica-callanta-b5b347283/',
      accent: '#3B82F6',
      external: true,
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative py-20 px-6 overflow-hidden"
      style={{
        background: '#0D0D0D',
        borderTop: '4px solid #FFE500',
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <motion.div
        className="absolute -top-6 right-14 w-24 h-24 hidden md:block"
        style={{
          background: '#FFE500',
          border: '3px solid #0D0D0D',
          boxShadow: '5px 5px 0 #FFE500',
        }}
        animate={{ rotate: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute bottom-10 left-4 w-14 h-14 hidden md:block"
        style={{
          background: '#FF3B3B',
          border: '3px solid #FFE500',
        }}
        animate={{ y: [0, -8, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative max-w-6xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p
              className="text-xs font-black uppercase tracking-[0.3em] mb-2"
              style={{ color: 'rgba(255,255,255,0.35)' }}
            >
              End Section
            </p>
            <h3
              className="text-4xl md:text-5xl font-black tracking-tight leading-none"
              style={{ color: '#fff', fontFamily: '"Arial Black", sans-serif' }}
            >
              LET&apos;S CONNECT
            </h3>
          </div>

          <motion.div
            className="inline-flex px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.24em]"
            style={{
              background: '#FFE500',
              border: '3px solid #0D0D0D',
              boxShadow: '4px 4px 0 #0D0D0D',
              color: '#0D0D0D',
            }}
            whileHover={{ y: -2 }}
          >
            06 / Footer
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-12">
          {socialLinks.map((link, idx) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={idx}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
                aria-label={link.label}
              >
                <div
                  className="absolute inset-0 translate-x-[4px] translate-y-[4px]"
                  style={{ background: '#FFE500' }}
                />
                <div
                  className="relative px-5 py-4 flex items-center gap-3"
                  style={{
                    border: '3px solid #FFE500',
                    background: '#0D0D0D',
                    color: '#fff',
                  }}
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center"
                    style={{
                      background: link.accent,
                      border: '2px solid #0D0D0D',
                    }}
                  >
                    <Icon size={18} color="#0D0D0D" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/55">Channel</p>
                    <p className="text-sm font-black uppercase tracking-wider text-white">{link.label}</p>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        <div className="h-[3px] mb-8" style={{ background: 'rgba(255,255,255,0.18)' }} />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left md:flex md:items-center md:justify-between gap-6"
        >
          <div>
            <p className="font-black uppercase text-sm tracking-widest mb-1" style={{ color: '#fff' }}>Jessica Callanta</p>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.58)' }}>
              Accounting & Operations Professional
            </p>
          </div>
          <p className="text-xs font-black uppercase tracking-[0.18em]" style={{ color: 'rgba(255,255,255,0.45)' }}>
            © {currentYear} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
