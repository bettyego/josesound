import SectionHeading from '../components/SectionHeading.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import Button from '../components/Button.jsx'
import { FiArrowRight } from 'react-icons/fi'
import { services } from '../data/site.js'

export default function ServicesPreview() {
  return (
    <section className="section bg-ink-200 relative">
      <div className="absolute inset-0 bg-noise opacity-50 pointer-events-none" />

      <div className="container-x relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="What We Do"
            title="Premium audio. End to end."
            subtitle="Four core services powered by professional equipment and engineers who care about every decibel."
          />
          <Button to="/services" variant="outline" className="self-start md:self-end">
            All Services <FiArrowRight />
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
