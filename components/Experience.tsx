'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    index: '01',
    title: 'Accounts Payable & Receivable',
    company: 'ES Print Media Inc.',
    period: 'Dec 2023 – Mar 2026',
    type: 'Full-Time',
    accent: '#FFE500',
    description: [
      'Managed comprehensive accounts payable and receivable operations',
      'Maintained accurate financial records with meticulous attention to detail',
      'Coordinated with cross-functional teams to ensure smooth payment processing',
      'Tracked invoices, payments, and financial documentation',
    ],
    skills: ['Acumatica', 'Oracle', 'Financial Reporting', 'Record Management'],
  },
  {
    index: '02',
    title: 'Front Desk Officer',
    company: 'Candelaria Beach Resort',
    period: 'Jan – Feb 2023',
    type: 'Part-Time',
    accent: '#3B82F6',
    description: [
      'Managed guest reservations and booking systems',
      'Handled social media advertising and marketing campaigns',
      'Provided exceptional customer service to guests',
      'Coordinated resort operations and guest communications',
    ],
    skills: ['Reservations', 'Social Media', 'Customer Service', 'Communication'],
  },
];

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section
      id="experience"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: '#0D0D0D' }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Animated decorative shapes */}
      <motion.div
        className="absolute top-16 right-10 w-28 h-28 hidden md:block"
        style={{
          background: 'transparent',
          border: '3px solid rgba(255,229,0,0.2)',
        }}
        animate={{ rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute top-16 right-10 w-20 h-20 hidden md:block"
        style={{
          background: 'rgba(255,229,0,0.07)',
          border: '3px solid rgba(255,229,0,0.15)',
          margin: '16px',
        }}
        animate={{ rotate: [0, -90, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      />

      <motion.div
        className="absolute bottom-20 left-6 w-16 h-16 hidden md:block"
        style={{ background: 'rgba(59,130,246,0.12)', border: '2.5px solid rgba(59,130,246,0.2)' }}
        animate={{ y: [0, -10, 0], rotate: [-4, 4, -4] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Large faint text watermark */}
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
        WORK
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
            {/* Section number badge */}
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
                02
              </div>
            </div>

            <div>
              <p
                className="text-xs font-black uppercase tracking-[0.3em] mb-2"
                style={{ color: '#fff', opacity: 0.25 }}
              >
                Work History
              </p>
              <h2
                className="text-6xl md:text-8xl font-black tracking-tighter leading-none"
                style={{ color: '#fff', fontFamily: '"Arial Black", sans-serif' }}
              >
                EXPERIENCE
              </h2>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-[5px] w-24" style={{ background: '#FFE500' }} />
                <p
                  className="text-[10px] font-black uppercase tracking-[0.25em]"
                  style={{ color: 'rgba(255,255,255,0.25)' }}
                >
                  {experiences.length} Positions · 3+ Years
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Timeline line (desktop) ── */}
        <div className="hidden md:block absolute left-[calc(3rem+28px)] top-[280px] bottom-24 w-[2px]"
          style={{ background: 'rgba(255,255,255,0.06)' }}
        />

        {/* ── Experience Cards ── */}
        <div className="space-y-10">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={idx} exp={exp} idx={idx} inView={inView} />
          ))}
        </div>

        {/* ── Bottom rule ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.85, duration: 0.5 }}
          className="mt-14 flex items-center gap-5"
        >
          <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.08)' }} />
          <motion.div
            className="px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.3em] cursor-default"
            style={{
              border: '2px solid rgba(255,229,0,0.4)',
              color: 'rgba(255,229,0,0.5)',
              background: 'transparent',
            }}
            whileHover={{
              borderColor: '#FFE500',
              color: '#FFE500',
              transition: { duration: 0.15 },
            }}
          >
            Open to New Opportunities ↗
          </motion.div>
          <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.08)' }} />
        </motion.div>
      </div>
    </section>
  );
}

/* ── Individual Experience Card ── */
function ExperienceCard({
  exp,
  idx,
  inView,
}: {
  exp: (typeof experiences)[0];
  idx: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: idx * 0.18, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="relative group"
    >
      {/* Hard accent shadow — grows on hover */}
      <motion.div
        className="absolute inset-0"
        style={{ background: exp.accent }}
        initial={{ x: 6, y: 6 }}
        whileHover={{ x: 10, y: 10 }}
        transition={{ duration: 0.2 }}
      />

      {/* Card shell */}
      <div
        className="relative overflow-hidden"
        style={{
          background: '#141414',
          border: `3px solid ${exp.accent}`,
        }}
      >
        {/* Top accent stripe */}
        <div
          className="h-[6px]"
          style={{ background: exp.accent, borderBottom: `2px solid ${exp.accent}` }}
        />

        <div className="p-8 md:p-10">

          {/* ── Card top: badge + title + period ── */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5 mb-8">

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
                    background: exp.accent,
                    color: '#0D0D0D',
                    fontFamily: 'monospace',
                    border: `2px solid ${exp.accent}`,
                  }}
                >
                  {exp.index}
                </div>
              </div>

              <div>
                <h3
                  className="text-2xl md:text-3xl font-black tracking-tight leading-tight"
                  style={{ color: '#fff', fontFamily: '"Arial Black", sans-serif' }}
                >
                  {exp.title}
                </h3>
                <p
                  className="text-sm font-bold mt-1"
                  style={{ color: exp.accent, opacity: 0.8 }}
                >
                  {exp.company}
                </p>
              </div>
            </div>

            {/* Right: period + type tags */}
            <div className="flex flex-row md:flex-col items-start gap-2 flex-shrink-0">
              <div
                className="px-4 py-2 text-xs font-black uppercase tracking-widest whitespace-nowrap"
                style={{
                  border: `2px solid ${exp.accent}`,
                  color: exp.accent,
                  background: 'transparent',
                }}
              >
                {exp.period}
              </div>
              <div
                className="px-4 py-2 text-xs font-black uppercase tracking-widest whitespace-nowrap"
                style={{
                  border: '2px solid rgba(255,255,255,0.12)',
                  color: 'rgba(255,255,255,0.3)',
                  background: 'transparent',
                }}
              >
                {exp.type}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div
            className="mb-8 h-px"
            style={{ background: `linear-gradient(to right, ${exp.accent}40, transparent)` }}
          />

          {/* ── Body: description + skills ── */}
          <div className="grid md:grid-cols-[1fr_180px] gap-8">

            {/* Description */}
            <ul className="space-y-3.5">
              {exp.description.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: idx * 0.18 + i * 0.07, duration: 0.45, ease: 'easeOut' }}
                  className="flex items-start gap-3 group/item"
                >
                  <motion.span
                    className="flex-shrink-0 w-2 h-2 mt-[7px] block"
                    style={{ background: exp.accent, border: `1.5px solid ${exp.accent}` }}
                    whileHover={{ scale: 1.5 }}
                  />
                  <span
                    className="text-sm font-medium leading-relaxed transition-colors duration-150 group-hover/item:text-white"
                    style={{ color: 'rgba(255,255,255,0.6)' }}
                  >
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* Skills sidebar */}
            <div>
              <p
                className="text-[9px] font-black uppercase tracking-[0.3em] mb-3"
                style={{ color: 'rgba(255,255,255,0.25)' }}
              >
                Tools Used
              </p>
              <div className="flex flex-row md:flex-col flex-wrap gap-2">
                {exp.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: idx * 0.18 + i * 0.07, duration: 0.35 }}
                    whileHover={{ x: 4, transition: { duration: 0.15 } }}
                    className="px-3 py-2 text-xs font-black uppercase tracking-wider cursor-default whitespace-nowrap"
                    style={{
                      background: exp.accent,
                      color: '#0D0D0D',
                      border: `2px solid ${exp.accent}`,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Mini progress dots */}
              <div className="mt-5 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <p
                  className="text-[9px] font-black uppercase tracking-[0.25em] mb-2.5"
                  style={{ color: 'rgba(255,255,255,0.2)' }}
                >
                  Impact Level
                </p>
                <div className="flex gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="h-2 flex-1"
                      style={{
                        background: i < (idx === 0 ? 5 : 3) ? exp.accent : 'rgba(255,255,255,0.08)',
                        border: `1.5px solid ${i < (idx === 0 ? 5 : 3) ? exp.accent : 'rgba(255,255,255,0.1)'}`,
                      }}
                      initial={{ scaleY: 0 }}
                      animate={inView ? { scaleY: 1 } : {}}
                      transition={{ delay: idx * 0.18 + i * 0.06 + 0.3, duration: 0.3 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}