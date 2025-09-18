import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { name: 'Caftans', href: '/shop?category=caftans' },
      { name: 'Takchitas', href: '/shop?category=takchitas' },
      { name: 'Jellabas', href: '/shop?category=jellabas' },
      { name: 'Babouches', href: '/shop?category=babouches' },
      { name: 'Accessories', href: '/shop?category=accessories' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Artisans', href: '/artisans' },
      { name: 'Sustainability', href: '/sustainability' },
      { name: 'Press', href: '/press' },
      { name: 'Careers', href: '/careers' },
    ],
    support: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'Size Guide', href: '/size-guide' },
      { name: 'Shipping', href: '/shipping' },
      { name: 'Returns', href: '/returns' },
      { name: 'FAQs', href: '/faq' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Accessibility', href: '/accessibility' },
    ],
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-600' },
    { name: 'TikTok', icon: Twitter, href: '#', color: 'hover:text-black' },
  ];

  return (
    <footer className="bg-deep-blue text-deep-blue-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link to="/" className="text-2xl font-serif font-bold text-primary mb-4 block">
                Mina
              </Link>
              <p className="text-deep-blue-foreground/80 mb-6 leading-relaxed">
                Authentic Moroccan clothing crafted by master artisans. 
                Bringing centuries of tradition to modern fashion.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>Marrakech, Morocco</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>+212 600 000 000</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>hello@mina.com</span>
                </div>
              </div>
            </div>

            {/* Shop Links */}
            <div>
              <h3 className="font-serif text-lg font-semibold mb-4 text-primary">Shop</h3>
              <ul className="space-y-2">
                {footerLinks.shop.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href}
                      className="text-deep-blue-foreground/80 hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-serif text-lg font-semibold mb-4 text-primary">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href}
                      className="text-deep-blue-foreground/80 hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="font-serif text-lg font-semibold mb-4 text-primary">Support</h3>
              <ul className="space-y-2">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href}
                      className="text-deep-blue-foreground/80 hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="font-serif text-lg font-semibold mb-4 text-primary">Legal</h3>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href}
                      className="text-deep-blue-foreground/80 hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-deep-blue-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-sm text-deep-blue-foreground/70">
              © {currentYear} Mina. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`text-deep-blue-foreground/70 ${social.color} transition-colors duration-200`}
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Currency */}
            <div className="text-sm text-deep-blue-foreground/70">
              Currency: MAD (Moroccan Dirham)
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;