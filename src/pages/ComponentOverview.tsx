import { useState } from 'react'
import { ActionBar, Button, Input, ServiceCard, SummaryRow, Tag, TimeSlot, TopBar } from '../components'

/** Interactive counterparts of every component in Figma section 3:25. */
export function ComponentOverview() {
  const [slot, setSlot] = useState('16:30')
  const [service, setService] = useState(1)
  const [message, setMessage] = useState('')
  const announce = (action: string) => setMessage(`${action} activated in the component preview.`)

  return (
    <main className="preview">
      <header className="preview-header">
        <h1>Spoke components</h1>
        <p>Reusable components and variants from the Figma overview.</p>
      </header>
      <section className="preview-section" aria-labelledby="button-heading">
        <h2 id="button-heading">Button</h2>
        <div className="preview-row">
          <Button onClick={() => announce('Primary button')} />
          <Button variant="Secondary" onClick={() => announce('Secondary button')} />
        </div>
      </section>
      <section className="preview-section" aria-labelledby="tag-heading">
        <h2 id="tag-heading">Tag</h2>
        <div><Tag /></div>
      </section>
      <section className="preview-section" aria-labelledby="slot-heading">
        <h2 id="slot-heading">Time slot</h2>
        <div className="preview-row" role="group" aria-label="Drop-off time">
          {['10:30', '16:30', '17:30'].map(time => (
            <TimeSlot
              key={time}
              label={time}
              state={time === '17:30' ? 'Disabled' : time === slot ? 'Selected' : 'Default'}
              onClick={() => setSlot(time)}
            />
          ))}
        </div>
      </section>
      <section className="preview-section" aria-labelledby="input-heading">
        <h2 id="input-heading">Input</h2>
        <p>Click or tab into either field to see the focus variant.</p>
        <div className="preview-row">
          <Input id="overview-name" autoComplete="name" />
          <Input id="overview-phone" label="Phone number" placeholder="Your phone number" type="tel" autoComplete="tel" />
        </div>
      </section>
      <section className="preview-section" aria-labelledby="top-bar-heading">
        <h2 id="top-bar-heading">Top bar</h2>
        <TopBar onBack={() => announce('Back button')} />
      </section>
      <section className="preview-section" aria-labelledby="service-heading">
        <h2 id="service-heading">Service card</h2>
        <div className="preview-row" role="group" aria-label="Choose a service">
          {[0, 1].map(index => (
            <ServiceCard key={index} state={service === index ? 'Selected' : 'Default'} onClick={() => setService(index)} />
          ))}
        </div>
      </section>
      <section className="preview-section" aria-labelledby="summary-heading">
        <h2 id="summary-heading">Summary row</h2>
        <SummaryRow />
      </section>
      <section className="preview-section" aria-labelledby="action-heading">
        <h2 id="action-heading">Action bar</h2>
        <ActionBar onClick={() => announce('Action bar button')} />
      </section>
      <p role="status" className="preview-status">{message}</p>
    </main>
  )
}
