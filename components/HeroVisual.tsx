'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function HeroVisual() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const rotateY = useTransform(scrollYProgress, [0, 1], [-8, 8]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 1.04]);

  return (
    <div ref={containerRef} className="relative w-full max-w-md mx-auto select-none">

      {/* ── Decorative background shapes ── */}
      {/* Large yellow square – top-right offset */}
      <motion.div
        className="absolute -top-6 -right-6 w-40 h-40"
        style={{
          background: '#FFE500',
          border: '3px solid #0D0D0D',
          zIndex: 0,
        }}
        animate={{ rotate: [3, 6, 3] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Small black square – bottom-left */}
      <motion.div
        className="absolute -bottom-4 -left-4 w-16 h-16"
        style={{
          background: '#0D0D0D',
          zIndex: 0,
        }}
        animate={{ rotate: [-4, -8, -4] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {/* Red accent dot – top-left */}
      <motion.div
        className="absolute top-8 -left-8 w-10 h-10"
        style={{
          background: '#FF3B3B',
          border: '2.5px solid #0D0D0D',
          zIndex: 0,
        }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* ── Main portrait card ── */}
      <motion.div
        style={{ rotateY, scale, perspective: '1000px', position: 'relative', zIndex: 1 }}
        className="relative"
      >
        {/* Hard shadow layer */}
        <div
          className="absolute inset-0 translate-x-[8px] translate-y-[8px]"
          style={{ background: '#0D0D0D', zIndex: 0 }}
        />

        {/* Card */}
        <div
          className="relative overflow-hidden aspect-[3/4] w-full"
          style={{
            border: '4px solid #0D0D0D',
            background: '#E8E0D0',
            zIndex: 1,
          }}
        >
          {/* Top accent bar */}
          <div
            className="absolute top-0 left-0 right-0 h-2 z-10"
            style={{ background: '#FFE500', borderBottom: '3px solid #0D0D0D' }}
          />

          {/* Image */}
          <Image
            src="/jessica-portrait.jpg"
            alt="Jessica Callanta – Accounting Professional"
            fill
            className="object-cover object-top"
            priority
            sizes="(max-width: 768px) 90vw, 420px"
          />

          {/* Subtle vignette overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(to bottom, transparent 60%, rgba(13,13,13,0.55) 100%)',
              zIndex: 2,
            }}
          />

          {/* Name badge – bottom inside card */}
          <div
            className="absolute bottom-0 left-0 right-0 px-5 py-4 z-10"
          >
            <motion.div
              className="inline-flex items-center gap-3"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div
                className="px-4 py-2"
                style={{
                  background: '#FFE500',
                  border: '2.5px solid #0D0D0D',
                  boxShadow: '3px 3px 0 #0D0D0D',
                }}
              >
                <p
                  className="text-xs font-black uppercase tracking-[0.2em] leading-none"
                  style={{ color: '#0D0D0D', fontFamily: '"Arial Black", sans-serif' }}
                >
                  Jessica Callanta
                </p>
              </div>
            </motion.div>
            <p
              className="mt-2 text-[10px] font-black uppercase tracking-[0.25em]"
              style={{ color: 'rgba(255,255,255,0.75)' }}
            >
              Accounting Professional
            </p>
          </div>
        </div>

        {/* ── Floating stat cards ── */}
        {/* Years Experience – left side */}
        <motion.div
          className="absolute -left-12 top-1/3 z-20"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="absolute inset-0 translate-x-[3px] translate-y-[3px]" style={{ background: '#0D0D0D' }} />
          <div
            className="relative px-4 py-3 text-center"
            style={{
              background: '#FAFAF7',
              border: '2.5px solid #0D0D0D',
              minWidth: '80px',
            }}
          >
            <p className="text-2xl font-black leading-none" style={{ color: '#0D0D0D', fontFamily: '"Arial Black", sans-serif' }}>2+</p>
            <p className="text-[9px] font-black uppercase tracking-wider mt-1" style={{ color: '#0D0D0D', opacity: 0.5 }}>Years</p>
          </div>
        </motion.div>

        {/* Detail-Oriented tag – right side */}
        <motion.div
          className="absolute -right-10 top-1/4 z-20"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="absolute inset-0 translate-x-[3px] translate-y-[3px]" style={{ background: '#0D0D0D' }} />
          <div
            className="relative px-3 py-2"
            style={{
              background: '#FF3B3B',
              border: '2.5px solid #0D0D0D',
            }}
          >
            <p className="text-[10px] font-black uppercase tracking-wider whitespace-nowrap" style={{ color: '#fff' }}>Accounting ✓</p>
          </div>
        </motion.div>

        {/* Finance tag – right-lower */}
        <motion.div
          className="absolute -right-8 bottom-1/4 z-20"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="absolute inset-0 translate-x-[3px] translate-y-[3px]" style={{ background: '#0D0D0D' }} />
          <div
            className="relative px-3 py-2"
            style={{
              background: '#3B82F6',
              border: '2.5px solid #0D0D0D',
            }}
          >
            <p className="text-[10px] font-black uppercase tracking-wider whitespace-nowrap" style={{ color: '#fff' }}>Finance ⬡</p>
          </div>
        </motion.div>
      </motion.div>

      {/* ── Bottom rule / label ── */}
      <motion.div
        className="mt-10 flex items-center gap-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <div className="flex-1 h-[3px]" style={{ background: '#0D0D0D' }} />
        <span
          className="text-[10px] font-black uppercase tracking-[0.3em]"
          style={{ color: '#0D0D0D', opacity: 0.4 }}
        >
          Open to Work
        </span>
        <div className="flex-1 h-[3px]" style={{ background: '#0D0D0D' }} />
      </motion.div>
    </div>
  );
}