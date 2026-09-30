import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { homeServices } from '../../data/services'
import AnimatedSection from '../common/AnimatedSection'
import SectionTitle from '../common/SectionTitle'

export default function ServicesPreview() {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <AnimatedSection>
          <SectionTitle label="Nos services" title="Des solutions digitales complètes" />
        </AnimatedSection>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {homeServices.map((service, i) => (
            <AnimatedSection key={service.id} delay={i * 0.08}>
              <Link
                to="/nos-services"
                className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-card transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-card-hover"
              >
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-forge-light text-forge-blue transition-all duration-300 group-hover:bg-forge-blue group-hover:text-white">
                  <service.icon className="h-6 w-6" />
                </span>
                <h3 className="font-bold text-forge-navy">{service.title}</h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-forge-muted">
                  {service.description}
                </p>
                <span className="mt-5 flex h-9 w-9 items-center justify-center self-end rounded-full border border-forge-blue/30 text-forge-blue transition-all duration-300 group-hover:bg-forge-blue group-hover:text-white">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
