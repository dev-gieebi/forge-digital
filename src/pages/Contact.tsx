import { useState, type ChangeEvent, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import {
  CheckCircle2,
  Clock,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react'
import SocialIcon, { type SocialName } from '../components/common/SocialIcon'
import AnimatedSection from '../components/common/AnimatedSection'
import Splash from '../components/common/Splash'
import { cn } from '../lib/utils'
import { usePageMeta } from '../hooks/usePageMeta'

interface FormState {
  nom: string
  prenom: string
  email: string
  telephone: string
  entreprise: string
  typeProjet: string
  message: string
}

type Errors = Partial<Record<keyof FormState, string>>
type Status = 'idle' | 'loading' | 'success' | 'error'

const initialForm: FormState = {
  nom: '',
  prenom: '',
  email: '',
  telephone: '',
  entreprise: '',
  typeProjet: '',
  message: '',
}

const contactInfo = [
  { icon: Phone, label: 'Téléphone', value: '+237 6 00 00 00 00' },
  { icon: Mail, label: 'Email', value: 'contact@forgedigital.com' },
  { icon: MapPin, label: 'Adresse', value: 'Douala, Cameroun' },
  { icon: Clock, label: 'Horaires', value: 'Lun – Sam : 8h00 – 18h00' },
]

const socials: Array<{ name: SocialName; label: string; href: string }> = [
  { name: 'facebook', label: 'Facebook', href: 'https://facebook.com' },
  { name: 'instagram', label: 'Instagram', href: 'https://instagram.com' },
  { name: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com' },
  { name: 'youtube', label: 'YouTube', href: 'https://youtube.com' },
]

const inputClass =
  'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-forge-navy placeholder:text-slate-400 transition-all duration-300 focus:border-forge-blue focus:ring-2 focus:ring-forge-blue/20 focus:outline-none'

function validate(form: FormState): Errors {
  const errors: Errors = {}
  if (!form.nom.trim()) errors.nom = 'Le nom est requis.'
  if (!form.prenom.trim()) errors.prenom = 'Le prénom est requis.'
  if (!form.email.trim()) errors.email = 'L’email est requis.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Email invalide.'
  if (form.telephone && !/^[\d\s+()-]{6,}$/.test(form.telephone))
    errors.telephone = 'Numéro de téléphone invalide.'
  if (!form.typeProjet) errors.typeProjet = 'Choisissez un type de projet.'
  if (form.message.trim().length < 10)
    errors.message = 'Décrivez votre projet en au moins 10 caractères.'
  return errors
}

export default function Contact() {
  usePageMeta(
    'Contact — Forge Digital',
    'Parlons de votre projet : contactez Forge Digital pour vos besoins en web design, développement, infographie et IA.',
  )

  const [form, setForm] = useState<FormState>(initialForm)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')

  const update = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    setErrors((err) => ({ ...err, [name]: undefined }))
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const errs = validate(form)
    setErrors(errs)
    if (Object.keys(errs).length > 0) return
    setStatus('loading')
    try {
      // Simulated async submit — connect your backend / email service here.
      await new Promise((r) => setTimeout(r, 1200))
      setStatus('success')
      setForm(initialForm)
    } catch {
      setStatus('error')
    }
  }

  const field = (
    name: keyof FormState,
    label: string,
    props: Record<string, unknown> = {},
    element: 'input' | 'select' | 'textarea' = 'input',
  ) => (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-xs font-semibold text-forge-navy">
        {label}
      </label>
      {element === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          rows={4}
          className={cn(inputClass, errors[name] && 'border-red-400')}
          value={form[name]}
          onChange={update}
          {...props}
        />
      ) : element === 'select' ? (
        <select
          id={name}
          name={name}
          className={cn(inputClass, errors[name] && 'border-red-400')}
          value={form[name]}
          onChange={update}
          {...props}
        >
          <option value="">Sélectionnez…</option>
          <option value="site-web">Site web</option>
          <option value="infographie">Infographie / Identité visuelle</option>
          <option value="ia">Agent IA / Automatisation</option>
          <option value="print">Impression sur supports</option>
          <option value="video">Vidéo promotionnelle IA</option>
          <option value="autre">Autre</option>
        </select>
      ) : (
        <input
          id={name}
          name={name}
          className={cn(inputClass, errors[name] && 'border-red-400')}
          value={form[name]}
          onChange={update}
          {...props}
        />
      )}
      {errors[name] && <p className="mt-1 text-xs text-red-500">{errors[name]}</p>}
    </div>
  )

  return (
    <>
      <Splash side="left" />
      <Splash side="right" />

      <section className="relative overflow-hidden pb-20 pt-28 lg:pt-36">
        <div
          className="pointer-events-none absolute -right-24 -top-16 h-[420px] w-[560px] rounded-[45%_55%_60%_40%/50%_45%_55%_50%] bg-forge-light"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-forge-blue">
              Contact
              <span className="h-px w-14 bg-forge-blue" aria-hidden="true" />
            </p>
            <h1 className="text-4xl font-extrabold text-forge-navy sm:text-5xl">
              Parlons de <span className="text-forge-blue">votre projet</span>
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-forge-muted sm:text-base">
              Racontez-nous votre idée : nous vous répondons rapidement avec une proposition adaptée
              à vos besoins.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
            {/* Form */}
            <AnimatedSection>
              <form
                onSubmit={onSubmit}
                noValidate
                className="rounded-3xl border border-slate-100 bg-white p-7 shadow-card sm:p-9"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  {field('nom', 'Nom', { placeholder: 'Votre nom', autoComplete: 'family-name' })}
                  {field('prenom', 'Prénom', {
                    placeholder: 'Votre prénom',
                    autoComplete: 'given-name',
                  })}
                  {field('email', 'Email', {
                    type: 'email',
                    placeholder: 'vous@exemple.com',
                    autoComplete: 'email',
                  })}
                  {field('telephone', 'Téléphone', {
                    type: 'tel',
                    placeholder: '+237 6 00 00 00 00',
                    autoComplete: 'tel',
                  })}
                  {field('entreprise', 'Entreprise (optionnel)', {
                    placeholder: 'Nom de votre entreprise',
                    autoComplete: 'organization',
                  })}
                  {field('typeProjet', 'Type de projet', {}, 'select')}
                </div>
                <div className="mt-5">
                  {field('message', 'Message', { placeholder: 'Décrivez votre projet…' }, 'textarea')}
                </div>

                {status === 'success' && (
                  <p className="mt-4 flex items-center gap-2 rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                    <CheckCircle2 className="h-5 w-5" />
                    Votre demande a bien été envoyée. Nous revenons vers vous très vite !
                  </p>
                )}
                {status === 'error' && (
                  <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                    Une erreur est survenue. Réessayez ou contactez-nous directement par email.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="group mt-6 inline-flex items-center gap-2 rounded-full bg-forge-blue px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-forge-blue/30 transition-all duration-300 hover:bg-forge-blue-dark hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Envoi en cours…
                    </>
                  ) : (
                    <>
                      Envoyer ma demande
                      <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            </AnimatedSection>

            {/* Infos */}
            <AnimatedSection delay={0.15} className="flex flex-col gap-6">
              <div className="rounded-3xl border border-slate-100 bg-white p-7 shadow-card">
                <h2 className="text-lg font-bold text-forge-navy">Nos coordonnées</h2>
                <ul className="mt-5 space-y-4">
                  {contactInfo.map(({ icon: Icon, label, value }) => (
                    <li key={label} className="flex items-center gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-forge-light text-forge-blue">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-forge-muted">
                          {label}
                        </p>
                        <p className="text-sm font-semibold text-forge-navy">{value}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex gap-3">
                  {socials.map(({ name, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-forge-navy transition-all duration-300 hover:border-forge-blue hover:bg-forge-blue hover:text-white"
                    >
                      <SocialIcon name={name} className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Location card */}
              <div className="relative flex-1 overflow-hidden rounded-3xl bg-forge-navy p-7 shadow-card">
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-forge-blue/20 blur-2xl"
                  aria-hidden="true"
                />
                <MapPin className="h-8 w-8 text-forge-blue" />
                <h2 className="mt-3 text-lg font-bold text-white">Où nous trouver</h2>
                <p className="mt-1 text-sm text-white/75">Douala, Cameroun</p>
                <p className="font-script mt-4 text-2xl text-white/85">
                  Votre projet commence ici.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
