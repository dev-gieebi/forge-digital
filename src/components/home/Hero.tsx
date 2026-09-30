import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HeartHandshake, Play, Rocket, ShieldCheck, X } from 'lucide-react'
import Button from '../common/Button'
import heroImage from '../../assets/images/hero-home.webp'
import videoThumb from '../../assets/images/projects/video-ia.webp'

const features = [
  { icon: Rocket, label: 'Créativité sans limites' },
  { icon: ShieldCheck, label: 'Qualité & fiabilité' },
  { icon: HeartHandshake, label: 'Accompagnement personnalisé' },
]

export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <section className="relative overflow-hidden">
      {/* decorative blobs */}
      <div
        className="pointer-events-none absolute -right-32 -top-24 h-[520px] w-[620px] rounded-[45%_55%_60%_40%/50%_45%_55%_50%] bg-forge-light"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-40 top-40 h-72 w-72 rounded-full bg-forge-sky/50 blur-2xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-16 pt-32 lg:grid-cols-[1fr_1.1fr] lg:px-10 lg:pb-20 lg:pt-40">
        <motion.div
          initial={{ opacity: 0, x: -48 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-forge-blue">
            Forge Digital
            <span className="h-px w-14 bg-forge-blue" aria-hidden="true" />
          </p>
          <h1 className="text-[2.6rem] font-extrabold leading-[1.08] text-forge-navy sm:text-6xl lg:text-[3.4rem]">
            Votre vision,
            <br />
            <span className="text-forge-blue">notre expertise</span>
          </h1>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-forge-muted sm:text-base">
            Des solutions digitales sur mesure pour donner vie à vos idées et faire grandir votre
            activité.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button to="/nos-services" withArrow>
              Découvrir nos services
            </Button>
            <Button variant="outline" onClick={() => setVideoOpen(true)}>
              <Play className="h-4 w-4 fill-current" />
              Voir notre vidéo
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
            {features.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forge-light text-forge-blue">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-xs font-semibold text-forge-navy">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 48 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
        >
          <motion.img
            src={heroImage}
            alt="Interfaces Forge Digital sur ordinateur portable et smartphone"
            className="w-full rounded-3xl object-cover shadow-2xl shadow-forge-navy/25"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute -left-4 top-8 hidden rounded-2xl bg-white px-4 py-3 shadow-card md:block"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
          >
            <p className="text-xs font-bold text-forge-navy">Code · Design · Innovation</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Video modal */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-forge-navy/80 p-6 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setVideoOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Vidéo de présentation Forge Digital"
          >
            <motion.div
              className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl"
              initial={{ scale: 0.92, y: 24 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 24 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-forge-navy text-white transition-colors hover:bg-forge-blue"
                onClick={() => setVideoOpen(false)}
                aria-label="Fermer la vidéo"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="relative">
                <img
                  src={videoThumb}
                  alt="Vidéo promotionnelle Forge Digital"
                  className="aspect-video w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-forge-navy/40">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-forge-blue text-white shadow-xl">
                    <Play className="h-7 w-7 fill-current" />
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-forge-navy">Vidéo promotionnelle IA</h3>
                <p className="mt-1 text-sm text-forge-muted">
                  Découvrez comment nous transformons vos idées en contenus vidéo impactants générés
                  par IA.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
