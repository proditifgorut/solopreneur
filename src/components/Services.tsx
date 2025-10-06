import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Link2, Brain, Box } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Globe,
      title: 'Pembuatan Aplikasi Web',
      description: 'Aplikasi web kustom yang dibangun dengan teknologi modern seperti React dan Node.js untuk performa dan skalabilitas optimal.',
    },
    {
      icon: Smartphone,
      title: 'Aplikasi Mobile',
      description: 'Aplikasi mobile lintas platform menggunakan Flutter yang berfungsi mulus di iOS dan Android, memberikan performa seperti aplikasi native.',
    },
    {
      icon: Link2,
      title: 'Integrasi API & Otomatisasi',
      description: 'Sederhanakan proses bisnis Anda dengan integrasi API kustom dan solusi otomatisasi alur kerja.',
    },
    {
      icon: Brain,
      title: 'Solusi AI & Analisis Data',
      description: 'Manfaatkan kecerdasan buatan dan analisis data untuk mendapatkan wawasan dan membuat keputusan berbasis data untuk bisnis Anda.',
    },
    {
      icon: Box,
      title: 'Konsultasi Arsitektur Sistem',
      description: 'Panduan ahli dalam merancang arsitektur sistem yang skalabel, aman, dan mudah dipelihara untuk proyek Anda.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Layanan</span> Saya
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-dark-300 text-lg max-w-2xl mx-auto">
            Layanan pengembangan perangkat lunak komprehensif yang disesuaikan dengan kebutuhan bisnis Anda.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.1 }}
                className="bg-dark-900 rounded-2xl p-8 border border-dark-800 hover:border-primary-600 transition-all duration-300 hover:shadow-xl hover:shadow-primary-600/10 group"
              >
                <div className="mb-6 inline-block p-4 bg-primary-600/10 rounded-xl group-hover:bg-primary-600/20 transition-colors">
                  <Icon className="text-primary-400" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-dark-50">{service.title}</h3>
                <p className="text-dark-300 leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
