import imgMukite from '../assets/images/projects/mukite.webp'
import imgBella from '../assets/images/projects/bella-event.webp'
import imgOly from '../assets/images/projects/oly-prestige.webp'
import imgCdjt from '../assets/images/projects/cdjt.webp'
import imgLady from '../assets/images/projects/lady.webp'
import imgInstitutionnel from '../assets/images/projects/institutionnel.webp'
import imgBoma from '../assets/images/projects/boma.webp'
import imgVideoIa from '../assets/images/projects/video-ia.webp'

export type ProjectCategory =
  | 'infographie'
  | 'web-design'
  | 'sites-web'
  | 'print-textile'
  | 'video-ia'

export interface Project {
  id: string
  title: string
  category: ProjectCategory
  tags: string
  description: string
  image: string
}

export const projectFilters: Array<{ id: ProjectCategory | 'tous'; label: string }> = [
  { id: 'tous', label: 'Tous' },
  { id: 'infographie', label: 'Infographie' },
  { id: 'web-design', label: 'Web Design' },
  { id: 'sites-web', label: 'Sites Web' },
  { id: 'print-textile', label: 'Print & Textile' },
  { id: 'video-ia', label: 'Vidéo IA' },
]

export const projects: Project[] = [
  {
    id: 'mukite',
    title: 'Mukite',
    category: 'sites-web',
    tags: 'Développement web · Community management',
    description:
      'Plateforme web développée sur mesure pour Mukite, accompagnée d’une stratégie de community management pour renforcer sa présence en ligne.',
    image: imgMukite,
  },
  {
    id: 'bella-event',
    title: 'Bella Event',
    category: 'infographie',
    tags: 'Flyers · Affiches · Identité visuelle',
    description:
      'Identité visuelle complète pour Bella Event : affiches, flyers et supports de communication pour un mariage anniversaire réussi.',
    image: imgBella,
  },
  {
    id: 'oly-prestige',
    title: 'Oly Prestige',
    category: 'sites-web',
    tags: 'Site web · Réseaux sociaux · Supports print',
    description:
      'Conciergerie de luxe : site web élégant, présence sur les réseaux sociaux et supports print haut de gamme.',
    image: imgOly,
  },
  {
    id: 'cdjt',
    title: 'CDJT',
    category: 'infographie',
    tags: 'Logo · Supports de communication',
    description:
      'Création du logo et des supports de communication pour le Conseil et Defense Juridique pour Tous.',
    image: imgCdjt,
  },
  {
    id: 'lady-construction',
    title: 'Lady Construction',
    category: 'infographie',
    tags: 'Supports de formation · Infographie',
    description:
      'Supports de formation et visuels professionnels pour Lady Construction, entreprise du secteur BTP.',
    image: imgLady,
  },
  {
    id: 'site-institutionnel',
    title: 'Site web institutionnel',
    category: 'sites-web',
    tags: 'Design · Développement · Mise en ligne',
    description:
      'Conception, développement et mise en ligne d’un site web institutionnel moderne et responsive.',
    image: imgInstitutionnel,
  },
  {
    id: 'boma',
    title: 'BOMA',
    category: 'print-textile',
    tags: 'Streetwear · T-shirts · Casquettes',
    description:
      'Collection streetwear BOMA : impression sur T-shirts, casquettes et textile personnalisé.',
    image: imgBoma,
  },
  {
    id: 'video-ia',
    title: 'Vidéo promotionnelle IA',
    category: 'video-ia',
    tags: 'Voix off · Images générées · Montage',
    description:
      'Vidéo promotionnelle générée par IA : voix off naturelle, images percutantes et montage professionnel.',
    image: imgVideoIa,
  },
]
