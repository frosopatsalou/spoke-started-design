import { useState } from 'react'
import type { FormEvent } from 'react'
import { ActionBar, Input, SummaryRow, TopBar } from '../components'
import './ChooseService.css'
import './Confirm.css'

export type BookingDetails = {
  service: { title: string; price: string }
  slot: { day: string; time: string }
  name: string
  phone: string
}
export type ConfirmProps = {
  onBack?: () => void
  onConfirm?: (booking: BookingDetails) => void | Promise<void>
}

function readSummary() {
  let service = { title: 'Flat tyre repair', price: '€15' }
  let slot = { day: 'Today', time: '16:30' }
  try {
    const saved = JSON.parse(sessionStorage.getItem('spoke.selectedService') ?? 'null')
    if (typeof saved?.title === 'string' && typeof saved?.price === 'string') {
      service = { title: saved.title, price: saved.price }
    }
    const savedSlot = JSON.parse(sessionStorage.getItem('spoke.selectedSlot') ?? 'null')
    if (['Today', 'Tomorrow', 'Mon 16'].includes(savedSlot?.day) && ['12:00', '14:00', '16:30', '17:30'].includes(savedSlot?.time)) {
      slot = { day: savedSlot.day, time: savedSlot.time }
    }
  } catch { /* Direct links and browsers without storage use the Figma defaults. */ }
  return { service, slot }
}

/** Figma screen 7:128 — 03 Confirm. Pass onConfirm to connect a booking API. */
export function Confirm({ onBack, onConfirm }: ConfirmProps) {
  const [{ service, slot }] = useState(readSummary)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [pending, setPending] = useState(false)
  const [message, setMessage] = useState('')

  async function submitBooking(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (pending) return
    setMessage('')
    if (!onConfirm) {
      setMessage('Preview complete. No booking has been submitted.')
      return
    }
    setPending(true)
    try {
      await onConfirm({ service, slot, name: name.trim(), phone: phone.trim() })
      setMessage('Your booking is confirmed.')
    } catch {
      setMessage('We could not confirm your booking. Please try again.')
    } finally {
      setPending(false)
    }
  }

  return (
    <div className="choose-service-screen confirm-screen">
      <TopBar className="choose-service-screen__top-bar" step="Step 3 of 3" onBack={onBack ?? (() => window.location.assign('/pick-slot'))} />
      <main className="choose-service-screen__content">
        <header className="choose-service-screen__header"><h1>Check and confirm</h1></header>
        <section className="confirm-screen__summary" aria-label="Booking summary">
          <SummaryRow label="Service" value={service.title} />
          <SummaryRow label="Drop-off" value={`${slot.day} at ${slot.time}`} />
          <SummaryRow label="Price" value={`${service.price}, pay at pick-up`} />
        </section>
        <form id="confirm-booking" className="confirm-screen__form" onSubmit={submitBooking}>
          <Input
            className="confirm-screen__input"
            label="Your name"
            name="name"
            autoComplete="name"
            value={name}
            required
            maxLength={120}
            onChange={event => {
              setName(event.target.value)
              event.target.setCustomValidity(event.target.value.trim() ? '' : 'Please enter your name.')
              setMessage('')
            }}
          />
          <Input
            className="confirm-screen__input"
            label="Phone number"
            placeholder="+32 470 12 34 56"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={phone}
            required
            autoFocus
            maxLength={30}
            onChange={event => {
              const value = event.target.value
              setPhone(value)
              const digits = value.replace(/\D/g, '').length
              const valid = /^[+\d\s().-]+$/.test(value) && digits >= 7 && digits <= 15
              event.target.setCustomValidity(valid ? '' : 'Please enter a valid phone number with 7 to 15 digits.')
              setMessage('')
            }}
          />
          <p className="confirm-screen__note">We text you when your bike is ready. You pay when you pick it up.</p>
          {message && <p className="confirm-screen__note" role="status">{message}</p>}
        </form>
      </main>
      <ActionBar className="choose-service-screen__action-bar" label={pending ? 'Confirming…' : 'Confirm booking'} type="submit" form="confirm-booking" disabled={pending} />
    </div>
  )
}
