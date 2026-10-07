import {
  Cpu,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Target,
  Users,
} from 'lucide-react'
import AnimatedSection from '../components/common/AnimatedSection'
import PageHero from '../components/common/PageHero'
import Splash from '../components/common/Splash'
import StatsBand from '../components/common/StatsBand'
import { usePageMeta } from '../hooks/usePageMeta'
import heroWhyUs from '../assets/images/hero-whyus.jpg'

const reasons = [
  {
    icon: Lightbulb,
    title: 'Créativité sans limites',
    text: 'Nous transformons vos idées en visuels percutants et en solutions digitales innovantes, qui marquent les esprits.',
  },
  {
    icon: Target,
    title: 'Une approche sur mesure',
    text: 'Chaque projet est unique. Nous prenons le temps de comprendre vos besoins pour vous proposer des solutions adaptées.',
  },
  {
    icon: ShieldCheck,
    title: 'Qualité & fiabilité',
    text: "Nous mettons un point d'honneur à livrer des résultats professionnels, respectant les délais et vos exigences.",
  },
  {
    icon: Users,
    title: 'Une équipe passionnée',
    text: 'Une équipe jeune, dynamique et motivée, toujours à l’écoute pour vous accompagner à chaque étape de votre projet.',
  },
  {
    icon: Cpu,
    title: 'Maîtrise des outils modernes',
    text: 'Nous utilisons les dernières technologies et tendances du digital pour vous offrir des solutions performantes et évolutives.',
  },
  {
    icon: HeartHandshake,
    title: 'Votre satisfaction, notre priorité',
    text: 'Votre réussite est notre plus grande motivation. Nous restons à vos côtés, bien au-delà de la livraison de votre projet.',
  },
]

export default function WhyUs() {
  usePageMeta(
    'Pourquoi nous — Forge Digital',
    'Plus qu’une agence, un partenaire de votre réussite : créativité, qualité, accompagnement et résultats concrets.',
  )

  return (
    <>
      <Splash side="left" />
      <Splash side="right" />

      <PageHero
        label="Pourquoi nous"
        title={
          <>
            Plus qu'une agence,
            <br />
            <span className="text-forge-blue">un partenaire de votre réussite</span>
          </>
        }
        description="Chez Forge Digital, nous croyons que chaque projet est une histoire unique. C'est pourquoi nous mettons notre expertise, notre créativité et notre passion au service de vos idées, pour vous offrir des solutions digitales sur mesure, performantes et durables."
        script="Votre vision, notre engagement !"
        image={heroWhyUs}
        imageAlt="L'équipe Forge Digital réunie autour d'un ordinateur portable"
      />

      <section className="relative pb-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-6 lg:px-10">
          {reasons.map(({ icon: Icon, title, text }, i) => (
            <AnimatedSection key={title} delay={i * 0.06} className="h-full">
              <article className="group h-full rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-card transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-card-hover">
                <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-forge-light text-forge-blue transition-all duration-300 group-hover:bg-forge-blue group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-sm font-bold text-forge-navy">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-forge-muted">{text}</p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <StatsBand
        leftScript="Des projets qui parlent d'eux-mêmes"
        rightScript="Ensemble, créons le digital de demain !"
      />
    </>
  )
}
