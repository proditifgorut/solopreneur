import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Budi Santoso',
      role: 'Pemilik, Toko Berkah',
      avatar: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/100x100/1e3a8a/ffffff?text=BS',
      rating: 5,
      text: 'Aplikasi web yang dibuat sangat membantu usaha UMKM saya. Proses pemesanan jadi lebih mudah dan penjualan meningkat 40%. Sangat direkomendasikan!',
    },
    {
      name: 'Sarah Williams',
      role: 'CEO, TechStart Inc.',
      avatar: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/100x100/1e3a8a/ffffff?text=SW',
      rating: 5,
      text: 'Profesional, cepat, dan memberikan hasil persis seperti yang kami butuhkan. Aplikasi mobile berfungsi sempurna dan pengguna kami menyukainya.',
    },
    {
      name: 'Ahmad Rahman',
      role: 'Pendiri, EdukasiBelajar',
      avatar: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/100x100/1e3a8a/ffffff?text=AR',
      rating: 5,
      text: 'Platform e-learning yang dibangun sangat ramah pengguna dan stabil. Dukungan pasca-pengembangan juga sangat baik. Terima kasih!',
    },
    {
      name: 'Jennifer Lee',
      role: 'Direktur Pemasaran, RetailCo',
      avatar: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/100x100/1e3a8a/ffffff?text=JL',
      rating: 5,
      text: 'Sistem CRM telah mengubah cara kami mengelola hubungan pelanggan. Kode yang bersih, dokumentasi yang sangat baik, dan dukungan berkelanjutan yang fantastis.',
    },
    {
      name: 'Dian Pratiwi',
      role: 'Pemilik, Warung Makan Sedap',
      avatar: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/100x100/1e3a8a/ffffff?text=DP',
      rating: 5,
      text: 'Dengan paket UMKM, saya bisa punya website profesional dengan harga terjangkau. Sekarang pelanggan bisa lihat menu dan pesan online. Mantap!',
    },
    {
      name: 'Michael Chen',
      role: 'CTO, DataAnalytics Pro',
      avatar: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/100x100/1e3a8a/ffffff?text=MC',
      rating: 5,
      text: 'Pengembangan tingkat ahli dengan perhatian terhadap detail. Dasbor analitiknya persis seperti yang kami butuhkan. Menantikan kolaborasi di masa depan.',
    },
  ];

  return (
    <section className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Testimoni <span className="text-gradient">Klien</span>
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-dark-300 text-lg max-w-2xl mx-auto">
            Apa kata klien saya tentang bekerja sama dengan saya.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-dark-800 rounded-2xl p-8 border border-dark-700 hover:border-primary-600 transition-all duration-300 hover:shadow-xl hover:shadow-primary-600/10"
            >
              <Quote className="text-primary-600 mb-4" size={32} />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={16} />
                ))}
              </div>

              <p className="text-dark-200 mb-6 leading-relaxed">{testimonial.text}</p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-primary-600"
                />
                <div>
                  <div className="font-semibold text-dark-50">{testimonial.name}</div>
                  <div className="text-dark-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
