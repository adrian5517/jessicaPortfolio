'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const education = [
  {
    index: '01',
    degree: 'Bachelor of Science in Entrepreneurship',
    school: 'Naga College Foundation',
    year: '2023',
    accent: '#FFE500',
    icon: '🎓',
    type: 'Graduate',
    description:
      'Developed comprehensive knowledge in business operations, financial management, and entrepreneurial strategy.',
  },
  {
    index: '02',
    degree: 'Senior High — Accountancy, Business & Management',
    school: 'Camarines Sur National High School',
    year: '2018',
    accent: '#00D084',
    icon: '📘',
    type: 'ABM Strand',
    description:
      'Specialized in accounting, business management, and commercial subjects with a focus on financial literacy.',
  },
];

export default function Education() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="education"
      className="relative py-28 px-6 overflow-hidden"
      style={{
        background: '#0D0D0D',
        borderTop: '4px solid #0D0D0D',
      }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Decorative shapes */}
      <motion.div
        className="absolute top-14 right-14 w-24 h-24 hidden md:block"
        style={{
          background: 'transparent',
          border: '3px solid rgba(255,229,0,0.15)',
        }}
        animate={{ rotate: [0, 90, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-16 left-8 w-14 h-14 hidden md:block"
        style={{ background: 'rgba(0,208,132,0.1)', border: '2.5px solid rgba(0,208,132,0.2)' }}
        animate={{ y: [0, -10, 0], rotate: [-4, 4, -4] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Faint watermark */}
      <div
        className="absolute bottom-0 left-0 right-0 text-center pointer-events-none select-none hidden lg:block"
        style={{
          fontSize: '180px',
          fontFamily: '"Arial Black", sans-serif',
          fontWeight: 900,
          color: 'rgba(255,255,255,0.018)',
          lineHeight: 1,
          letterSpacing: '-0.05em',
        }}
      >
        EDU
      </div>

      <div ref={ref} className="relative max-w-6xl mx-auto">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <div className="flex items-start gap-6">
            <div className="relative flex-shrink-0 mt-3">
              <div
                className="absolute inset-0 translate-x-[4px] translate-y-[4px]"
                style={{ background: '#FFE500' }}
              />
              <div
                className="relative w-14 h-14 flex items-center justify-center text-xl font-black"
                style={{
                  background: '#FFE500',
                  border: '3px solid #FFE500',
                  color: '#0D0D0D',
                  fontFamily: 'monospace',
                }}
              >
                04
              </div>
            </div>
            <div>
              <p
                className="text-xs font-black uppercase tracking-[0.3em] mb-2"
                style={{ color: '#fff', opacity: 0.25 }}
              >
                Academic Background
              </p>
              <h2
                className="text-6xl md:text-8xl font-black tracking-tighter leading-none"
                style={{ color: '#fff', fontFamily: '"Arial Black", sans-serif' }}
              >
                EDUCATION
              </h2>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-[5px] w-24" style={{ background: '#FFE500' }} />
                <p
                  className="text-[10px] font-black uppercase tracking-[0.25em]"
                  style={{ color: 'rgba(255,255,255,0.25)' }}
                >
                  {education.length} Institutions
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Education Cards ── */}
        {mounted && (
          <div className="space-y-8">
            {education.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 44 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: idx * 0.16, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="relative group"
              >
                {/* Hard accent shadow */}
                <motion.div
                  className="absolute inset-0"
                  style={{ background: item.accent }}
                  initial={{ x: 6, y: 6 }}
                  whileHover={{ x: 10, y: 10 }}
                  transition={{ duration: 0.2 }}
                />

                {/* Card */}
                <div
                  className="relative overflow-hidden"
                  style={{
                    background: '#141414',
                    border: `3px solid ${item.accent}`,
                  }}
                >
                  {/* Top accent stripe */}
                  <div className="h-[6px]" style={{ background: item.accent }} />

                  <div className="p-8 md:p-10">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5 mb-7">
                      <div className="flex items-start gap-5">
                        {/* Index badge */}
                        <div className="relative flex-shrink-0">
                          <div
                            className="absolute inset-0 translate-x-[3px] translate-y-[3px]"
                            style={{ background: 'rgba(0,0,0,0.5)' }}
                          />
                          <div
                            className="relative w-12 h-12 flex items-center justify-center font-black text-lg"
                            style={{
                              background: item.accent,
                              color: '#0D0D0D',
                              fontFamily: 'monospace',
                              border: `2px solid ${item.accent}`,
                            }}
                          >
                            {item.index}
                          </div>
                        </div>

                        <div>
                          <h3
                            className="text-xl md:text-2xl font-black tracking-tight leading-tight"
                            style={{ color: '#fff', fontFamily: '"Arial Black", sans-serif' }}
                          >
                            {item.degree}
                          </h3>
                          <p
                            className="text-sm font-bold mt-1.5"
                            style={{ color: item.accent, opacity: 0.85 }}
                          >
                            {item.school}
                          </p>
                        </div>
                      </div>

                      {/* Right tags */}
                      <div className="flex flex-row md:flex-col items-start gap-2 flex-shrink-0">
                        <div
                          className="px-4 py-2 text-xs font-black uppercase tracking-widest whitespace-nowrap"
                          style={{
                            border: `2px solid ${item.accent}`,
                            color: item.accent,
                            background: 'transparent',
                          }}
                        >
                          Class of {item.year}
                        </div>
                        <div
                          className="px-4 py-2 text-xs font-black uppercase tracking-widest whitespace-nowrap"
                          style={{
                            border: '2px solid rgba(255,255,255,0.12)',
                            color: 'rgba(255,255,255,0.3)',
                            background: 'transparent',
                          }}
                        >
                          {item.type}
                        </div>
                      </div>
                    </div>

                    {/* Gradient divider */}
                    <div
                      className="mb-6 h-px"
                      style={{
                        background: `linear-gradient(to right, ${item.accent}50, transparent)`,
                      }}
                    />

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: idx * 0.16 + 0.2, duration: 0.45 }}
                      className="text-sm font-medium leading-relaxed"
                      style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '680px' }}
                    >
                      {item.description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Bottom rule */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.75, duration: 0.5 }}
          className="mt-14 flex items-center gap-5"
        >
          <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.08)' }} />
          <div
            className="px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.3em]"
            style={{
              border: '2px solid rgba(255,229,0,0.25)',
              color: 'rgba(255,229,0,0.4)',
            }}
          >
            Lifelong Learner ↗
          </div>
          <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.08)' }} />
        </motion.div>
      </div>
    </section>
  );
}