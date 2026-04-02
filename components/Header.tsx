'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const menuItems = [
    { label: 'About', href: '#about', num: '01' },
    { label: 'Experience', href: '#experience', num: '02' },
    { label: 'Skills', href: '#skills', num: '03' },
    { label: 'Contact', href: '#contact', num: '04' },
  ];

  // Track scroll for header shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const ids = menuItems.map((m) => m.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.4 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className="fixed top-0 w-full z-50 transition-all duration-200"
      style={{
        background: '#F5F0E8',
        borderBottom: '4px solid #0D0D0D',
        boxShadow: scrolled ? '0 6px 0 #0D0D0D' : 'none',
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -2 }}
          className="relative group flex items-center gap-3"
          style={{ textDecoration: 'none' }}
        >
          {/* Logo box */}
          <div className="relative">
            {/* Shadow */}
            <div
              className="absolute inset-0 translate-x-[3px] translate-y-[3px]"
              style={{ background: '#0D0D0D' }}
            />
            <div
              className="relative px-3 py-1.5 flex items-center justify-center"
              style={{
                background: '#FFE500',
                border: '3px solid #0D0D0D',
              }}
            >
              <span
                className="text-xl font-black tracking-tighter leading-none"
                style={{
                  color: '#0D0D0D',
                  fontFamily: '"Arial Black", sans-serif',
                }}
              >
                JC
              </span>
            </div>
          </div>

          {/* Name beside logo */}
          <div className="hidden sm:block">
            <p
              className="text-xs font-black uppercase tracking-[0.2em] leading-none"
              style={{ color: '#0D0D0D', opacity: 0.4 }}
            >
              Portfolio
            </p>
            <p
              className="text-sm font-black uppercase tracking-wider leading-tight"
              style={{
                color: '#0D0D0D',
                fontFamily: '"Arial Black", sans-serif',
              }}
            >
              Jessica Callanta
            </p>
          </div>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {menuItems.map((item, i) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -2 }}
                className="relative group px-4 py-2 flex items-center gap-1.5"
                style={{ textDecoration: 'none' }}
              >
                {/* Active / hover bg */}
                {isActive && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0"
                    style={{
                      background: '#FFE500',
                      border: '2.5px solid #0D0D0D',
                      boxShadow: '2px 2px 0 #0D0D0D',
                    }}
                  />
                )}
                {!isActive && (
                  <span
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                    style={{
                      background: '#0D0D0D',
                      mixBlendMode: 'multiply',
                      opacity: 0,
                    }}
                  />
                )}

                <span
                  className="relative z-10 text-[10px] font-black"
                  style={{ color: isActive ? '#0D0D0D' : '#0D0D0D', opacity: isActive ? 1 : 0.35 }}
                >
                  {item.num}
                </span>
                <span
                  className="relative z-10 text-sm font-black uppercase tracking-wider"
                  style={{
                    color: '#0D0D0D',
                    fontFamily: '"Arial Black", sans-serif',
                    letterSpacing: '0.08em',
                  }}
                >
                  {item.label}
                </span>

                {/* Underline for non-active hover */}
                {!isActive && (
                  <span
                    className="absolute bottom-1.5 left-4 right-4 h-[2.5px] bg-current scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"
                    style={{ background: '#0D0D0D' }}
                  />
                )}
              </motion.a>
            );
          })}

          {/* Hire Me CTA */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ y: -3 }}
            className="relative ml-4 group"
            style={{ textDecoration: 'none' }}
          >
            <div
              className="absolute inset-0 translate-x-[3px] translate-y-[3px]"
              style={{ background: '#0D0D0D' }}
            />
            <div
              className="relative px-5 py-2.5 flex items-center gap-2 transition-colors duration-150 group-hover:bg-[#0D0D0D]"
              style={{
                background: '#0D0D0D',
                border: '2.5px solid #0D0D0D',
              }}
            >
              <span
                className="text-sm font-black uppercase tracking-widest transition-colors duration-150"
                style={{
                  color: '#FFE500',
                  fontFamily: '"Arial Black", sans-serif',
                }}
              >
                Hire Me
              </span>
              <span style={{ color: '#FFE500' }}>↗</span>
            </div>
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.93 }}
          className="md:hidden relative flex flex-col justify-center items-center w-11 h-11"
          style={{
            border: '2.5px solid #0D0D0D',
            background: isOpen ? '#0D0D0D' : '#FFE500',
            boxShadow: '3px 3px 0 #0D0D0D',
          }}
          aria-label="Toggle menu"
        >
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
            className="w-5 h-[2.5px] absolute"
            style={{ background: isOpen ? '#FFE500' : '#0D0D0D' }}
          />
          <motion.div
            animate={{ opacity: isOpen ? 0 : 1, scaleX: isOpen ? 0 : 1 }}
            className="w-5 h-[2.5px] absolute"
            style={{ background: '#0D0D0D' }}
          />
          <motion.div
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
            className="w-5 h-[2.5px] absolute"
            style={{ background: isOpen ? '#FFE500' : '#0D0D0D' }}
          />
        </motion.button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="md:hidden overflow-hidden"
        style={{ borderTop: isOpen ? '3px solid #0D0D0D' : 'none' }}
      >
        <div
          className="px-6 py-6 flex flex-col gap-2"
          style={{ background: '#F5F0E8' }}
        >
          {menuItems.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ x: -16, opacity: 0 }}
              animate={isOpen ? { x: 0, opacity: 1 } : { x: -16, opacity: 0 }}
              transition={{ delay: i * 0.07, duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-4 px-4 py-3 group"
              style={{
                border: '2.5px solid #0D0D0D',
                background: '#FAFAF7',
                boxShadow: '3px 3px 0 #0D0D0D',
                textDecoration: 'none',
              }}
            >
              <span
                className="text-xs font-black"
                style={{ color: '#0D0D0D', opacity: 0.35 }}
              >
                {item.num}
              </span>
              <span
                className="text-base font-black uppercase tracking-wider"
                style={{
                  color: '#0D0D0D',
                  fontFamily: '"Arial Black", sans-serif',
                }}
              >
                {item.label}
              </span>
              <span className="ml-auto" style={{ color: '#0D0D0D', opacity: 0.4 }}>→</span>
            </motion.a>
          ))}

          {/* Mobile Hire Me */}
          <motion.a
            href="#contact"
            initial={{ x: -16, opacity: 0 }}
            animate={isOpen ? { x: 0, opacity: 1 } : { x: -16, opacity: 0 }}
            transition={{ delay: menuItems.length * 0.07, duration: 0.3 }}
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-3 px-4 py-3 mt-2"
            style={{
              border: '2.5px solid #0D0D0D',
              background: '#FFE500',
              boxShadow: '3px 3px 0 #0D0D0D',
              textDecoration: 'none',
            }}
          >
            <span
              className="text-base font-black uppercase tracking-widest"
              style={{
                color: '#0D0D0D',
                fontFamily: '"Arial Black", sans-serif',
              }}
            >
              Hire Me ↗
            </span>
          </motion.a>
        </div>
      </motion.div>
    </header>
  );
}