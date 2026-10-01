import { FaMicrophoneAlt, FaSlidersH, FaWaveSquare, FaTools } from 'react-icons/fa'

const map = {
  speaker: FaMicrophoneAlt,
  mixer: FaSlidersH,
  wave: FaWaveSquare,
  install: FaTools
}

export default function ServiceIcon({ name, className = '' }) {
  const Icon = map[name] || FaWaveSquare
  return <Icon className={className} />
}
