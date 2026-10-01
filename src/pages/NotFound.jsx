import { motion } from 'framer-motion'
import Button from '../components/Button.jsx'

export default function NotFound() {
  return (
    <section className="min-h-[80vh] grid place-items-center pt-24 pb-16">
      <div className="container-x text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-display text-[8rem] sm:text-[12rem] leading-none text-stroke">404</p>
          <h1 className="heading-md mt-2">Signal lost.</h1>
          <p className="mt-4 text-white/70 max-w-md mx-auto">
            We couldn't find that page. Let's get you back to the main stage.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Button to="/" variant="primary">Back to Home</Button>
            <Button to="/contact" variant="outline">Contact Us</Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
