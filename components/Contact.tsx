'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Loader } from 'lucide-react';
import { useState } from 'react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '09998373121',
    accent: '#FFE500',
    href: 'tel:09998373121',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'jesscallanta27@gmail.com',
    accent: '#FF3B3B',
    href: 'mailto:jesscallanta27@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Naga City, 4400, Philippines',
    accent: '#3B82F6',
    href: null,
  },
];

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [focused, setFocused] = useState<string | null>(null);

  const getFriendlyErrorMessage = (rawMessage: string) => {
    const message = rawMessage.toLowerCase();

    if (message.includes('missing resend_api_key') || message.includes('email service is not configured')) {
      return 'Email service is temporarily unavailable. Please use the phone or direct email listed on this page.';
    }

    if (message.includes('failed to fetch') || message.includes('networkerror')) {
      return 'Network issue detected. Please check your connection and try again.';
    }

    return rawMessage;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      let result: { error?: string } = {};
      const contentType = response.headers.get('content-type') || '';
      if (contentType.includes('application/json')) {
        result = await response.json();
      }

      if (!response.ok) {
        const apiError = result.error || `Failed to send email (status ${response.status})`;
        setError(getFriendlyErrorMessage(apiError));
        return;
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred';
      setError(getFriendlyErrorMessage(errorMessage));
      console.warn('Form submission issue:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-28 px-6 overflow-hidden"
      style={{
        background: '#F5F0E8',
        borderTop: '4px solid #0D0D0D',
      }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(13,13,13,0.1) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Decorative shapes */}
      <motion.div
        className="absolute -top-6 right-20 w-32 h-32 hidden md:block"
        style={{
          background: '#FF3B3B',
          border: '3px solid #0D0D0D',
          boxShadow: '5px 5px 0 #0D0D0D',
        }}
        animate={{ rotate: [6, 12, 6] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-16 left-6 w-16 h-16 hidden md:block"
        style={{
          background: '#FFE500',
          border: '3px solid #0D0D0D',
          boxShadow: '4px 4px 0 #0D0D0D',
        }}
        animate={{ rotate: [-4, -10, -4], y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
      />

      {/* Faint watermark */}
      <div
        className="absolute bottom-0 left-0 right-0 text-center pointer-events-none select-none hidden lg:block"
        style={{
          fontSize: '180px',
          fontFamily: '"Arial Black", sans-serif',
          fontWeight: 900,
          color: 'rgba(13,13,13,0.03)',
          lineHeight: 1,
          letterSpacing: '-0.05em',
        }}
      >
        HELLO
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
              05
            </div>
            <div>
              <p
                className="text-xs font-black uppercase tracking-[0.3em] mb-2"
                style={{ color: '#0D0D0D', opacity: 0.4 }}
              >
                Let's Connect
              </p>
              <h2
                className="text-6xl md:text-8xl font-black tracking-tighter leading-none"
                style={{ color: '#0D0D0D', fontFamily: '"Arial Black", sans-serif' }}
              >
                CONTACT
              </h2>
              <div className="mt-4 h-[5px] w-24" style={{ background: '#0D0D0D' }} />
            </div>
          </div>
        </motion.div>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10">

          {/* ── Left: Info + blurb ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Intro text */}
            <div
              className="mb-10 p-6"
              style={{
                border: '3px solid #0D0D0D',
                background: '#FAFAF7',
                boxShadow: '5px 5px 0 #0D0D0D',
              }}
            >
              <p
                className="text-sm font-bold leading-relaxed"
                style={{ color: 'rgba(13,13,13,0.7)', borderLeft: '4px solid #FFE500', paddingLeft: '14px' }}
              >
                Have a question or ready to work together? I&apos;m always interested in hearing
                about new opportunities and collaborations. Let&apos;s make something great.
              </p>
            </div>

            {/* Contact info cards */}
            <div className="space-y-4">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                const Wrapper = info.href ? 'a' : 'div';
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 14 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: idx * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    className="relative group"
                  >
                    {/* Shadow */}
                    <motion.div
                      className="absolute inset-0"
                      style={{ background: '#0D0D0D' }}
                      initial={{ x: 4, y: 4 }}
                      whileHover={{ x: 7, y: 7 }}
                      transition={{ duration: 0.2 }}
                    />
                    {/* @ts-ignore */}
                    <Wrapper
                      href={info.href ?? undefined}
                      className="relative flex items-center gap-5 p-5"
                      style={{
                        background: '#FAFAF7',
                        border: '2.5px solid #0D0D0D',
                        textDecoration: 'none',
                        display: 'flex',
                      }}
                    >
                      {/* Icon box */}
                      <div
                        className="flex-shrink-0 w-12 h-12 flex items-center justify-center"
                        style={{
                          background: info.accent,
                          border: '2px solid #0D0D0D',
                        }}
                      >
                        <Icon size={18} color="#0D0D0D" strokeWidth={2.5} />
                      </div>
                      <div>
                        <p
                          className="text-[10px] font-black uppercase tracking-[0.25em] mb-0.5"
                          style={{ color: '#0D0D0D', opacity: 0.4 }}
                        >
                          {info.label}
                        </p>
                        <p
                          className="text-sm font-bold"
                          style={{ color: '#0D0D0D' }}
                        >
                          {info.value}
                        </p>
                      </div>
                      <span className="ml-auto text-lg" style={{ color: '#0D0D0D', opacity: 0.25 }}>→</span>
                    </Wrapper>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Form card shadow */}
            <div
              className="absolute inset-0 translate-x-[7px] translate-y-[7px]"
              style={{ background: '#0D0D0D' }}
            />
            <div
              className="relative overflow-hidden"
              style={{
                background: '#FAFAF7',
                border: '3px solid #0D0D0D',
              }}
            >
              {/* Top stripe */}
              <div className="h-[6px]" style={{ background: '#FFE500', borderBottom: '2px solid #0D0D0D' }} />

              <form onSubmit={handleSubmit} className="p-8 md:p-10 space-y-5">

                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {(['name', 'email'] as const).map((field) => (
                    <div key={field} className="relative">
                      <label
                        className="block text-[10px] font-black uppercase tracking-[0.25em] mb-2"
                        style={{ color: '#0D0D0D', opacity: focused === field ? 1 : 0.4 }}
                      >
                        {field === 'name' ? 'Your Name' : 'Your Email'}
                      </label>
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        onFocus={() => setFocused(field)}
                        onBlur={() => setFocused(null)}
                        required
                        className="w-full px-4 py-3 text-sm font-bold outline-none transition-all duration-150"
                        style={{
                          background: '#F5F0E8',
                          border: `2.5px solid ${focused === field ? '#0D0D0D' : 'rgba(13,13,13,0.25)'}`,
                          color: '#0D0D0D',
                          boxShadow: focused === field ? '3px 3px 0 #0D0D0D' : 'none',
                        }}
                        placeholder={field === 'name' ? 'Your Name' : 'hello@email.com'}
                      />
                    </div>
                  ))}
                </div>

                {/* Subject */}
                <div>
                  <label
                    className="block text-[10px] font-black uppercase tracking-[0.25em] mb-2"
                    style={{ color: '#0D0D0D', opacity: focused === 'subject' ? 1 : 0.4 }}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocused('subject')}
                    onBlur={() => setFocused(null)}
                    required
                    className="w-full px-4 py-3 text-sm font-bold outline-none transition-all duration-150"
                    style={{
                      background: '#F5F0E8',
                      border: `2.5px solid ${focused === 'subject' ? '#0D0D0D' : 'rgba(13,13,13,0.25)'}`,
                      color: '#0D0D0D',
                      boxShadow: focused === 'subject' ? '3px 3px 0 #0D0D0D' : 'none',
                    }}
                    placeholder="Job Opportunity / Collaboration"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    className="block text-[10px] font-black uppercase tracking-[0.25em] mb-2"
                    style={{ color: '#0D0D0D', opacity: focused === 'message' ? 1 : 0.4 }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    required
                    className="w-full px-4 py-3 text-sm font-bold outline-none transition-all duration-150 resize-none"
                    style={{
                      background: '#F5F0E8',
                      border: `2.5px solid ${focused === 'message' ? '#0D0D0D' : 'rgba(13,13,13,0.25)'}`,
                      color: '#0D0D0D',
                      boxShadow: focused === 'message' ? '3px 3px 0 #0D0D0D' : 'none',
                    }}
                    placeholder="Tell me about the opportunity..."
                  />
                </div>

                {/* Error message */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 text-sm font-bold"
                    style={{
                      background: '#FFE5E5',
                      border: '2px solid #FF3B3B',
                      color: '#CC0000',
                    }}
                  >
                    {error}
                  </motion.div>
                )}

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={!loading ? { y: -3 } : {}}
                  whileTap={!loading ? { scale: 0.97 } : {}}
                  className="relative w-full group disabled:opacity-75"
                >
                  <div
                    className="absolute inset-0 translate-x-[5px] translate-y-[5px]"
                    style={{ background: '#0D0D0D' }}
                  />
                  <div
                    className="relative py-4 flex items-center justify-center gap-3 transition-colors duration-150"
                    style={{
                      background: submitted ? '#00D084' : loading ? '#666' : '#0D0D0D',
                      border: `3px solid ${submitted ? '#00D084' : loading ? '#666' : '#0D0D0D'}`,
                    }}
                  >
                    {loading ? (
                      <>
                        <Loader size={16} className="animate-spin" style={{ color: '#FFE500' }} />
                        <span
                          className="text-sm font-black uppercase tracking-widest"
                          style={{
                            color: '#FFE500',
                            fontFamily: '"Arial Black", sans-serif',
                          }}
                        >
                          Sending...
                        </span>
                      </>
                    ) : (
                      <>
                        <span
                          className="text-sm font-black uppercase tracking-widest"
                          style={{
                            color: submitted ? '#0D0D0D' : '#FFE500',
                            fontFamily: '"Arial Black", sans-serif',
                          }}
                        >
                          {submitted ? '✓ Message Sent!' : 'Send Message'}
                        </span>
                        {!submitted && <span style={{ color: '#FFE500' }}>→</span>}
                      </>
                    )}
                  </div>
                </motion.button>

              </form>
            </div>
          </motion.div>
        </div>

        {/* ── Bottom rule ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
          className="mt-16 flex items-center gap-4"
        >
          <div className="flex-1 h-px" style={{ background: 'rgba(13,13,13,0.12)' }} />
          <p
            className="text-[10px] font-black uppercase tracking-[0.3em]"
            style={{ color: 'rgba(13,13,13,0.3)' }}
          >
            Response within 24 hours
          </p>
          <div className="flex-1 h-px" style={{ background: 'rgba(13,13,13,0.12)' }} />
        </motion.div>
      </div>
    </section>
  );
}
