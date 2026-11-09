import { useState } from 'react'
import { ActionBar, BookingCard, Button, Input, ServiceCard, SummaryRow, Tag, TimeSlot, TopBar } from './components'
import './App.css'
import { ComponentOverview } from './pages/ComponentOverview'
import { ChooseService } from './pages/ChooseService'
import { PickSlot } from './pages/PickSlot'

const colours = ['surface', 'text-primary', 'text-muted', 'border', 'brand', 'on-brand', 'tag-background', 'tag-text']
const typeStyles = [
  ['Screen/Title', 'screen-title', 'Choose a service'],
  ['Card/Title', 'card-title', 'Flat tyre repair'],
  ['Card/Body', 'card-body', 'Tube or tyre swap, any wheel size.'],
  ['Card/Caption', 'card-caption', 'Next free slot: today at 16:30'],
  ['Label/Button', 'label-button', 'Book this repair'],
  ['Label/Field', 'label-field', 'Your name'],
  ['Label/Tag', 'label-tag', '30 min'],
]

function App() {
  const [slot, setSlot] = useState('16:30')
  const [selected, setSelected] = useState(true)
  const [message, setMessage] = useState('')
  const notify = () => setMessage('Preview action activated. No booking was submitted.')
  if (window.location.pathname === '/pick-slot') return <PickSlot />
  if (window.location.pathname === '/' || window.location.pathname === '/choose-service') return <ChooseService />
  if (window.location.pathname === '/components') return <ComponentOverview />
  if (window.location.pathname === '/booking-card') {
    return <main className="booking-card-preview">
      <BookingCard onBook={notify} />
      <p role="status" className="preview-status">{message}</p>
    </main>
  }
  return <main className="preview">
    <header className="preview-header"><h1>Spoke design system</h1><p>Foundations and reusable components from your Figma starter kit.</p></header>
    <section className="preview-section" aria-labelledby="colours"><h2 id="colours">Colours</h2><div className="swatches">{colours.map(name => <div key={name}><div className="swatch" style={{ backgroundColor: `var(--color-${name})` }} /><p>{name}</p><code>--color-{name}</code></div>)}</div></section>
    <section className="preview-section" aria-labelledby="type"><h2 id="type">Typography</h2><div className="type-list">{typeStyles.map(([name, token, sample]) => <div className="type-row" key={token}><span>{name}</span><p style={{ font: `var(--font-${token})` }}>{sample}</p></div>)}</div></section>
    <section className="preview-section" aria-labelledby="spacing"><h2 id="spacing">Spacing and radius</h2><div className="preview-row">{[4, 8, 12, 16, 20, 24].map(value => <div key={value}><div className="spacing-sample" style={{ width: `var(--space-${value})` }} /><p>space/{value}</p></div>)}</div><div className="preview-row">{['md', 'lg', 'pill'].map(radius => <div key={radius}><div className="radius-sample" style={{ borderRadius: `var(--radius-${radius})` }} /><p>radius/{radius}</p></div>)}</div></section>
    <section className="preview-section" aria-labelledby="components"><h2 id="components">Components</h2>
      <div className="preview-example"><h3>Button</h3><div className="preview-row"><Button onClick={notify} /><Button variant="Secondary" onClick={notify} /><Button disabled label="Disabled" /></div></div>
      <div className="preview-example"><h3>Tag</h3><div className="preview-row"><Tag /><Tag label="All bikes" /></div></div>
      <div className="preview-example"><h3>Time slot</h3><div className="preview-row" role="group" aria-label="Drop-off time">{['10:30', '16:30', '17:30'].map(time => <TimeSlot key={time} label={time} state={time === '17:30' ? 'Disabled' : time === slot ? 'Selected' : 'Default'} onClick={() => setSlot(time)} />)}</div></div>
      <div className="preview-example"><h3>Input</h3><div className="preview-row"><Input autoComplete="name" /><Input label="Phone number" type="tel" placeholder="Your phone number" autoComplete="tel" /></div></div>
      <div className="preview-example"><h3>Top bar</h3><TopBar onBack={() => setMessage('Back button activated in the component preview.')} /></div>
      <div className="preview-example"><h3>Service card</h3><div className="preview-row"><ServiceCard onClick={() => setSelected(false)} /><ServiceCard state={selected ? 'Selected' : 'Default'} onClick={() => setSelected(value => !value)} /></div></div>
      <div className="preview-example"><h3>Summary row</h3><SummaryRow /></div>
      <div className="preview-example"><h3>Action bar</h3><ActionBar onClick={notify} /></div>
      <div className="preview-example"><h3>Booking card</h3><BookingCard onBook={notify} /></div>
      <p role="status" className="preview-status">{message}</p>
    </section>
  </main>
}
export default App
