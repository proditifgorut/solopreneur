import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Tentang', href: '#about' },
    { label: 'Layanan', href: '#services' },
    { label: 'Harga', href: '#pricing' },
    { label: 'Portofolio', href: '#portfolio' },
    { label: 'Kontak', href: '#contact' },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dark-900 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold text-gradient mb-4">Hardirstm</div>
            <p className="text-dark-400 leading-relaxed">
              Layanan pengembangan perangkat lunak profesional untuk UMKM, startup, dan perusahaan. Membangun solusi digital yang efisien dan skalabel.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-dark-50 mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-dark-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-dark-50 mb-4">Kontak</h3>
            <div className="space-y-2 text-dark-400">
              <p>Jakarta, Indonesia</p>
              <p>halo@hardirstm.dev</p>
              <p>+62 812-3456-7890</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-dark-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-dark-400 text-sm">
            © {currentYear} Hardirstm. Semua hak cipta dilindungi.
          </p>
          <p className="text-dark-400 text-sm flex items-center gap-2">
            Dibuat dengan <Heart className="text-red-500 fill-red-500" size={16} /> untuk klien luar biasa
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
