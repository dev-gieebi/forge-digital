import { ArrowRight, HeartHandshake, History, Lightbulb, Rocket, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import AnimatedSection from '../components/common/AnimatedSection'
import PageHero from '../components/common/PageHero'
import Splash from '../components/common/Splash'
import StatsBand from '../components/common/StatsBand'
import { usePageMeta } from '../hooks/usePageMeta'
import heroAbout from '../assets/images/hero-about.webp'
import missionImg from '../assets/images/about-mission.webp'

const values = [
  { icon: Lightbulb, title: 'Créativité', text: 'Des idées originales pour vous démarquer.' },
  { icon: HeartHandshake, title: 'Engagement', text: 'Votre réussite est notre priorité.' },
  { icon: Users, title: 'Proximité', text: 'Une écoute attentive, un accompagnement sur mesure.' },
  { icon: Rocket, title: 'Innovation', text: 'Toujours à la pointe des nouvelles technologies.' },
]

export default function About() {
  usePageMeta(
    'À propos — Forge Digital',
    'Forge Digital est une agence de création et de solutions digitales basée sur l’innovation, la créativité et l’engagement.',
  )

  return (
    <>
      <Splash side="left" />
      <Splash side="right" />

      <PageHero
        label="À propos"
        title={
          <>
            Une équipe passionnée,
            <br />
            <span className="text-forge-blue">au service de vos idées</span>
          </>
        }
        description="Forge Digital est une agence de création et de solutions digitales basée sur l'innovation, la créativité et l'engagement. Nous accompagnons entreprises, marques et particuliers dans la réalisation de leurs projets digitaux, de la conception à la mise en ligne."
        script="Transformer vos idées en réalité digitale."
        image={heroAbout}
        imageAlt="Un membre de l'équipe Forge Digital travaillant sur plusieurs écrans"
      />

      <section className="relative pb-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-3 lg:px-10">
          {/* Notre histoire */}
          <AnimatedSection>
            <div className="flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-8 shadow-card">
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-forge-light text-forge-blue">
                <History className="h-6 w-6" />
              </span>
              <h2 className="text-xl font-bold text-forge-navy">Notre histoire</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-forge-muted">
                Forge Digital est née d'une vision simple : rendre le digital accessible et utile à
                tous. Avec des compétences variées et une volonté constante d'apprendre, nous avons
                construit une équipe capable de transformer vos besoins en solutions concrètes,
                modernes et efficaces.
              </p>
              <Link
                to="/contact"
                className="group mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-forge-blue px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-forge-blue-dark"
              >
                Découvrir notre histoire
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </AnimatedSection>

          {/* Nos valeurs */}
          <AnimatedSection delay={0.1}>
            <div className="h-full rounded-3xl border border-slate-100 bg-white p-8 shadow-card">
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-forge-light text-forge-blue">
                <Lightbulb className="h-6 w-6" />
              </span>
              <h2 className="text-xl font-bold text-forge-navy">Nos valeurs</h2>
              <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {values.map(({ icon: Icon, title, text }) => (
                  <li key={title} className="flex gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forge-light text-forge-blue">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-forge-navy">{title}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-forge-muted">{text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Notre mission */}
          <AnimatedSection delay={0.2}>
            <div className="relative h-full overflow-hidden rounded-3xl bg-forge-navy shadow-card">
              <img
                src={missionImg}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover opacity-30"
                loading="lazy"
              />
              <div className="relative flex h-full flex-col p-8">
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-white">
                  <Rocket className="h-6 w-6" />
                </span>
                <h2 className="text-xl font-bold text-white">Notre mission</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/85">
                  Aider nos clients à se démarquer dans un monde digital en constante évolution,
                  grâce à des solutions sur mesure, créatives et performantes.
                </p>
                <p className="font-script mt-6 text-2xl text-white/90">
                  Ensemble, construisons le digital de demain !
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <StatsBand
        leftScript="Plus de 50 projets menés avec passion"
        rightScript="Plus qu'une agence, un partenaire."
      />
    </>
  )
}
