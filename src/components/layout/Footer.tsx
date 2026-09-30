import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { navigation } from '../../data/navigation'
import { services } from '../../data/services'
import SocialIcon, { type SocialName } from '../common/SocialIcon'
import logo from '../../assets/images/logo.webp'

const socials: Array<{ name: SocialName; label: string; href: string }> = [
  { name: 'facebook', label: 'Facebook', href: 'https://facebook.com' },
  { name: 'instagram', label: 'Instagram', href: 'https://instagram.com' },
  { name: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com' },
  { name: 'youtube', label: 'YouTube', href: 'https://youtube.com' },
]

export default function Footer() {
  return (
    <footer className="relative z-10 bg-forge-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div>
          <img src={logo} alt="Forge Digital" className="h-11 w-auto rounded" />
          <p className="font-script mt-5 text-2xl leading-snug text-white/85">
            « L'excellence se forge par la compétence. »
          </p>
          <p className="mt-3 text-sm text-white/60">Des idées en solutions digitales.</p>
        </div>

        <nav aria-label="Navigation du pied de page">
          <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-forge-blue">
            Navigation
          </h3>
          <ul className="space-y-2.5">
            {navigation.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-forge-blue">
            Services
          </h3>
          <ul className="space-y-2.5">
            {services.map((service) => (
              <li key={service.id}>
                <Link
                  to="/nos-services"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-forge-blue">
            Contact
          </h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-forge-blue" />
              +237 6 00 00 00 00
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-forge-blue" />
              contact@forgedigital.com
            </li>
            <li className="flex items-center gap-2.5">
              <MapPin className="h-4 w-4 shrink-0 text-forge-blue" />
              Douala, Cameroun
            </li>
          </ul>
          <div className="mt-5 flex gap-3">
            {socials.map(({ name, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:border-forge-blue hover:bg-forge-blue hover:text-white"
              >
                <SocialIcon name={name} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-xs text-white/50 sm:flex-row lg:px-10">
          <p>© {new Date().getFullYear()} Forge Digital. Tous droits réservés.</p>
          <p className="uppercase tracking-[0.3em]">Votre projet, notre créativité</p>
        </div>
      </div>
    </footer>
  )
}
