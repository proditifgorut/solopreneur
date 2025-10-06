import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FileText } from 'lucide-react';

const OfferPage: React.FC = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const [selectedPackage, setSelectedPackage] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    description: '',
  });

  const packages = [
    t('pricing.umkm_name'), 
    t('pricing.starter_name'), 
    t('pricing.pro_name'), 
    t('pricing.enterprise_name')
  ];

  useEffect(() => {
    const pkg = searchParams.get('paket');
    if (pkg && packages.includes(pkg)) {
      setSelectedPackage(pkg);
    }
  }, [searchParams, t]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handlePackageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPackage(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const submissionData = { ...formData, selectedPackage };
    console.log('Offer Submitted:', submissionData);
    alert('Terima kasih atas pengajuan penawaran Anda! Saya akan segera meninjaunya dan menghubungi Anda kembali.');
    setFormData({ name: '', email: '', company: '', budget: '', description: '' });
    if(packages.length > 0) setSelectedPackage(packages[0]); // Reset to default
  };

  return (
    <section id="offer" className="py-24 pt-40 bg-dark-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t('offer_page.title_part1')} <span className="text-gradient">{t('offer_page.title_part2')}</span>
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-dark-300 text-lg max-w-2xl mx-auto">
            {t('offer_page.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="bg-dark-900 rounded-2xl p-8 border border-dark-800 space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-dark-200 mb-2 font-medium">{t('offer_page.form_name')}</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-dark-100 focus:outline-none focus:border-primary-600 transition-colors" placeholder={t('offer_page.form_name_placeholder')} />
              </div>
              <div>
                <label htmlFor="email" className="block text-dark-200 mb-2 font-medium">{t('offer_page.form_email')}</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-dark-100 focus:outline-none focus:border-primary-600 transition-colors" placeholder={t('offer_page.form_email_placeholder')} />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block text-dark-200 mb-2 font-medium">{t('offer_page.form_company')}</label>
              <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-dark-100 focus:outline-none focus:border-primary-600 transition-colors" placeholder={t('offer_page.form_company_placeholder')} />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="selectedPackage" className="block text-dark-200 mb-2 font-medium">{t('offer_page.form_package')}</label>
                <div className="relative">
                  <select id="selectedPackage" name="selectedPackage" value={selectedPackage} onChange={handlePackageChange} required className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-dark-100 focus:outline-none focus:border-primary-600 transition-colors appearance-none" >
                    <option value="" disabled>{t('offer_page.form_package_placeholder')}</option>
                    {packages.map(pkg => <option key={pkg} value={pkg}>{pkg}</option>)}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="budget" className="block text-dark-200 mb-2 font-medium">{t('offer_page.form_budget')}</label>
                <input type="text" id="budget" name="budget" value={formData.budget} onChange={handleChange} className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-dark-100 focus:outline-none focus:border-primary-600 transition-colors" placeholder={t('offer_page.form_budget_placeholder')} />
              </div>
            </div>

            <div>
              <label htmlFor="description" className="block text-dark-200 mb-2 font-medium">{t('offer_page.form_description')}</label>
              <textarea id="description" name="description" value={formData.description} onChange={handleChange} required rows={6} className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-dark-100 focus:outline-none focus:border-primary-600 transition-colors resize-none" placeholder={t('offer_page.form_description_placeholder')}></textarea>
            </div>

            <button type="submit" className="w-full py-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-600/50 transition-all duration-300 flex items-center justify-center gap-2">
              <FileText size={20} />
              {t('offer_page.form_button')}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferPage;
