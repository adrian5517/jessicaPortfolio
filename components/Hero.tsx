'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useRef } from 'react';
import HeroVisual from './HeroVisual';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.13, delayChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      ref={ref}
      className="min-h-screen pt-28 pb-16 flex items-center justify-center px-6 relative overflow-hidden"
      style={{
        background: '#F5F0E8',
        borderBottom: '4px solid #0D0D0D',
      }}
    >
      {/* Background dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(13,13,13,0.12) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Decorative corner stamp */}
      <div
        className="absolute top-28 right-8 md:right-16 hidden sm:block"
        style={{
          border: '3px solid #0D0D0D',
          background: '#FF3B3B',
          boxShadow: '4px 4px 0 #0D0D0D',
          padding: '6px 12px',
          transform: 'rotate(3deg)',
        }}
      >
        <p className="text-[9px] font-black uppercase tracking-[0.25em] text-white">
          Available for Hire
        </p>
      </div>

      <motion.div
        style={{ y: contentY }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl w-full z-10 relative grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
      >
        {/* ── Left column ── */}
        <div>

          {/* Experience badge */}
          <motion.div variants={itemVariants} className="mb-10">
            <div className="relative inline-block">
              <div
                className="absolute inset-0 translate-x-[4px] translate-y-[4px]"
                style={{ background: '#0D0D0D' }}
              />
              <div
                className="relative flex items-center gap-3 px-5 py-3"
                style={{
                  border: '3px solid #0D0D0D',
                  background: '#FAFAF7',
                }}
              >
                {/* Pulsing dot */}
                <span className="relative flex h-3 w-3">
                  <span
                    className="animate-ping absolute inline-flex h-full w-full opacity-60"
                    style={{ background: '#00D084', borderRadius: '50%' }}
                  />
                  <span
                    className="relative inline-flex h-3 w-3"
                    style={{ background: '#00D084', borderRadius: '50%', border: '1.5px solid #0D0D0D' }}
                  />
                </span>
                <span
                  className="text-sm font-black uppercase tracking-widest"
                  style={{ color: '#0D0D0D', fontFamily: '"Arial Black", sans-serif' }}
                >
                  <span style={{ color: '#0D0D0D' }}>2+</span> Years Experience
                </span>
              </div>
            </div>
          </motion.div>

          {/* Role label */}
          <motion.div variants={itemVariants} className="mb-3">
            <div className="flex items-center gap-3">
              <div className="h-[3px] w-8" style={{ background: '#FFE500', border: '1px solid #0D0D0D' }} />
              <p
                className="text-xs font-black uppercase tracking-[0.3em]"
                style={{ color: '#0D0D0D', opacity: 0.5 }}
              >
                Accounting Professional
              </p>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.div variants={itemVariants} className="mb-8">
            <h1
              className="text-7xl md:text-8xl lg:text-[90px] font-black leading-none tracking-tighter"
              style={{
                color: '#0D0D0D',
                fontFamily: '"Arial Black", sans-serif',
              }}
            >
              Jessica
              <br />
              <span className="relative inline-block">
                {/* Yellow highlight behind surname */}
                <motion.span
                  className="absolute bottom-2 left-0 right-0 h-5 -z-10"
                  style={{ background: '#FFE500', border: '2px solid #0D0D0D' }}
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.9, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
                Callanta
              </span>
            </h1>
          </motion.div>

          {/* Bio */}
          <motion.div variants={itemVariants} className="mb-10 max-w-lg">
            <div
              className="pl-4"
              style={{ borderLeft: '4px solid #0D0D0D' }}
            >
              <p
                className="text-base leading-relaxed font-medium"
                style={{ color: '#0D0D0D', opacity: 0.72 }}
              >
                Specialized in accounts payable/receivable and financial operations.
                Delivering precise, detail-oriented solutions with expertise in
                corporate accounting and seamless team coordination.
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            {/* Primary */}
            <motion.a
              href="#experience"
              className="relative group"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              style={{ textDecoration: 'none' }}
            >
              <div
                className="absolute inset-0 translate-x-[5px] translate-y-[5px]"
                style={{ background: '#0D0D0D' }}
              />
              <div
                className="relative px-8 py-4 flex items-center gap-3 transition-colors duration-150 group-hover:bg-[#FFE500]"
                style={{
                  background: '#0D0D0D',
                  border: '3px solid #0D0D0D',
                }}
              >
                <span
                  className="text-sm font-black uppercase tracking-widest transition-colors duration-150 group-hover:text-[#0D0D0D]"
                  style={{ color: '#FFE500', fontFamily: '"Arial Black", sans-serif' }}
                >
                  View Experience
                </span>
                <span className="transition-colors duration-150 group-hover:text-[#0D0D0D]" style={{ color: '#FFE500' }}>→</span>
              </div>
            </motion.a>

            {/* Secondary */}
            <motion.a
              href="#contact"
              className="relative group"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              style={{ textDecoration: 'none' }}
            >
              <div
                className="absolute inset-0 translate-x-[5px] translate-y-[5px]"
                style={{ background: '#0D0D0D' }}
              />
              <div
                className="relative px-8 py-4 flex items-center gap-3 transition-colors duration-150 group-hover:bg-[#0D0D0D]"
                style={{
                  background: '#FAFAF7',
                  border: '3px solid #0D0D0D',
                }}
              >
                <span
                  className="text-sm font-black uppercase tracking-widest transition-colors duration-150 group-hover:text-white"
                  style={{ color: '#0D0D0D', fontFamily: '"Arial Black", sans-serif' }}
                >
                  Contact Now
                </span>
                <span className="transition-colors duration-150 group-hover:text-white" style={{ color: '#0D0D0D' }}>↗</span>
              </div>
            </motion.a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            variants={itemVariants}
            className="mt-16 flex items-center gap-4"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div
                className="p-3"
                style={{
                  border: '3px solid #0D0D0D',
                  background: '#FFE500',
                  boxShadow: '3px 3px 0 #0D0D0D',
                }}
              >
                <ArrowDown size={18} color="#0D0D0D" strokeWidth={3} />
              </div>
            </motion.div>
            <p
              className="text-[10px] font-black uppercase tracking-[0.3em]"
              style={{ color: '#0D0D0D', opacity: 0.4 }}
            >
              Scroll to explore
            </p>
          </motion.div>
        </div>

        {/* ── Right column: portrait ── */}
        <motion.div
          variants={itemVariants}
          className="hidden lg:flex justify-center items-center"
        >
          <HeroVisual />
        </motion.div>
      </motion.div>
    </section>
  );
}