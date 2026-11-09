import { useState } from 'react'
import { ActionBar, TimeSlot, TopBar } from '../components'
import './ChooseService.css'
import './PickSlot.css'

const days = ['Today', 'Tomorrow', 'Mon 16'] as const
const times = ['09:00', '10:30', '12:00', '14:00', '16:30', '17:30'] as const
type Day = typeof days[number]
type Time = typeof times[number]
export type DropOffSlot = { day: Day; time: Time }
export type PickSlotProps = { onBack?: () => void; onContinue?: (slot: DropOffSlot) => void }

function readService() {
  try {
    const service = JSON.parse(sessionStorage.getItem('spoke.selectedService') ?? 'null')
    if (typeof service?.title === 'string' && typeof service?.duration === 'string') {
      return { title: service.title, duration: service.duration }
    }
  } catch { /* Direct links also work without browser storage. */ }
  return { title: 'Flat tyre repair', duration: '30 min' }
}

function readSlot(): DropOffSlot {
  try {
    const slot = JSON.parse(sessionStorage.getItem('spoke.selectedSlot') ?? 'null')
    if (days.includes(slot?.day) && times.includes(slot?.time) && !['09:00', '10:30'].includes(slot?.time)) {
      return slot
    }
  } catch { /* Use the selected state shown in the design. */ }
  return { day: 'Today', time: '16:30' }
}

/** Figma screen 7:121 — 02 Pick a slot. Availability is sample design data. */
export function PickSlot({ onBack, onContinue }: PickSlotProps) {
  const [service] = useState(readService)
  const [slot, setSlot] = useState(readSlot)
  const [message, setMessage] = useState('')
  const duration = service.duration.replace(/ min$/, ' minutes')

  function continueBooking() {
    try {
      sessionStorage.setItem('spoke.selectedSlot', JSON.stringify(slot))
    } catch { /* The selected slot can still be passed through the callback. */ }
    if (onContinue) onContinue(slot)
    else setMessage(`${slot.day} at ${slot.time} selected. Next, confirm your details.`)
  }

  return (
    <div className="choose-service-screen pick-slot-screen">
      <TopBar className="choose-service-screen__top-bar" step="Step 2 of 3" onBack={onBack ?? (() => window.location.assign('/choose-service'))} />
      <main className="choose-service-screen__content">
        <header className="choose-service-screen__header">
          <h1>Pick a drop-off time</h1>
          <p>{service.title}, about {duration}</p>
        </header>
        <section className="pick-slot-screen__group" aria-labelledby="day-label">
          <h2 id="day-label">Day</h2>
          <div className="pick-slot-screen__options" role="group" aria-labelledby="day-label">
            {days.map(day => <TimeSlot key={day} label={day} state={slot.day === day ? 'Selected' : 'Default'} onClick={() => { setSlot(current => ({ ...current, day })); setMessage('') }} />)}
          </div>
        </section>
        <section className="pick-slot-screen__group" aria-labelledby="time-label">
          <h2 id="time-label">Drop-off time</h2>
          <div className="pick-slot-screen__options" role="group" aria-labelledby="time-label">
            {times.map(time => <TimeSlot key={time} label={time} state={['09:00', '10:30'].includes(time) ? 'Disabled' : slot.time === time ? 'Selected' : 'Default'} onClick={() => { setSlot(current => ({ ...current, time })); setMessage('') }} />)}
          </div>
        </section>
        <p className="pick-slot-screen__note">Ready the same day. We text you when your bike is done.</p>
        {message && <p className="choose-service-screen__status" role="status">{message}</p>}
      </main>
      <ActionBar className="choose-service-screen__action-bar" label="Continue" onClick={continueBooking} />
    </div>
  )
}
