'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    index: '01',
    category: 'Accounting & Finance',
    icon: '₱',
    accent: '#FFE500',
    description: 'Core financial operations expertise',
    skills: [
      'Accounts Payable',
      'Accounts Receivable',
      'Bookkeeping',
      'Financial Records',
      'Invoice Management',
      'Payment Processing',
    ],
  },
  {
    index: '02',
    category: 'Professional Skills',
    icon: '★',
    accent: '#FF3B3B',
    description: 'Soft skills & work ethic',
    skills: [
      'Detail-Oriented',
      'Record Tracking',
      'Client Communication',
      'Team Coordination',
      'Organization',
      'Problem Solving',
    ],
  },
  {
    index: '03',
    category: 'Tools & Systems',
    icon: '⬡',
    accent: '#3B82F6',
    description: 'Software & platforms',
    skills: ['Acumatica', 'Oracle', 'Microsoft Office', 'Excel', 'Outlook', 'Teams'],
  },
  {
    index: '04',
    category: 'Design & Marketing',
    icon: '◈',
    accent: '#00D084',
    description: 'Creative & digital presence',
    skills: ['Canva', 'Picsart', 'Social Media', 'Digital Advertising'],
  },
];

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="skills"
      className="relative py-28 px-6 overflow-hidden"
      style={{
        background: '#F5F0E8',
        borderTop: '4px solid #0D0D0D',
      }}
    >
      {/* Dot grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(13,13,13,0.1) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Decorative bg shapes */}
      <motion.div
        className="absolute -top-8 right-16 w-36 h-36 hidden md:block"
        style={{
          background: '#FFE500',
          border: '3px solid #0D0D0D',
          boxShadow: '5px 5px 0 #0D0D0D',
        }}
        animate={{ rotate: [8, 14, 8] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 -left-6 w-20 h-20 hidden md:block"
        style={{
          background: '#FF3B3B',
          border: '3px solid #0D0D0D',
          boxShadow: '4px 4px 0 #0D0D0D',
        }}
        animate={{ rotate: [-5, -12, -5] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.div
        className="absolute top-1/2 right-4 w-10 h-10 hidden lg:block"
        style={{
          background: '#3B82F6',
          border: '2.5px solid #0D0D0D',
        }}
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />

      <div ref={ref} className="relative max-w-6xl mx-auto">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <div className="flex items-start gap-6">
            <div
              className="flex-shrink-0 w-14 h-14 flex items-center justify-center text-xl font-black mt-3"
              style={{
                background: '#0D0D0D',
                color: '#FFE500',
                border: '3px solid #0D0D0D',
                boxShadow: '4px 4px 0 #0D0D0D',
                fontFamily: 'monospace',
              }}
            >
              03
            </div>
            <div>
              <p
                className="text-xs font-black uppercase tracking-[0.3em] mb-2"
                style={{ color: '#0D0D0D', opacity: 0.4 }}
              >
                What I Bring
              </p>
              <h2
                className="text-6xl md:text-8xl font-black tracking-tighter leading-none"
                style={{
                  color: '#0D0D0D',
                  fontFamily: '"Arial Black", sans-serif',
                }}
              >
                SKILLS
              </h2>
              <div
                className="mt-4 h-[5px] w-24"
                style={{ background: '#0D0D0D', border: '1.5px solid #0D0D0D' }}
              />
            </div>
          </div>
        </motion.div>

        {/* ── Skill Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {skillCategories.map((cat, idx) => (
            <SkillCard key={idx} cat={cat} idx={idx} inView={inView} />
          ))}
        </div>

        {/* ── Bottom stamp ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mt-16 flex items-center justify-between"
        >
          <div className="flex-1 h-px" style={{ background: 'rgba(13,13,13,0.15)' }} />
          <motion.div
            className="mx-6 px-6 py-3 text-xs font-black uppercase tracking-[0.3em]"
            style={{
              border: '3px solid #0D0D0D',
              color: '#0D0D0D',
              boxShadow: '4px 4px 0 #0D0D0D',
              background: '#FFE500',
              transform: 'rotate(-1.5deg)',
            }}
            whileHover={{ rotate: 0, scale: 1.03, transition: { duration: 0.2 } }}
          >
            Always Learning ↗
          </motion.div>
          <div className="flex-1 h-px" style={{ background: 'rgba(13,13,13,0.15)' }} />
        </motion.div>
      </div>
    </section>
  );
}

function SkillCard({
  cat,
  idx,
  inView,
}: {
  cat: (typeof skillCategories)[0];
  idx: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 44 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: idx * 0.13, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="relative group"
    >
      {/* Hard shadow — shifts on hover */}
      <motion.div
        className="absolute inset-0"
        style={{ background: '#0D0D0D' }}
        initial={{ x: 6, y: 6 }}
        whileHover={{ x: 9, y: 9 }}
        transition={{ duration: 0.2 }}
      />

      {/* Card body */}
      <div
        className="relative overflow-hidden"
        style={{
          background: '#FAFAF7',
          border: '3px solid #0D0D0D',
        }}
      >
        {/* Thick colored top bar */}
        <div
          className="h-2"
          style={{ background: cat.accent, borderBottom: '2px solid #0D0D0D' }}
        />

        <div className="p-8">
          {/* Card header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <p
                className="text-[10px] font-black uppercase tracking-[0.3em] mb-1"
                style={{ color: '#0D0D0D', opacity: 0.35 }}
              >
                {cat.index} / 04
              </p>
              <h3
                className="text-xl font-black uppercase tracking-wide leading-tight"
                style={{
                  color: '#0D0D0D',
                  fontFamily: '"Arial Black", sans-serif',
                }}
              >
                {cat.category}
              </h3>
              <p
                className="text-xs font-bold mt-1"
                style={{ color: '#0D0D0D', opacity: 0.45 }}
              >
                {cat.description}
              </p>
            </div>

            {/* Icon badge */}
            <motion.div
              className="flex-shrink-0 w-14 h-14 flex items-center justify-center text-2xl font-black ml-4"
              style={{
                background: cat.accent,
                border: '2.5px solid #0D0D0D',
                boxShadow: '3px 3px 0 #0D0D0D',
                color: '#0D0D0D',
              }}
              whileHover={{ rotate: [0, -6, 6, 0], transition: { duration: 0.4 } }}
            >
              {cat.icon}
            </motion.div>
          </div>

          {/* Divider */}
          <div className="mb-6 h-[2px]" style={{ background: '#0D0D0D', opacity: 0.08 }} />

          {/* Skills grid */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
            {cat.skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -14 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.12 + i * 0.055,
                  ease: 'easeOut',
                }}
                whileHover={{ x: 4, transition: { duration: 0.15 } }}
                className="flex items-center gap-2.5 cursor-default"
              >
                <motion.span
                  className="flex-shrink-0 w-2 h-2 block"
                  style={{
                    background: cat.accent,
                    border: '1.5px solid #0D0D0D',
                  }}
                  whileHover={{ scale: 1.4 }}
                />
                <span
                  className="text-sm font-bold leading-tight"
                  style={{ color: '#0D0D0D' }}
                >
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Proficiency fill bar */}
          <div className="mt-6 pt-5" style={{ borderTop: '2px dashed rgba(13,13,13,0.12)' }}>
            <div className="flex items-center justify-between mb-2">
              <p
                className="text-[9px] font-black uppercase tracking-[0.25em]"
                style={{ color: '#0D0D0D', opacity: 0.35 }}
              >
                Proficiency
              </p>
              <p
                className="text-[9px] font-black"
                style={{ color: '#0D0D0D', opacity: 0.35 }}
              >
                {cat.skills.length} skills
              </p>
            </div>
            <div
              className="w-full h-2 overflow-hidden"
              style={{ background: 'rgba(13,13,13,0.08)', border: '1.5px solid #0D0D0D' }}
            >
              <motion.div
                className="h-full"
                style={{ background: cat.accent }}
                initial={{ scaleX: 0, originX: 0 }}
                animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{
                  duration: 0.9,
                  delay: idx * 0.15 + 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}