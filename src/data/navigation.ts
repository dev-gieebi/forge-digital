export interface NavItem {
  label: string
  path: string
}

export const navigation: NavItem[] = [
  { label: 'Accueil', path: '/' },
  { label: 'À Propos', path: '/a-propos' },
  { label: 'Nos services', path: '/nos-services' },
  { label: 'Réalisations', path: '/realisations' },
  { label: 'Pourquoi nous', path: '/pourquoi-nous' },
  { label: 'Contacts', path: '/contact' },
]
