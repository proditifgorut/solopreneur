import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio: React.FC = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: 'Platform E-Commerce',
      description: 'Solusi e-commerce lengkap dengan manajemen inventaris, integrasi pembayaran, dan dasbor admin.',
      image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1e3a8a/60a5fa?text=E-Commerce',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      category: t('portfolio.cat_web'),
    },
    {
      title: 'Aplikasi Pesan Antar Makanan',
      description: 'Aplikasi mobile untuk layanan pesan antar makanan dengan pelacakan real-time dan integrasi pembayaran.',
      image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1e3a8a/60a5fa?text=Aplikasi+Makanan',
      tech: ['Flutter', 'Firebase', 'Google Maps API'],
      category: t('portfolio.cat_mobile'),
    },
    {
      title: 'Sistem CRM',
      description: 'Sistem manajemen hubungan pelanggan dengan analitik, otomatisasi email, dan pelacakan prospek.',
      image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1e3a8a/60a5fa?text=Sistem+CRM',
      tech: ['React', 'Python', 'Django', 'PostgreSQL'],
      category: t('portfolio.cat_web'),
    },
    {
      title: 'Platform AI Chatbot',
      description: 'Platform chatbot cerdas dengan pemrosesan bahasa alami untuk otomatisasi dukungan pelanggan.',
      image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1e3a8a/60a5fa?text=AI+Chatbot',
      tech: ['Python', 'TensorFlow', 'React', 'FastAPI'],
      category: t('portfolio.cat_ai'),
    },
    {
      title: 'Aplikasi Manajemen UMKM',
      description: 'Aplikasi sederhana untuk pelacakan inventaris dan penjualan yang dirancang khusus untuk usaha kecil.',
      image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1e3a8a/60a5fa?text=Aplikasi+UMKM',
      tech: ['React', 'Firebase', 'PWA'],
      category: t('portfolio.cat_web'),
    },
    {
      title: 'Dasbor Analitik',
      description: 'Dasbor analitik real-time dengan visualisasi data dan fitur pelaporan untuk intelijen bisnis.',
      image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1e3a8a/60a5fa?text=Dasbor+Analitik',
      tech: ['React', 'D3.js', 'Node.js', 'MongoDB'],
      category: t('portfolio.cat_data'),
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">{t('portfolio.title')}</span>
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-dark-300 text-lg max-w-2xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-dark-900 rounded-2xl overflow-hidden border border-dark-800 hover:border-primary-600 transition-all duration-300 hover:shadow-xl hover:shadow-primary-600/10"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-primary-600 text-white text-xs px-3 py-1 rounded-full">
                  {project.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-dark-50 mb-2 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-dark-300 text-sm mb-4 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-dark-800 text-dark-200 px-3 py-1 rounded-full border border-dark-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button className="flex items-center gap-2 text-primary-400 hover:text-primary-300 text-sm font-semibold transition-colors">
                    <ExternalLink size={16} />
                    {t('portfolio.live_button')}
                  </button>
                  <button className="flex items-center gap-2 text-dark-400 hover:text-dark-200 text-sm font-semibold transition-colors">
                    <Github size={16} />
                    {t('portfolio.code_button')}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
