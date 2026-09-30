import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, X } from 'lucide-react'
import { navigation } from '../../data/navigation'
import { cn } from '../../lib/utils'
import logo from '../../assets/images/logo.webp'

interface MobileMenuProps {
  onClose: () => void
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <motion.div
      className="fixed inset-0 z-[60] flex flex-col bg-forge-navy"
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '100%' }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      role="dialog"
      aria-modal="true"
      aria-label="Menu de navigation"
    >
      <div className="flex h-[72px] items-center justify-between px-6">
        <img src={logo} alt="Forge Digital" className="h-9 w-auto rounded" />
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10"
          onClick={onClose}
          aria-label="Fermer le menu"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      <nav className="flex flex-1 flex-col justify-center gap-2 px-8" aria-label="Navigation mobile">
        {navigation.map((item, i) => (
          <motion.div
            key={item.path}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.08 + i * 0.06, duration: 0.35, ease: 'easeOut' }}
          >
            <NavLink
              to={item.path}
              onClick={onClose}
              className={({ isActive }) =>
                cn(
                  'block border-b border-white/10 py-4 text-2xl font-bold text-white/80 transition-colors hover:text-white',
                  isActive && 'text-forge-blue',
                )
              }
            >
              {item.label}
            </NavLink>
          </motion.div>
        ))}
      </nav>

      <motion.div
        className="px-8 pb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.35 }}
      >
        <Link
          to="/contact"
          onClick={onClose}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-forge-blue px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-forge-blue-dark"
        >
          Nous contacter
          <ArrowRight className="h-4 w-4" />
        </Link>
        <p className="font-script mt-6 text-center text-2xl text-white/70">
          Des idées en solutions digitales.
        </p>
      </motion.div>
    </motion.div>
  )
}
