import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const WhatsAppButton: React.FC = () => {
  const { t } = useTranslation();
  const phoneNumber = '+6283119226089';
  const message = `Halo, saya tertarik untuk menggunakan layanan Anda dan ingin berkonsultasi lebih lanjut.`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-green-500 text-white font-bold py-3 px-5 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
    >
      <FaWhatsapp size={24} />
      <span className="hidden sm:inline">{t('whatsapp')}</span>
    </a>
  );
};

export default WhatsAppButton;
