import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Code2, Smartphone, Database, Brain, Shield, Zap } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useTranslation();

  const skills = [
    { icon: Code2, name: t('about.skills.react'), color: 'text-blue-400' },
    { icon: Code2, name: t('about.skills.nodejs'), color: 'text-green-400' },
    { icon: Code2, name: t('about.skills.python'), color: 'text-yellow-400' },
    { icon: Smartphone, name: t('about.skills.flutter'), color: 'text-cyan-400' },
    { icon: Database, name: t('about.skills.postgresql'), color: 'text-purple-400' },
    { icon: Brain, name: t('about.skills.aiml'), color: 'text-pink-400' },
  ];

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
            {t('about.title_part1')} <span className="text-gradient">{t('about.title_part2')}</span>
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
              {t('about.heading')}
            </h3>
            <p className="text-dark-300 text-lg leading-relaxed">
              {t('about.p1_part1')}
              <a href="https://rustam-ai-portofolio-i7rp.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 font-semibold underline">
                {t('about.p1_part2')}
              </a>
              {t('about.p1_part3')}
            </p>
            <p className="text-dark-300 text-lg leading-relaxed">
              {t('about.p2')}
            </p>
            <div className="flex gap-4 pt-4">
              <div className="flex items-center gap-2">
                <Shield className="text-primary-400" size={20} />
                <span className="text-dark-200">{t('about.tag_quality')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="text-primary-400" size={20} />
                <span className="text-dark-200">{t('about.tag_speed')}</span>
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
