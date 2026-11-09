import { useState } from 'react'
import { ActionBar, ServiceCard, TopBar } from '../components'
import './ChooseService.css'

const services = [
  { id: 'flat-tyre', title: 'Flat tyre repair', description: 'Tube or tyre swap, any wheel size.', price: '€15', duration: '30 min' },
  { id: 'brakes', title: 'Brake check and adjust', description: 'Pads, cables and alignment.', price: '€25', duration: '45 min' },
  { id: 'gears', title: 'Gear tune-up', description: 'Smooth shifting on every gear.', price: '€30', duration: '45 min' },
  { id: 'full-service', title: 'Full service', description: 'Everything checked, cleaned and adjusted.', price: '€89', duration: '2 hours' },
] as const

export type RepairService = typeof services[number]
export type ChooseServiceProps = {
  onBack?: () => void
  onContinue?: (service: RepairService) => void
}

/** Figma screen 7:114 — 01 Choose a service. */
export function ChooseService({ onBack, onContinue }: ChooseServiceProps) {
  const [selectedId, setSelectedId] = useState<RepairService['id']>(() => {
    try {
      const saved = JSON.parse(sessionStorage.getItem('spoke.selectedService') ?? 'null')
      return services.find(service => service.id === saved?.id)?.id ?? 'flat-tyre'
    } catch { return 'flat-tyre' }
  })
  const selectedService = services.find(service => service.id === selectedId)!

  function continueBooking() {
    if (onContinue) {
      onContinue(selectedService)
      return
    }
    // Carry the chosen service into the next booking screen.
    try {
      sessionStorage.setItem('spoke.selectedService', JSON.stringify(selectedService))
    } catch {
      // Selection still works when the browser blocks session storage.
    }
    window.location.assign('/pick-slot')
  }

  return (
    <div className="choose-service-screen">
      <TopBar
        className="choose-service-screen__top-bar"
        onBack={onBack ?? (() => window.location.assign('/components'))}
      />
      <main className="choose-service-screen__content">
        <header className="choose-service-screen__header">
          <h1>Choose a service</h1>
          <p>What does your bike need?</p>
        </header>
        <div className="choose-service-screen__list" role="group" aria-label="Choose a service">
          {services.map(service => (
            <ServiceCard
              key={service.id}
              className="choose-service-screen__card"
              title={service.title}
              description={service.description}
              price={service.price}
              duration={service.duration}
              state={selectedId === service.id ? 'Selected' : 'Default'}
              onClick={() => {
                setSelectedId(service.id)
              }}
            />
          ))}
        </div>
      </main>
      <ActionBar className="choose-service-screen__action-bar" label="Continue" onClick={continueBooking} />
    </div>
  )
}
