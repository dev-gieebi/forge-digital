import Hero from '../components/home/Hero'
import ServicesPreview from '../components/home/ServicesPreview'
import StatsBand from '../components/common/StatsBand'
import Splash from '../components/common/Splash'
import { usePageMeta } from '../hooks/usePageMeta'

export default function Home() {
  usePageMeta(
    'Forge Digital — Des idées en solutions digitales',
    'Des solutions digitales sur mesure pour donner vie à vos idées et faire grandir votre activité.',
  )

  return (
    <>
      <Splash side="left" />
      <Splash side="right" />
      <Hero />
      <StatsBand />
      <ServicesPreview />

      <div className="pb-16 text-center">
        <p className="divider-dots text-xs font-bold uppercase tracking-[0.35em]">
          Votre projet, notre créativité
        </p>
      </div>
    </>
  )
}
