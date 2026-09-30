import { ArrowRight, Clock, HeartHandshake, Lightbulb, ShieldCheck, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import AnimatedSection from '../components/common/AnimatedSection'
import Button from '../components/common/Button'
import PageHero from '../components/common/PageHero'
import Splash from '../components/common/Splash'
import { services } from '../data/services'
import { usePageMeta } from '../hooks/usePageMeta'
import heroServices from '../assets/images/hero-services.webp'

const whyUs = [
  { icon: Lightbulb, label: 'Créativité sans limites' },
  { icon: ShieldCheck, label: 'Qualité & fiabilité' },
  { icon: HeartHandshake, label: 'Accompagnement personnalisé' },
  { icon: Clock, label: 'Respect des délais' },
  { icon: Star, label: 'Votre satisfaction, notre priorité' },
]

export default function Services() {
  usePageMeta(
    'Nos services — Forge Digital',
    'Infographie, web design, création de sites web, agents IA, impression sur supports et vidéos promotionnelles IA.',
  )

  return (
    <>
      <Splash side="left" />
      <Splash side="right" />

      <PageHero
        label="Nos services"
        title={
          <>
            Des solutions digitales
            <br />
            <span className="text-forge-blue">sur mesure</span>
          </>
        }
        description="Chez Forge Digital, nous vous accompagnons dans la transformation de vos idées en outils concrets et performants. Que vous soyez une entreprise, une marque ou un particulier, nous mettons notre créativité et notre expertise au service de votre succès."
        image={heroServices}
        imageAlt="Ordinateur portable et smartphone affichant les solutions Forge Digital"
      >
        <Button to="/contact" withArrow>
          Découvrir tous nos services
        </Button>
      </PageHero>

      <section className="relative pb-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 lg:px-10">
          {services.map((service, i) => (
            <AnimatedSection key={service.id} delay={i * 0.06} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-card-hover">
                <div className="flex flex-1 flex-col p-5">
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-forge-light text-forge-blue transition-all duration-300 group-hover:bg-forge-blue group-hover:text-white">
                    <service.icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-sm font-bold text-forge-navy">{service.title}</h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-forge-muted">
                    {service.description}
                  </p>
                  <Link
                    to="/contact"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-forge-blue transition-colors hover:text-forge-blue-dark"
                  >
                    En savoir plus
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
                {service.image && (
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="h-24 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="relative z-10 bg-forge-navy">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-10 gap-y-8 px-6 py-12 lg:px-10">
          <AnimatedSection>
            <p className="font-script max-w-[160px] text-3xl leading-snug text-white">
              Pourquoi nous choisir ?
            </p>
          </AnimatedSection>
          {whyUs.map(({ icon: Icon, label }, i) => (
            <AnimatedSection key={label} delay={0.06 * (i + 1)}>
              <div className="flex max-w-[170px] items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10">
                  <Icon className="h-5 w-5 text-forge-blue" />
                </span>
                <p className="text-xs font-semibold leading-snug text-white">{label}</p>
              </div>
            </AnimatedSection>
          ))}
          <AnimatedSection delay={0.4}>
            <p className="font-script max-w-[190px] text-right text-2xl leading-snug text-white/85">
              Ensemble, donnons vie à vos idées !
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="py-12 text-center">
        <p className="divider-dots text-xs font-bold uppercase tracking-[0.35em]">
          Votre projet, notre créativité
        </p>
      </div>
    </>
  )
}
