import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, Rocket, Building, Store } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      icon: Store,
      name: 'Paket UMKM',
      price: 'Rp 2 – 5',
      unit: 'juta',
      description: 'Untuk usaha kecil yang ingin memiliki website profesional sederhana.',
      features: [
        '1–3 halaman website',
        'Desain responsif',
        'Formulir kontak',
        'Panduan update konten',
      ],
      color: 'from-green-600 to-emerald-600',
      popular: false,
    },
    {
      icon: Sparkles,
      name: 'Starter',
      price: 'Rp 7 – 10',
      unit: 'juta',
      description: 'Untuk bisnis atau startup tahap awal.',
      features: [
        'Landing page profesional',
        'SEO dasar',
        'Setup hosting',
        'Integrasi analitik',
      ],
      color: 'from-blue-600 to-cyan-600',
      popular: false,
    },
    {
      icon: Rocket,
      name: 'Professional',
      price: 'Rp 12 – 20',
      unit: 'juta',
      description: 'Untuk aplikasi web dinamis dengan backend dan basis data.',
      features: [
        'Integrasi API',
        'Dashboard admin',
        'Keamanan dasar',
        'Dukungan 3 bulan',
      ],
      color: 'from-primary-600 to-purple-600',
      popular: true,
    },
    {
      icon: Building,
      name: 'Enterprise',
      price: 'Rp 30+',
      unit: 'juta',
      description: 'Untuk sistem besar atau SaaS.',
      features: [
        'Pengembangan penuh',
        'Keamanan lanjutan',
        'Support & maintenance',
        'Prioritas update',
      ],
      color: 'from-purple-600 to-pink-600',
      popular: false,
    },
  ];

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
            Paket <span className="text-gradient">Harga</span>
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-dark-300 text-lg max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan dan anggaran bisnis Anda.
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
                } hover:border-primary-600 transition-all duration-300 hover:scale-105`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-to-r from-primary-600 to-purple-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                      PALING POPULER
                    </div>
                  </div>
                )}

                <div className={`inline-block p-3 bg-gradient-to-r ${plan.color} rounded-xl mb-6`}>
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

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-dark-300 text-sm">
                      <Check className="text-primary-400 flex-shrink-0 mt-0.5" size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-primary-600 to-purple-600 text-white hover:shadow-lg hover:shadow-primary-600/50'
                      : 'bg-dark-700 text-dark-100 hover:bg-dark-600'
                  }`}
                >
                  Mulai
                </button>
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
            Butuh solusi khusus? <a href="#contact" className="text-primary-400 hover:text-primary-300 font-semibold">Hubungi saya</a> untuk penawaran personal.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
