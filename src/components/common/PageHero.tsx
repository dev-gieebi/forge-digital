import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface PageHeroProps {
  label: string
  title: ReactNode
  description: string
  script?: string
  image: string
  imageAlt: string
  children?: ReactNode
}

/**
 * Shared hero layout for inner pages: text left, image right,
 * with the decorative light-blue blob behind the image.
 */
export default function PageHero({
  label,
  title,
  description,
  script,
  image,
  imageAlt,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden">
      {/* decorative blob */}
      <div
        className="pointer-events-none absolute -right-24 -top-16 h-[460px] w-[560px] rounded-[45%_55%_60%_40%/50%_45%_55%_50%] bg-forge-light"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 pb-14 pt-28 lg:grid-cols-2 lg:px-10 lg:pt-36">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-forge-blue">
            {label}
            <span className="h-px w-14 bg-forge-blue" aria-hidden="true" />
          </p>
          <h1 className="text-4xl font-extrabold leading-[1.12] text-forge-navy sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-forge-muted sm:text-base">
            {description}
          </p>
          {script && (
            <p className="font-script mt-6 text-3xl text-forge-navy/80">
              {script}
              <span className="ml-1 inline-block text-forge-blue">↗</span>
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
        >
          <img
            src={image}
            alt={imageAlt}
            className="w-full rounded-3xl object-cover shadow-2xl shadow-forge-navy/20"
          />
        </motion.div>
      </div>
    </section>
  )
}
