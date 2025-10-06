import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Check, Sparkles, Rocket, Building, Store } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  const { t } = useTranslation();

  const plans = [
    {
      icon: Store,
      name: t('pricing.umkm_name'),
      price: 'Rp 2 – 5',
      unit: 'juta',
      description: t('pricing.umkm_desc'),
      features: [
        t('pricing.umkm_f1'),
        t('pricing.umkm_f2'),
        t('pricing.umkm_f3'),
        t('pricing.umkm_f4'),
      ],
      color: 'from-green-600 to-emerald-600',
      popular: false,
    },
    {
      icon: Sparkles,
      name: t('pricing.starter_name'),
      price: 'Rp 7 – 10',
      unit: 'juta',
      description: t('pricing.starter_desc'),
      features: [
        t('pricing.starter_f1'),
        t('pricing.starter_f2'),
        t('pricing.starter_f3'),
        t('pricing.starter_f4'),
      ],
      color: 'from-blue-600 to-cyan-600',
      popular: false,
    },
    {
      icon: Rocket,
      name: t('pricing.pro_name'),
      price: 'Rp 12 – 20',
      unit: 'juta',
      description: t('pricing.pro_desc'),
      features: [
        t('pricing.pro_f1'),
        t('pricing.pro_f2'),
        t('pricing.pro_f3'),
        t('pricing.pro_f4'),
      ],
      color: 'from-primary-600 to-purple-600',
      popular: true,
    },
    {
      icon: Building,
      name: t('pricing.enterprise_name'),
      price: 'Rp 30+',
      unit: 'juta',
      description: t('pricing.enterprise_desc'),
      features: [
        t('pricing.enterprise_f1'),
        t('pricing.enterprise_f2'),
        t('pricing.enterprise_f3'),
        t('pricing.enterprise_f4'),
      ],
      color: 'from-purple-600 to-pink-600',
      popular: false,
    },
  ];

  const handleClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t('pricing.title_part1')} <span className="text-gradient">{t('pricing.title_part2')}</span>
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-dark-300 text-lg max-w-2xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-dark-800 rounded-2xl p-8 border ${
                  plan.popular ? 'border-primary-600 shadow-xl shadow-primary-600/20' : 'border-dark-700'
                } flex flex-col hover:border-primary-600 transition-all duration-300 hover:scale-105`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-to-r from-primary-600 to-purple-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                      {t('pricing.popular')}
                    </div>
                  </div>
                )}

                <div className={`inline-block p-3 bg-gradient-to-r ${plan.color} rounded-xl mb-6 self-start`}>
                  <Icon className="text-white" size={28} />
                </div>

                <h3 className="text-2xl font-bold text-dark-50 mb-2">{plan.name}</h3>
                <p className="text-dark-400 text-sm mb-6 h-12">{plan.description}</p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-gradient">{plan.price}</span>
                    <span className="text-dark-400 text-sm">{plan.unit}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-dark-300 text-sm">
                      <Check className="text-primary-400 flex-shrink-0 mt-0.5" size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/penawaran?paket=${encodeURIComponent(plan.name)}`}
                  className={`block text-center w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-primary-600 to-purple-600 text-white hover:shadow-lg hover:shadow-primary-600/50'
                      : 'bg-dark-700 text-dark-100 hover:bg-dark-600'
                  }`}
                >
                  {t('pricing.button')}
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center bg-dark-800 border border-dark-700 rounded-xl p-6"
        >
          <p className="text-dark-300">
            {t('pricing.custom_solution_text')}
            <button onClick={() => handleClick('#contact')} className="text-primary-400 hover:text-primary-300 font-semibold bg-transparent border-none cursor-pointer">
              {t('pricing.custom_solution_link')}
            </button>
            {t('pricing.custom_solution_text2')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
