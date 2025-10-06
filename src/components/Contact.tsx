import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Terima kasih atas pesan Anda! Saya akan segera menghubungi Anda kembali.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'halo@hardirstm.dev',
      href: 'mailto:halo@hardirstm.dev',
    },
    {
      icon: Phone,
      label: t('contact.phone'),
      value: '+62 812-3456-7890',
      href: 'tel:+628123456789',
    },
    {
      icon: MapPin,
      label: t('contact.location'),
      value: 'Jakarta, Indonesia',
      href: null,
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <section id="contact" className="py-20 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t('contact.title_part1')} <span className="text-gradient">{t('contact.title_part2')}</span>
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-dark-300 text-lg max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-dark-50">{t('contact.info_title')}</h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-3 bg-primary-600/10 rounded-lg">
                      <Icon className="text-primary-400" size={24} />
                    </div>
                    <div>
                      <div className="text-dark-400 text-sm mb-1">{info.label}</div>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-dark-100 font-semibold hover:text-primary-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-dark-100 font-semibold">{info.value}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-dark-50">{t('contact.social_title')}</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="p-3 bg-dark-800 rounded-lg hover:bg-primary-600 text-dark-300 hover:text-white transition-all duration-300 hover:scale-110 border border-dark-700 hover:border-primary-600"
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-dark-900 rounded-2xl p-8 border border-dark-800">
              <div className="mb-6">
                <label htmlFor="name" className="block text-dark-200 mb-2 font-medium">
                  {t('contact.form_name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-dark-100 focus:outline-none focus:border-primary-600 transition-colors"
                  placeholder={t('contact.form_name_placeholder')}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-dark-200 mb-2 font-medium">
                  {t('contact.form_email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-dark-100 focus:outline-none focus:border-primary-600 transition-colors"
                  placeholder={t('contact.form_email_placeholder')}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-dark-200 mb-2 font-medium">
                  {t('contact.form_message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-dark-100 focus:outline-none focus:border-primary-600 transition-colors resize-none"
                  placeholder={t('contact.form_message_placeholder')}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-600/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                {t('contact.form_button')}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
