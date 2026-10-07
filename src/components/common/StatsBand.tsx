import { Clock, Rocket, ShieldCheck, Users } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import StatCard from './StatCard'

interface StatsBandProps {
  leftScript?: string
  rightScript?: string
}

/**
 * Navy stats band shown on multiple pages, matching the mockups.
 */
export default function StatsBand({
  leftScript = "Plus qu'un service, une collaboration",
  rightScript = 'Ensemble, construisons des projets qui font la différence.',
}: StatsBandProps) {
  return (
    <section className="relative z-10 bg-forge-navy">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-6 px-6 py-8 lg:px-10">
        <AnimatedSection className="hidden xl:block">
          <p className="font-script max-w-[180px] text-2xl leading-snug text-white/90">
            {leftScript}
            <span className="ml-1 inline-block text-forge-blue">↗</span>
          </p>
        </AnimatedSection>

        <div className="grid w-full flex-1 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatedSection delay={0.05}>
            <StatCard icon={Rocket} value={50} prefix="+" label="projets réalisés" />
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <StatCard icon={Users} value={30} prefix="+" label="clients satisfaits" />
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <StatCard icon={Clock} value={100} suffix="%" label="engagement" />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <StatCard icon={ShieldCheck} value={null} label="Des résultats" sublabel="concrets" />
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.25} className="hidden xl:block">
          <p className="font-script max-w-[200px] text-right text-2xl leading-snug text-white/90">
            {rightScript}
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
