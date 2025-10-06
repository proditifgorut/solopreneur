import React from 'react';
import { Heart } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const quickLinks = [
    { label: t('navbar.about'), href: '#about' },
    { label: t('navbar.services'), href: '#services' },
    { label: t('navbar.pricing'), href: '#pricing' },
    { label: t('navbar.portfolio'), href: '#portfolio' },
    { label: t('navbar.contact'), href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dark-900 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold text-gradient mb-4">Hardirstm</div>
            <p className="text-dark-400 leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-dark-50 mb-4">{t('footer.quick_links')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-dark-400 hover:text-primary-400 transition-colors bg-transparent border-none cursor-pointer p-0 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-dark-50 mb-4">{t('footer.contact')}</h3>
            <div className="space-y-2 text-dark-400">
              <p>Jakarta, Indonesia</p>
              <p>halo@hardirstm.dev</p>
              <p>+62 812-3456-7890</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-dark-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-dark-400 text-sm">
            {t('footer.copyright', { year: currentYear })}
          </p>
          <p className="text-dark-400 text-sm flex items-center gap-2">
            <Trans i18nKey="footer.made_with">
              Dibuat dengan <Heart className="text-red-500 fill-red-500" size={16} /> untuk klien luar biasa
            </Trans>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
