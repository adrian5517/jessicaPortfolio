'use client';

import { motion } from 'framer-motion';
import { Linkedin, Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:jesscallanta27@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/jessica-callanta-b5b347283/',
    },
   
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-background border-t-2 border-foreground">
      <div className="max-w-6xl mx-auto">
        {/* Social Links */}
        <div className="flex justify-center gap-8 mb-12">
          {socialLinks.map((link, idx) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 border-2 border-foreground hover:border-accent hover:text-accent transition-all"
                aria-label={link.label}
              >
                <Icon size={24} />
              </motion.a>
            );
          })}
        </div>

        {/* Divider */}
        <div className="h-1 bg-foreground mb-8" />

        {/* Footer Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-black uppercase text-sm tracking-widest mb-2">Jessica Callanta</p>
          <p className="text-foreground/60 text-sm mb-4">
            Accounting & Operations Professional
          </p>
          <p className="text-foreground/50 text-xs">
            © {currentYear} All rights reserved. Designed with attention to detail.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
