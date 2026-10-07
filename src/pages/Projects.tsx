import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, X } from 'lucide-react'
import AnimatedSection from '../components/common/AnimatedSection'
import Splash from '../components/common/Splash'
import { projectFilters, projects, type Project, type ProjectCategory } from '../data/projects'
import { cn } from '../lib/utils'
import { usePageMeta } from '../hooks/usePageMeta'
import heroProjects from '../assets/images/hero-projects.png'

type Filter = ProjectCategory | 'tous'

export default function Projects() {
  usePageMeta(
    'Nos réalisations Forge Digital',
    'Découvrez quelques projets sur lesquels nous avons travaillé : sites web, infographie, print, textile et vidéos IA.',
  )

  const [filter, setFilter] = useState<Filter>('tous')
  const [selected, setSelected] = useState<Project | null>(null)

  const visible = projects.filter((p) => filter === 'tous' || p.category === filter)

  return (
    <>
      <Splash side="left" />
      <Splash side="right" />

      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute -right-24 -top-16 h-[420px] w-[560px] rounded-[45%_55%_60%_40%/50%_45%_55%_50%] bg-forge-light"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 pb-10 pt-28 lg:grid-cols-2 lg:px-10 lg:pt-36">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h1 className="text-4xl font-extrabold leading-[1.1] text-forge-navy sm:text-5xl">
              Nos Réalisations
            </h1>
            <p className="mt-2 text-lg font-bold uppercase tracking-[0.15em] text-forge-blue">
              Des idées qui prennent vie
            </p>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-forge-muted sm:text-base">
              Découvrez quelques projets sur lesquels nous avons travaillé. Chaque réalisation
              reflète notre engagement : des solutions créatives, modernes et sur mesure pour donner
              plus d'impact à vos idées.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          >
            <img
              src={heroProjects}
              alt="Réalisations Forge Digital : flyers, site web et textile BOMA"
              className="w-full rounded-3xl object-cover shadow-2xl shadow-forge-navy/20"
            />
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <AnimatedSection className="flex flex-wrap gap-3">
          {projectFilters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={cn(
                'rounded-full px-5 py-2 text-xs font-semibold transition-all duration-300',
                filter === f.id
                  ? 'bg-forge-navy text-white shadow-lg shadow-forge-navy/25'
                  : 'bg-white text-forge-navy shadow-card hover:bg-forge-light',
              )}
            >
              {f.label}
            </button>
          ))}
        </AnimatedSection>
      </div>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-8 lg:px-10">
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="group relative h-64 cursor-pointer overflow-hidden rounded-2xl shadow-card transition-shadow duration-300 hover:shadow-card-hover"
                onClick={() => setSelected(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-forge-navy/50 p-4">
                  <div>
                    <h3 className="text-sm font-bold text-white">{project.title}</h3>
                    <p className="mt-1 text-[11px] leading-snug text-white/75">{project.tags}</p>
                  </div>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forge-blue text-white transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <div className="pb-16 text-center">
        <p className="divider-dots text-xs font-bold uppercase tracking-[0.35em]">
          Votre projet, notre créativité
        </p>
      </div>

      {/* Project modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-forge-navy/80 p-6 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`Projet ${selected.title}`}
          >
            <motion.div
              className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl"
              initial={{ scale: 0.92, y: 24 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 24 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-forge-navy text-white transition-colors hover:bg-forge-blue"
                onClick={() => setSelected(null)}
                aria-label="Fermer"
              >
                <X className="h-5 w-5" />
              </button>
              <img
                src={selected.image}
                alt={selected.title}
                className="h-64 w-full object-cover sm:h-80"
              />
              <div className="p-6">
                <span className="inline-block rounded-full bg-forge-light px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-forge-blue">
                  {projectFilters.find((f) => f.id === selected.category)?.label}
                </span>
                <h3 className="mt-3 text-2xl font-extrabold text-forge-navy">{selected.title}</h3>
                <p className="mt-1 text-xs font-semibold text-forge-blue">{selected.tags}</p>
                <p className="mt-3 text-sm leading-relaxed text-forge-muted">
                  {selected.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
