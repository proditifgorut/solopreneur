import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Database, Brain, Shield, Zap } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { icon: Code2, name: 'React', color: 'text-blue-400' },
    { icon: Code2, name: 'Node.js', color: 'text-green-400' },
    { icon: Code2, name: 'Python', color: 'text-yellow-400' },
    { icon: Smartphone, name: 'Flutter', color: 'text-cyan-400' },
    { icon: Database, name: 'PostgreSQL', color: 'text-purple-400' },
    { icon: Brain, name: 'AI/ML', color: 'text-pink-400' },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Tentang <span className="text-gradient">Saya</span>
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-dark-50">
              Software Engineer Berpengalaman
            </h3>
            <p className="text-dark-300 text-lg leading-relaxed">
              Hardirstm adalah Seorang Solopreneur Freelance FullStack Software Engineer. <a href="https://rustam-ai-portofolio-i7rp.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 font-semibold underline">Lihat Portofolio di link ini</a>. Dengan lebih dari 5 tahun pengalaman dalam pengembangan perangkat lunak, saya berspesialisasi dalam menciptakan solusi digital yang efisien, skalabel, dan ramah pengguna. Semangat saya adalah membantu bisnis dari semua skala untuk mengubah ide mereka menjadi kenyataan.
            </p>
            <p className="text-dark-300 text-lg leading-relaxed">
              Saya telah berhasil menyelesaikan proyek untuk UMKM, startup, dan perusahaan di berbagai industri. Pendekatan saya menggabungkan keunggulan teknis dengan pemahaman mendalam tentang kebutuhan bisnis untuk memberikan solusi yang memberikan nilai nyata.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="flex items-center gap-2">
                <Shield className="text-primary-400" size={20} />
                <span className="text-dark-200">Kualitas Terjamin</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="text-primary-400" size={20} />
                <span className="text-dark-200">Pengiriman Cepat</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-dark-800 rounded-xl p-6 text-center hover:bg-dark-700 transition-all duration-300 hover:scale-105 border border-dark-700 hover:border-primary-600"
                >
                  <Icon className={`${skill.color} mx-auto mb-3`} size={32} />
                  <div className="text-dark-100 font-semibold">{skill.name}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
