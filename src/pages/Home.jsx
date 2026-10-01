import Hero from '../sections/Hero.jsx'
import Intro from '../sections/Intro.jsx'
import ServicesPreview from '../sections/ServicesPreview.jsx'
import WhyChooseUs from '../sections/WhyChooseUs.jsx'
import GalleryPreview from '../sections/GalleryPreview.jsx'
import Testimonials from '../sections/Testimonials.jsx'
import CTABanner from '../sections/CTABanner.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <ServicesPreview />
      <WhyChooseUs />
      <GalleryPreview />
      <Testimonials />
      <CTABanner />
    </>
  )
}
