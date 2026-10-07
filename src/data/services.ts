import {
  Bot,
  Clapperboard,
  Code,
  Globe,
  Megaphone,
  Monitor,
  PenTool,
  Shirt,
  type LucideIcon,
} from 'lucide-react'

import imgInfographie from '../assets/images/services/infographie.webp'
import imgWebdesign from '../assets/images/services/webdesign.webp'
import imgSiteweb from '../assets/images/services/siteweb.webp'
import imgIa from '../assets/images/services/ia.png'
import imgPrint from '../assets/images/services/print.webp'
import imgVideo from '../assets/images/services/video.webp'

export interface Service {
  id: string
  title: string
  description: string
  icon: LucideIcon
  image?: string
}

/** Services displayed on the home page (5 cards, no image). */
export const homeServices: Service[] = [
  {
    id: 'web-design',
    title: 'Web Design',
    description: 'Des sites modernes, rapides et adaptés à votre image.',
    icon: Monitor,
  },
  {
    id: 'developpement',
    title: 'Développement',
    description: 'Applications web, solutions sur mesure et agents IA personnalisés.',
    icon: Code,
  },
  {
    id: 'infographie',
    title: 'Infographie',
    description: 'Logos, affiches, flyers, cartes de visite et plus encore.',
    icon: PenTool,
  },
  {
    id: 'marketing',
    title: 'Marketing Digital',
    description: 'Stratégies digitales, gestion des réseaux sociaux, contenu créatif.',
    icon: Megaphone,
  },
  {
    id: 'impression',
    title: 'Impression',
    description: 'T-shirts, casquettes, flyers, cartes de visite et plus encore.',
    icon: Shirt,
  },
]

/** Full services displayed on the services page (6 cards with images). */
export const services: Service[] = [
  {
    id: 'infographie',
    title: 'Infographie',
    description:
      'Création de visuels percutants : logos, affiches, flyers, cartes de visite, visuels pour les réseaux sociaux, et bien plus encore.',
    icon: PenTool,
    image: imgInfographie,
  },
  {
    id: 'web-design',
    title: 'Web Design',
    description:
      'Des sites modernes, rapides et adaptés à vos besoins pour valoriser votre entreprise et votre image.',
    icon: Monitor,
    image: imgWebdesign,
  },
  {
    id: 'creation-sites-web',
    title: 'Création de sites web',
    description:
      'Du site vitrine au site e-commerce, nous développons des plateformes sur mesure, simples à gérer et optimisées pour la performance.',
    icon: Globe,
    image: imgSiteweb,
  },
  {
    id: 'agents-ia',
    title: "Développement d'agents IA",
    description:
      'Automatisez vos tâches, améliorez votre productivité et offrez une meilleure expérience à vos clients avec des agents IA personnalisés.',
    icon: Bot,
    image: imgIa,
  },
  {
    id: 'impression-supports',
    title: 'Impression sur supports',
    description:
      'Donnez vie à vos idées sur T-shirts, casquettes, mugs et autres supports personnalisés. Qualité et finition au rendez-vous.',
    icon: Shirt,
    image: imgPrint,
  },
  {
    id: 'videos-ia',
    title: 'Vidéos promotionnelles IA',
    description:
      'Des vidéos impactantes avec voix off et images générées par IA pour donner de la visibilité et booster votre visibilité.',
    icon: Clapperboard,
    image: imgVideo,
  },
]
